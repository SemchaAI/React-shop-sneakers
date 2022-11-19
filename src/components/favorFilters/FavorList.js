import useStore from "../../hooks/useStore";

const FavorList = () => {
  let [cardsStore] = useStore("cards");
  let { item } = cardsStore;

  let test = [];

  test = item.filter(
    (val) => String(val.id) === window.localStorage.getItem(`favor${val.id}`)
  );

  return test;
};

export default FavorList;
