import useStore from "../../hooks/useStore";

const UnFavorList = () => {
  let [cardsStore] = useStore("cards");
  let { item } = cardsStore;

  let test2 = [];

  test2 = item.filter(
    (val) => String(val.id) !== window.localStorage.getItem(`favor${val.id}`)
  );
  return test2;
};

export default UnFavorList;
