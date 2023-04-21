"use client";

import { useState } from "react";
import S from "/styles/page.module.css";
import { Button } from "../cart/data";

export default function List() {
  let item = ["Tomatoes", "Pasta", "Bacon"];

  const [count, setCount] = useState(0);

  function onIncrease() {
    setCount(count + 1);
  }

  function onDecrease() {
    setCount(count - 1);
  }

  return (
    <div>
      <h4 className={S.title}>상품 목록</h4>
      {item.map((product, i) => {
        return (
          <div className={S.food} key={i}>
            <img src={`/food${i}.png`} className={S.foodImg} />
            <h4 className={S.title}>{product} $40</h4>
            <span> {count} </span>
            <Button click={onIncrease} color="#4be8ff" name="➕" />
            <Button click={onDecrease} color="#4be8ff" name="➖" />
          </div>
        );
      })}
    </div>
  );
}
