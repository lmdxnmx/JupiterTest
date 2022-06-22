import React, { useState, useEffect } from "react";
import s from "./Main.module.css";
import Card from "../Card/Card";
import { cardInfoData } from "./../../Data/CardInfoData";
import { uploadInfoData } from "./../../Data/CardInfoData";
import arrow from "./../../Assets/arrow.svg";
const Main = () => {
  const [cardInfo, setCardInfo] = useState(cardInfoData);
  const [filteredCardInfo, setFilteredCardInfo] = useState(cardInfo);
  const [list, setList] = useState(false);
  useEffect(() => {
    setFilteredCardInfo(cardInfo);
  }, [cardInfo]);

  const filterCard = (name) => {
    if (name === "Design") {
      const data = cardInfo.filter((i) => i.categories === "Design");
      setFilteredCardInfo(data);
    }
    if (name === "Branding") {
      const data = cardInfo.filter((i) => i.categories === "Branding");
      setFilteredCardInfo(data);
    }
    if (name === "All") {
      const data = cardInfo.filter((i) => i.categories !== "");
      setFilteredCardInfo(data);
    }
    if (name === "Illustration") {
      const data = cardInfo.filter((i) => i.categories === "Illustration");
      setFilteredCardInfo(data);
    }
    if (name === "Motion") {
      const data = cardInfo.filter((i) => i.categories === "Motion");
      setFilteredCardInfo(data);
    }
  };
  const setActive = (id) => {
    setCardInfo([
      ...cardInfo.map((card) =>
        card.id === id ? { ...card, active: !card.active } : { ...card }
      ),
    ]);
  };
  const removeCard = () => {
    const data = cardInfo.filter((i) => i.active === false);
    setCardInfo(data);
  };
  const uploadData = () => {
    setCardInfo([...cardInfo.concat(uploadInfoData)]);
  };
  return (
    <div className={s.main}>
      <div
        className={`${list === false && s.main__categories} ${
          list === true && s.main__categories_active
        }`}
      >
        <button onClick={() => filterCard("All")}>Show All</button>
        <button onClick={() => filterCard("Design")}>Design</button>
        <button onClick={() => filterCard("Branding")}>Branding</button>
        <button onClick={() => filterCard("Illustration")}>Illustration</button>
        <button onClick={() => filterCard("Motion")}>Motion</button>

        <img
          className={s.main__categories_arrow}
          src={arrow}
          alt="arrow"
          onClick={() => setList(!list)}
        />
      </div>
      <div className={s.main__deleteButton_container}>
        <button className={s.main__deleteButton} onClick={() => removeCard()}>
          Delete
        </button>
      </div>
      <div className={s.main__cards}>
        {filteredCardInfo.map((i) => {
          return (
            <Card
              key={i.id}
              id={i.id}
              description={i.description}
              categories={i.categories}
              src={i.src}
              active={i.active}
              setActive={setActive}
              filterCard={filterCard}
            />
          );
        })}
      </div>
      <button className={s.main__uploadButton} onClick={() => uploadData()}>
        LOAD MORE
      </button>
    </div>
  );
};

export default Main;
