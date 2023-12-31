import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 3000;

const app = express();          // initialize express
app.use(cors());                // enable cors
app.use(express.json());        // parse JSON data from the request body

app.use("", require("./routes/routes.ts"));    // create routes

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})