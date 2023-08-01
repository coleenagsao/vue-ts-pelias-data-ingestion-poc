'use strict';

import express, {Request, Response} from 'express';
const router = express.Router();
import axios from 'axios';
const Document = require('pelias-model').Document; // import document model

// performs reverse address search and returns properties data containing country, region, and etch data
const getParents = async (req: Request) => {
    try {
      const response = await axios.get(`http://localhost:4000/v1/reverse?point.lat=${req.body.lat}&point.lon=${req.body.lon}`);
      return response.data.features[0].properties;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

// processes gids (region_gid, country_gid, etc) like whosonfirst:region:85676145 and gets the ID
const getGID = (inputString: String) => { 
    const parts = inputString.split(":");

    if (parts.length >= 3) {
        const result = parts.slice(2).join(":");
        return(result);

    } else {
        console.log("Not enough colons in the string to extract the desired part.");
    }
}

router.post("/api/data", async (req, res) => {
    try { 
        var rev_add = await getParents(req);    // perform reverse geocoding, returns properties (country, region)
        console.log(rev_add);                   

        var doc = new Document( 'custom', 'venue', req.body.source_id)
            .setName( 'default', req.body.name )
            .addCategory( req.body.category )
            .setCentroid({ lon: req.body.lon, lat: req.body.lat})
            .addParent( 'country', rev_add.country, getGID(rev_add.country_gid), rev_add.country_a) 

        // directly stringify the inner object after removing the document wrapper
        const data = JSON.stringify({...doc});

        // make the POST request
        var uniqueID = ["custom", "venue", req.body.source_id].join(":");

        axios.put('http://localhost:9200/pelias/_create/' + uniqueID, data, {
            headers: {
            'Content-Type': 'application/json',
            },
        })
        .then(response => {
            console.log('Response:', response.data);
        })
        .catch(error => {
            console.error('Error:', error.message);
        });

        res.send({message: doc});

    } catch (err) {
        res.status(500).json({error: "Error"});
    }
})

module.exports = router;