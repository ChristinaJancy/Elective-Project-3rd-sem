<template>
  <section class="favourite">
    <v-img
      :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
      src="https://firebasestorage.googleapis.com/v0/b/endproject-pwa.appspot.com/o/assets%2Fyellow-flower.jpg?alt=media&token=14d019d8-9ad6-4fdf-b19a-caa08252632b"
      cover
    >
        <v-container class="page_container">
          <v-row row wrap>
            <v-col cols="12" md="12" sm="12" xs="12">
              <h1 class="text-center">Favourite</h1>
              <div class="pa-2" id="info" >
               <span id="total-items"> <b>{{favourite.length}}</b> ITEMS </span>
                 <v-simple-table v-if="favourite.length > 0">
                    <thead>
                    <tr>
                        <th class="text-left">Product</th>
                        <th class="text-left">Info</th>
                        <th class="text-left">Remove</th>
                        <th class="text-left">Add to basket</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr v-for="item in favourite" :key="item.name">
                     <td id="id_product_img" style="text-align:center;">
                        <v-img v-bind:src="item.image"></v-img>
                      </td>

                    <td>
                        <span id="td_name" >{{item.name}}</span>
                        <br>
                            {{ item.price }} Dkk
                        <br><br>
                        <small>Size:<span v-for="(size, index) in item.size" :key="index"> {{ size + ', ' }}</span></small> 
                        <br>
                        <small> Color:<span v-for="(color, index) in item.color" :key="index"> {{ color }}</span> </small> 
                        <br>
                    </td>

                       <td>
                        <v-icon x-large color="iconcolor" @click="decreaseQnt(item)">mdi-minus</v-icon>
                      </td>
                      <td>
                        <v-btn @click="addToBasket(item)" depressed text small>
                          <v-icon x-large color="iconcolor">mdi-plus</v-icon>
                        </v-btn>
                      </td>
                    </tr>
                  </tbody>
                </v-simple-table>
                <v-simple-table light v-else>
                    <h2>You have no favourites yet.</h2>
                  
                </v-simple-table>
              </div> 
            </v-col>
          </v-row>
        </v-container>
    </v-img>
  </section>
</template>

<script scoped>
import { dbProductAdd, usersCollection } from "../firebase.js";
// import { dbProductAdd } from "../../firebase.js";

export default {
  data() {
    return {
      favouritetDump: [],
      basketDump: [],
      dialog: false,
      item: [],
      activeEditItem: null,
      multiLine: true,
      snackbar: false,
      updatedText: "Product has been updated",
      size: [],
      image: null,
      color: [],
      type: [],
      category: [],
      season: [],
    };
  },
  beforeCreate() {
    this.$store.dispatch("setProducts");
    this.$store.dispatch("setUsers")
  },

  methods: {
    deleteFavouriteItem(id){
        usersCollection.doc(id).delete().then(() => {
          console.log("Stuff is deleted");
        }).catch(()=>{
          
        })
    },
    updateItem() {
      dbProductAdd
        .doc(this.activeEditItem)
        .update(this.item)
        .then(() => {
          this.snackbar = true;
          console.log("it works!");
        })
        .catch(function (error) {
          console.error("oh no, I got an error", error);
        });
    },
    deleteItem(id) {
      //we want to target/grab the id
      dbProductAdd
        .doc(id)
        .delete()
        .then(function () {
          console.log("Document successfully deleted!");
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    },
    // addToFavourite(item) {
    //   if (this.favourite.find((itemInArray) => item.name === itemInArray.name)) {
    //     item = this.favourite.find(
    //       (itemInArray) => item.name === itemInArray.name
    //     );
    //     this.increaseQnt(item);
    //   } else {
    //     this.favourite.push({
    //       name: item.name,
    //       size: item.size,
    //       color: item.color,
    //       type: item.type,
    //       category: item.category,
    //       image: item.image,
    //       season: item.season,
    //       price: item.price,
    //       quantity: 1,
    //     });
    //   }
    // },
    addToBasket(item) {
       this.basketDump.push({
          name: item.name,
          size: item.size,
          color: item.color,
          price: item.price,
          image: item.image,
          quantity: 1,
        });
        this.$store.commit('addBasketItems', this.basketDump);
        // console.log("what is this", this.basketDump);
        this.basketDump = [];
    },
    increaseQnt(item) {
      item.quantity++;
    },
    decreaseQnt(item) {
      item.quantity--;

      if (item.quantity === 0) {
        this.favourite.splice(this.favourite.indexOf(item), 1);
      }
    },
  },
  computed: {
      users(){ //for vuex
      // return this.$store.state.basketItems //we want to contact state in our vuex store
      return this.$store.getters.getUsers;
    },
     favourite(){ //for vuex
      // return this.$store.state.basketItems //we want to contact state in our vuex store
      return this.$store.getters.getFavouriteItems
    },
    products() {
      return this.$store.getters.getProducts;
    },
    subTotal() {
      var subCost = 0;
      for (var items in this.favourite) {
        var individualItem = this.favourite[items];
        subCost += individualItem.quantity * individualItem.price;
      }
      return subCost;
    },
    total() {
      var deliveryPrice = 10;
      var totalCost = this.subTotal;
      return totalCost + deliveryPrice;
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
  background-color: rgba(0, 0, 0, 0.589);
}

// Starts here:
#info {
  background-color: rgb(255, 255, 255);
}

tr th {
  font-weight: bold;
}

#id_product_img{
  max-width:40px;
  max-height:40px;
  padding:0;
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

