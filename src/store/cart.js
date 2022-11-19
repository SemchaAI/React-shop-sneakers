import { makeAutoObservable, runInAction } from "mobx";
// runInAction
//const userId = localStorage.getItem("user");

export default class Cart {
  cart = [];
  currentIds = true;
  headerCnt = 0;
  get cartDetailed() {
    return this.cart.map((item, index) => {
      //let details = this.rootStore.cards.findItem(item.id);
      let details = this.rootStore.cards.findItem(item.item.id);
      console.log(details);
      //console.log((a = { ...details, ...item }));
      //return { ...details, ...item };
      console.log({ ...item, ...details });
      return { ...item, ...details };
    });
  }
  get total() {
    return this.cartDetailed.reduce((sum, pr) => sum + pr.price * pr.cnt, 0);
  }
  get totalWithTax() {
    return this.total * 1.05;
  }

  inCart = (id) => {
    return this.cart.some((item) => item.id == id);
  };

  inCartNew = (id) => {
    // let myArr = Array.from(this.cart, (i) => (i.myId = i.item));
    //return this.cart.map((i) => i.item.id == id);

    return this.cart.some((item) => item.item.id == id);
  };

  load = async () => {
    let cart = await this.api.load();
    runInAction(() => {
      this.cart = cart;
    });
  };
  //{ id: id, cnt: 1 }
  add = async (id) => {
    if (!this.inCart(id)) {
      await this.api.add({ item: { id: id }, cnt: 1 }, id);
      console.log("res");
      //await this.load();
      //console.log(this.cart);
      // .then((cart = await this.api.load()));
      runInAction(() => {});
      /////////////////////////////////////////////////
    }
  };
  remove = async (id) => {
    console.log("store id:" + id);
    if (this.inCart(id)) {
      let res = await this.api.remove(id);
      runInAction(() => {
        if (res) {
          this.cart = this.cart.filter((item) => item.id != id);
        }
      });
    }
  };

  change = async (id, cnt) => {
    let item = this.cart.find((item) => item.id == id);

    if (item !== undefined) {
      let details = this.cartDetailed.find((item) => item.id == id);
      cnt = Math.max(1, Math.min(details.rest, cnt));
      let data;
      let trash;
      /////////////////////////////////////////
      /////////////////////////////////////////
      /////////////////////////////////////////
      this.cart.map((val) =>
        val.item.id === id ? (data = val.id) : (trash = val.id)
      );

      let res = await this.api.change(data, cnt);

      if (res) {
        runInAction(() => {
          item.cnt = cnt;
        });
      }
    }
  };

  // change = async (id, cnt) => {
  //   let item = this.cart.find((item) => item.id == id);

  //   if (item !== undefined) {
  //     let details = this.cartDetailed.find((item) => item.id == id);
  //     cnt = Math.max(1, Math.min(details.rest, cnt));
  //     let res = await this.api.change(id, cnt);
  //     if (res) {
  //       runInAction(() => {
  //         item.cnt = cnt;
  //       });
  //     }
  //   }
  // };

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.api = this.rootStore.api.apiCart;
  }
}
