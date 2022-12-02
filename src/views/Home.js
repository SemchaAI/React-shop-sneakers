import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import Card from "../components/card/Card";

import styles from "./Home.module.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { ReactComponent as Arrow } from "../img/arrowNext.svg";
import FavorList from "../components/favorFilters/FavorList";
import UnFavorList from "../components/favorFilters/UnFavorList";

//import ProductCard from "./../components/products/card";

export default observer(Home);

function Home() {
  console.log("render");

  let productsList = [...FavorList(), ...UnFavorList()];

  const carousel1 =
    "https://firebasestorage.googleapis.com/v0/b/react-sneakers-4151c.appspot.com/o/carousel1.png?alt=media&token=20e551b3-d923-4ef0-84bb-763719079a6b";
  const carousel2 =
    "https://firebasestorage.googleapis.com/v0/b/react-sneakers-4151c.appspot.com/o/carousel2.png?alt=media&token=2a834af7-c291-4688-9415-6b157ff04459";
  const carousel3 =
    "https://firebasestorage.googleapis.com/v0/b/react-sneakers-4151c.appspot.com/o/carousel3.png?alt=media&token=87a3909b-9fd7-4c01-a1a9-e10085425201";
  const [newlist, setNewlist] = useState(productsList);

  const [query, setQuery] = useState("");

  const searchfilter = () => {
    let tempArr = productsList.filter(
      (e) => e.description.toLowerCase().search(query.toLowerCase()) !== -1
    );
    console.log(tempArr);
    setNewlist(tempArr);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchfilter();
    }
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      searchfilter();
    }, 1000);
    return () => clearTimeout(timeOutId);
  }, [query]);

  return (
    <>
      <div className={styles.container}>
        <section>
          <Carousel
            className={styles.Carousel}
            autoPlay
            interval="5000"
            showArrows
            showStatus={false}
            showThumbs={false}
            infiniteLoop
            renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
              hasPrev && (
                <button onClick={clickHandler} className={styles.ArrowPrev}>
                  <Arrow height={35} width={35} alt="left arrow" />
                </button>
              )
            }
            renderArrowNext={(clickHandler, hasNext, labelNext) =>
              hasNext && (
                <button onClick={clickHandler} className={styles.ArrowNext}>
                  <Arrow height={35} width={35} alt="right arrow" />
                </button>
              )
            }
            renderThumbs={() => null}
          >
            <div>
              <img src={carousel1} alt="sneakers offers" />
              <button className={styles.buttonBuy}>Купить</button>
            </div>
            <div>
              <img src={carousel2} alt="sneakers offers" />
              <button className={styles.buttonBuy}>Купить</button>
            </div>
            <div>
              <img src={carousel3} alt="sneakers offers" />
              <button className={styles.buttonBuy}>Купить</button>
            </div>
          </Carousel>
        </section>
      </div>
      <section>
        <div className="container">
          <div>
            <h1>Все кроссовки</h1>
          </div>
          <div className="find">
            <input
              placeholder="search"
              onChange={(event) => setQuery(event.target.value)}
              onKeyPress={handleKeyPress}
              list="sneakers"
              autoComplete="off"
            ></input>
            <datalist id="sneakers">
              <div className={styles.displayFilter}>
                {productsList.map((val) => (
                  <option key={val.id} value={val.description} />
                  //<option>{val.description} </option>
                  //.slice(0, 5)
                ))}
              </div>
            </datalist>
          </div>
        </div>
        <ul className={styles.cardsContainer}>
          {newlist.map((val, index) => (
            <li key={val.id}>
              <Card index={index} val={val} key={val.id} rest={val.rest} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
