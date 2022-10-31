import { makeAutoObservable, runInAction } from "mobx";
// runInAction

export default class Cards {
  // item = [
  //   {
  //     id: 1,
  //     description: "Мужские Кроссовки Nike Blazer Mid Suede",
  //     price: 12999,
  //     img: "1",
  //     favor: false,
  //   },
  //   {
  //     id: 2,
  //     description: "Мужские Кроссовки Nike Air Max 270",
  //     price: 12999,
  //     img: "2",
  //     favor: false,
  //   },
  //   {
  //     id: 3,
  //     description: "Мужские Кроссовки Nike Blazer Mid Suede",
  //     price: 8499,
  //     img: "3",
  //     favor: false,
  //   },
  //   {
  //     id: 4,
  //     description: "Кроссовки Puma X Aka Boku Future Rider",
  //     price: 8999,
  //     img: "4",
  //     favor: false,
  //   },
  //   {
  //     id: 5,
  //     description: "Мужские Кроссовки Nike Blazer Mid Suede",
  //     price: 12999,
  //     img: "5",
  //     favor: false,
  //   },
  //   {
  //     id: 6,
  //     description: "Мужские Кроссовки Under Armour Curry 8",
  //     price: 15199,
  //     img: "6",
  //     favor: false,
  //   },
  //   {
  //     id: 7,
  //     description: "Мужские Кроссовки Nike Kyrie 7",
  //     price: 11299,
  //     img: "7",
  //     favor: false,
  //   },
  //   {
  //     id: 8,
  //     description: "Мужские Кроссовки Jordan Air Jordan 11",
  //     price: 10799,
  //     img: "8",
  //     favor: false,
  //   },
  //   {
  //     id: 9,
  //     description: "Мужские Кроссовки Nike Blazer Mid Suede",
  //     price: 12999,
  //     img: "5",
  //     favor: false,
  //   },
  //   {
  //     id: 10,
  //     description: "Мужские Кроссовки Under Armour Curry 8",
  //     price: 15199,
  //     img: "6",
  //     favor: false,
  //   },
  //   {
  //     id: 11,
  //     description: "Мужские Кроссовки Nike Kyrie 7",
  //     price: 11299,
  //     img: "7",
  //     favor: false,
  //   },
  //   {
  //     id: 12,
  //     description: "Мужские Кроссовки Jordan Air Jordan 11",
  //     price: 10799,
  //     img: "8",
  //     favor: false,
  //   },
  // ];
  item = [];

  load = async () => {
    console.log("cardsLOAD");
    let item = await this.api.load();
    runInAction(() => {
      this.item = item;
    });
    //console.log(item, "1");
  };
  findItem(id) {
    return this.item.find((pr) => pr.id == id);
  }
  // find = async (id) => {
  //   let currentItem = this.item.find((pr) => pr.id === id);
  //   // console.log(currentItem.favor, "2");
  //   currentItem.favor = !currentItem.favor;
  //   let item = await this.api.update(
  //     { favor: currentItem.favor },
  //     currentItem.id
  //   );
  //   //this.load();
  //   return item;
  // };

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.api = this.rootStore.api.apiCard;
  }
}
