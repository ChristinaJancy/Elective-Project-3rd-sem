<template>
  <section class="additems">
    <v-snackbar top v-model="snackbar" :multi-line="multiLine">
      {{ itemAdded }}
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false"
          >Close
          </v-btn>
      </template>
    </v-snackbar>
    <v-img
      :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
      src="https://firebasestorage.googleapis.com/v0/b/endproject-pwa.appspot.com/o/assets%2Fyellow-flower.jpg?alt=media&token=14d019d8-9ad6-4fdf-b19a-caa08252632b"
      cover
    >
      <v-theme-provider>
        <v-container>
          <v-row>
            <v-col md="6" sm="12" xs="12" cols="12" style="text-align:center">
              <h1>Add new item</h1>
              <div class="pa-2" id="info">
                <v-text-field
                  clearable
                  label="Name of product"
                  required
                  v-model="name"
                ></v-text-field>
                <v-text-field
                  clearable
                  label="Description"
                  required
                  v-model="description"
                ></v-text-field>
                <v-text-field
                  clearable
                  label="Price"
                  required
                  v-model="price"
                ></v-text-field>

                <v-col align="center">
                   <p><b>Clothing sizes</b></p>
                    <v-row  style="justify-content:center;">
                    <v-checkbox v-model="size" label="XS" value="XS"></v-checkbox>
                    <v-checkbox v-model="size" label="S" value="S"></v-checkbox>
                    <v-checkbox v-model="size" label="M" value="M"></v-checkbox>
                    <v-checkbox v-model="size" label="L" value="L"></v-checkbox>
                    <v-checkbox v-model="size" label="XL" value="XL"></v-checkbox>
                    <v-checkbox v-model="size" label="empty" value=" "></v-checkbox>                                
                 </v-row>
                 <hr>
                  <p><b>Shoe sizes</b></p>
                <v-row  style="justify-content:center;">
                  <v-checkbox v-model="size" label="37" value="37"></v-checkbox>
                  <v-checkbox v-model="size" label="38" value="38"></v-checkbox>
                  <v-checkbox v-model="size" label="39" value="39"></v-checkbox>
                  <v-checkbox v-model="size" label="40" value="40"></v-checkbox>
                  <v-checkbox v-model="size" label="41" value="41"></v-checkbox>
                  <v-checkbox v-model="size" label="42" value="42"></v-checkbox>
                  <v-checkbox v-model="size" label="43" value="43"></v-checkbox>
                  <v-checkbox v-model="size" label="44" value="44"></v-checkbox>
                  <v-checkbox v-model="size" label="45" value="45"></v-checkbox>
               </v-row>
              </v-col>
              <hr>

                 <p align="center"><b>Colors</b></p>
                 <v-row style="justify-content:center;">
                  <v-checkbox v-model="color" label="Blue" value="Blue"></v-checkbox>
                  <v-checkbox v-model="color" label="Black" value="Black"></v-checkbox>
                  <v-checkbox v-model="color" label="White" value="White"></v-checkbox>
                  <v-checkbox v-model="color" label="Brown" value="Brown"></v-checkbox>
                  <v-checkbox v-model="color" label="Red" value="Red"></v-checkbox>
                  <v-checkbox v-model="color" label="Green" value="Green"></v-checkbox>
                  <v-checkbox v-model="color" label="Yellow" value="Yellow"></v-checkbox>
                  <v-checkbox v-model="color" label="empty" value=" "></v-checkbox>
                </v-row>
                <hr> 

                <p align="center"><b>Type</b></p>
                <v-row style="justify-content:center;">
                  <v-checkbox v-model="type" label="Shoe" value="Shoe"></v-checkbox>
                  <v-checkbox v-model="type" label="Short-sleeved" value="Short-sleeved"></v-checkbox>
                  <v-checkbox v-model="type" label="Pants" value="Pants"></v-checkbox>
                  <v-checkbox v-model="type" label="Long-sleeved" value="Long-sleeved"></v-checkbox>
                  <v-checkbox v-model="type" label="empty" value=" "></v-checkbox>
                </v-row>
                <hr>

                <p align="center"><b>Categories</b></p>
                 <v-row style="justify-content:center;">
                  <v-checkbox v-model="category" label="Sporty" value="Sporty"></v-checkbox>
                  <v-checkbox v-model="category" label="Chill" value="Chill"></v-checkbox>
                  <v-checkbox v-model="category" label="Outdoor" value="Outdoor"></v-checkbox>
                  <v-checkbox v-model="category" label="empty" value=" "></v-checkbox>
                </v-row> 
                <hr>

                <p  align="center"><b>Seasons</b></p>
                 <v-row style="justify-content:center;">
                  <v-checkbox v-model="season" label="Summer" value="Summer"></v-checkbox>
                  <v-checkbox v-model="season" label="Winter" value="Winter"></v-checkbox>
                  <v-checkbox v-model="season" label="Autumn" value="Autumn"></v-checkbox>
                  <v-checkbox v-model="season" label="Spring" value="Spring"></v-checkbox>
                  <v-checkbox v-model="season" label="empty" value=" "></v-checkbox>
                </v-row>
                <hr>
                <v-file-input
                  label="File input"
                  prepend-icon="mdi-camera"
                  required
                  @change="uploadImage"
                ></v-file-input>

                <v-btn
                  color="success"
                  class="black--text"
                  depressed
                  v-on:click="addNewProduct()"
                  :disabled="btnDisable"
                  @click="clear"
                  >Add Item</v-btn
                >
                <v-btn color="error" class="black--text" depressed
                  >Cancel</v-btn
                >
              </div>
            </v-col>

            <v-col md="6" sm="12" xs="12" cols="12"  style="text-align:center">
              <h1>PREVIEW</h1>
              <div class="pa-2" id="info">
                <v-simple-table id="product-table">
                  <thead>
                    <tr>
                      <th class="text-left" style="width70%">Name</th>
                      <th class="text-left" style="width70%">Info</th>
                      <th class="text-left" style="width70%">Price DKK</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span id="td_name">{{ name }}</span> 
                        <br>
                         <span id="product_item_description">{{ description }}</span>
                      </td>
                      <td>
                       
                      <b>Sizes: </b> {{ size.join(", ") }}
                  <br>
                      <b>Colors: </b>{{ color.join(", ") }}
                  <br>
                      <b>Types: </b>{{ type.join(", ") }}
                  <br>
                      <b>Categories: </b>{{ category.join(", ") }}
                  <br>
                      <b>Seasons: </b>{{ season.join(", ") }}
                   
                  <td>{{ price }}</td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-theme-provider>
    </v-img>
  </section>
</template>

<script>
import { dbProductAdd, fb } from "../../firebase.js";
// import { dbProductAdd, fb } from "../../../firebase.js";
/*eslint-disable*/

export default {
  data() {
    return {
      name: "",
      description: "",
      price: "",
      size: [],
      color: [],
      type: [],
      season: [],
      category: [],
      image: null, //var to store image url in
      btnDisable: true, //disable btn before image is uploaded
      multiLine: true,
      snackbar: false,
      itemAdded: "new product added",
    };
  },
  methods: {
    uploadImage(e) {
      //e is event
      let file = e; //store file in variable
      console.log(e); //check console.log
      var storageRef = fb.storage().ref("products/" + file.name);
      let uploadTask = storageRef.put(file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          //handle unsuccesful uploads
        },
        () => {
          //Handle succesful uploads on complete
          //For instance, get the download URL: https://firebasestorage.googleapis.com
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.image = downloadURL;
            this.btnDisable = false;
            console.log("File available", downloadURL);
          });
        }
      );
    },
    clear() {
      this.name = "";
      this.description = "";
      this.price = "";
    },

    addNewProduct() {
      //debugger;
      this.snackbar = true;
      dbProductAdd.add({
        name: this.name,
        description: this.description,
        price: this.price,
        size: this.size,
        color: this.color,
        type: this.type,
        category: this.category,
        season: this.season,
        image: this.image, //Add new property
      });
    },
  },
};
</script>



<style lang="scss" scoped>
@mixin infobox_mixin(
  $border-radius,
  $border-color,
  $padding,
  $margin-bottom,
  $color
) {
  border: $border-radius solid $border-color;
  padding: $padding;
  margin-bottom: $margin-bottom;
  color: $color;
}

h1 {
  @include infobox_mixin(
    5px,
    white,
    10px,
    5px,
   white,
  );
background-color:rgba(0, 0, 0, 0.445);
}

// Starts here:
#info {
  background-color: rgb(255, 255, 255);
}

tr th {
  font-weight: bold;
}

#td_name {
  font-weight: bold;
}
#product_description {
  font-style: italic;
  font-weight: 300;
  color: black;
  font-size: 13px;
}

.col h1 {
  text-align: right;
}

.col:last-child h1 {
  text-align: left;
}

#basket-checkout {
  font-size: 13px;
}

#basket-checkout {
  line-height: 2px;
}
</style>

