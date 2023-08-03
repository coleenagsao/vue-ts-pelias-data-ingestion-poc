<template>
  <div>
    <!-- Nav bar-->
    <nav class="navbar m-5" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
        </a>
      </div>
    </nav>

    <!-- Form -->
    <div class="columns is-mobile is-centered">
      <div class="column is-half">
        <div class="m-5">
          <form class="box" @submit.prevent="submit">
            <!-- General -->
            <fieldset>
              <div class="columns">
                <!--Required: ID - must be unique -->
                <div class="column">
                  <div class="field">
                    <label class="label">ID</label>
                    <div class="control">
                      <input class="input" v-model="id" type="number" placeholder="1" >
                    </div>
                  </div>
                </div>

                <!--Required: Layer -->
                <div class="column ">
                  <div class="field is-expanded">
                    <label class="label">Layer</label>
                    <div class="select is-fullwidth">
                      <select v-model="layer">
                        <option>Venue</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!--Required: Category -->
                <div class="column">
                  <div class="field">
                    <label class="label">Category</label>
                    <div class="select is-fullwidth">
                      <select v-model="category">
                        <option disabled value="">Select a layer</option>
                        <option>Food</option>
                        <option>Recreation</option>
                        <option>Entertainment</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              
              <!--Required: Name -->
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input class="input" v-model="name" type="text" placeholder="Agara Ramen" >
                </div>
              </div>
            </fieldset>
            
            <fieldset class="my-5">
              <div class="columns">
                <div class="column">
                  <!-- Required: Latitude -->
                  <div class="field">
                    <label class="label">Latitude</label>
                    <div class="control">
                      <input class="input" v-model="lat" type="text" placeholder="13.145" >
                    </div>
                  </div>
                </div>
                <div class="column">
                  <!-- Required: Longitude -->
                  <div class="field">
                    <label class="label">Longitude</label>
                    <div class="control">
                      <input class="input" v-model="lon" type="text" placeholder="121.178" >
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
                               
            <button class="button is-primary" type="submit">Add</button>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  props: [],
  component: {  },
  setup(props, {emit}){
    const id = ref("");
    const layer = ref("");
    const category_options = ref(["food", "nightlife","recreation", "entertainment"]);
    const category = ref([]);
    const name = ref("");
    const houseNumber = ref("");
    const street = ref("");
    const lat = ref("");
    const lon = ref("");

    const submit = async () => {
      try {

        // create json with user's input
        let data = JSON.stringify({
          source: 'custom',
          layer: layer.value,
          source_id: id.value,
          category: category.value,
          name: name.value,
          lat: lat.value,
          lon: lon.value,
        })

        // send post request
        const response = await axios.post('http://localhost:3000/add', 
          data, { headers:{"Content-Type" : "application/json"} });
        console.log(response.data);
        
      } catch (error) {
        console.error(error);
      }
    }

    return { id, layer, name, houseNumber, street, category, category_options, lat, lon, submit }
  }
})


</script>

<style lang="scss">
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>