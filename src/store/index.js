import Cards from "./cards";
import Cart from "./cart";

//import * as cart from './../api/cart'
import * as apiCard from "./../api/apiCard";
import * as apiCart from "./../api/apiCart";

export default class RootStore {
  constructor() {
    this.storage = window.localStorage;

    this.api = { apiCard, apiCart };
    //this.api = { cart, products };

    //this.order = new Order(this);
    this.cards = new Cards(this);
    this.cart = new Cart(this);
  }
}
