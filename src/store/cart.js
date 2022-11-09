import { makeAutoObservable, runInAction } from "mobx";
// runInAction

export default class Cart {
  cart = [];
  get cartDetailed() {
    return this.cart.map((item, index) => {
      let details = this.rootStore.cards.findItem(item.id);
      let a;
      console.log((a = { ...details, ...item }));
      return { ...details, ...item };
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

  load = async () => {
    let cart = await this.api.load();
    console.log(cart);
    runInAction(() => {
      this.cart = cart;
    });
  };

  add = async (id) => {
    if (!this.inCart(id)) {
      let res = await this.api.add({ id: id, cnt: 1 }, id);

      runInAction(() => {
        if (res) {
          this.cart.push({ id, cnt: 1 });
        }
      });
    }
  };
  remove = async (id) => {
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
      let res = await this.api.change(id, cnt);

      if (res) {
        runInAction(() => {
          item.cnt = cnt;
        });
      }
    }
  };

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.api = this.rootStore.api.apiCart;
  }
}

// {
//   id: 1,
//   cnt: 1,
// },
// {
//   id: 2,
//   cnt: 1,
// },
// {
//   id: 12,
//   cnt: 5,
// },
// {
//   id: 3,
//   cnt: 1,
// },
// {
//   id: 4,
//   cnt: 1,
// },
// {
//   id: 5,
//   cnt: 5,
// },
// {
//   id: 6,
//   cnt: 5,
// },
