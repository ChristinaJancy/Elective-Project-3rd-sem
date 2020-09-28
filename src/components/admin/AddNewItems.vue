<template>
  <section class="additems">
    <v-snackbar top v-model="snackbar" :multi-line="multiLine">
      {{ itemAdded }}
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
      </template>
    </v-snackbar>
    <v-img
      :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
      src="https://firebasestorage.googleapis.com/v0/b/endproject-pwa.appspot.com/o/assets%2Fyosemite1.jpg?alt=media&token=c055750c-044c-4842-8f48-0989b79958eb"
      cover
    >
      <v-theme-provider>
        <v-container>
          <v-row>
            <v-col offset-md="1" md="5" sm="12" xs="12" cols="12">
              <h1>Add new item</h1>
              <div class="pa-2" id="info">
                <v-text-field clearable label="Name of product" required v-model="name"></v-text-field>
                <v-text-field clearable label="Description" required v-model="description"></v-text-field>
                <v-text-field clearable label="Price" required v-model="price"></v-text-field>
                <v-row class="pa-2">
             <p class="mb-2">Sizes:</p>
          <v-checkbox v-model="size" label="XS" value="XS"></v-checkbox>
          <v-checkbox v-model="size" label="S" value="S"></v-checkbox>
          <v-checkbox v-model="size" label="M" value="M"></v-checkbox>
          <v-checkbox v-model="size" label="L" value="L"></v-checkbox>
          <v-checkbox v-model="size" label="XL" value="XL"></v-checkbox>
                </v-row>
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
                >Add Item</v-btn>
                <v-btn color="error" class="black--text" depressed>Cancel</v-btn>
              </div>
            </v-col>

            <v-col offset-md="1" md="4" sm="12" xs="12" cols="12">
              <h1>PREVIEW</h1>
              <div class="pa-2" id="info">
                <v-simple-table id="product-table">
                  <thead>
                    <tr>
                      <th class="text-left" style="width70%">Name</th>
                      <th class="text-left" style="width70%">Size(s)</th>
                      <th class="text-left" style="width70%">Price DKK</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span id="td_name">{{name}}</span>
                        <br />
                        <span id="product_item_description">{{description}}</span>
                      </td>
                      <td id="product_sizes"> {{size.join(', ') }} </td>
                      <td id="preview_product_price">{{price}}</td>
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
    map-get($colorz, white),
    10px,
    5px,
    map-get($colorz, white)
  );
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
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

