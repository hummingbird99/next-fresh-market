"use client";

import { useState } from "react";
import S from "/styles/page.module.css";
import { Button } from "../cart/data";

export default function List() {
  let item = [
    { name: "Tomatoes", price: 40 },
    { name: "Pasta", price: 50 },
    { name: "Bacon", price: 60 },
  ];

  const [count, setCount] = useState(item.map(() => 0));

  function onIncrease(i) {
    setCount((prevCount) => {
      const newCount = [...prevCount];
      newCount[i]++;
      return newCount;
    });
  }

  function onDecrease(i) {
    setCount((prevCount) => {
      const newCount = [...prevCount];
      newCount[i]--;
      if (newCount[i] < 0) newCount[i] = 0;
      return newCount;
    });
  }

  return (
    <div>
      <h4 className={S.title}>상품 목록</h4>
      {item.map((item, i) => {
        return (
          <div className={S.food} key={i}>
            <img src={`/food${i}.png`} className={S.foodImg} />
            <h4 className={S.title}>
              {item.name} ${item.price}
            </h4>
            <span> {count[i]} </span>
            <Button
              onClick={() => onIncrease(i)}
              color="#4be8ff"
              name="Add to Cart"
            >
              ➕
            </Button>
            <Button
              onClick={() => onDecrease(i)}
              color="#4be8ff"
              name="Remove from Cart"
            >
              ➖
            </Button>
          </div>
        );
      })}
    </div>
  );
}
