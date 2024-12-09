import React, { useState } from "react";
import { NewComponent } from "./NewComponent";

export type FilterType = 'all' | "Dollars" | "RUBLS";

export function FilterLesson() {
  const [money, setMoney] = useState([
    { banknots: "Dollars", value: 100, number: " a1234567890" },
    { banknots: "Dollars", value: 50, number: " z1234567890" },
    { banknots: "RUBLS", value: 100, number: " w1234567890" },
    { banknots: "Dollars", value: 100, number: " e1234567890" },
    { banknots: "Dollars", value: 50, number: " c1234567890" },
    { banknots: "RUBLS", value: 100, number: " r1234567890" },
    { banknots: "Dollars", value: 50, number: " x1234567890" },
    { banknots: "RUBLS", value: 50, number: " v1234567890" },
  ]);

  const [buttonName, setButtonName] = useState('all');

  let currentMoney = money;
  if (buttonName === "Dollars") {
    currentMoney = money.filter((el) => el.banknots === "Dollars");
} else if(buttonName === "RUBLS") {
    currentMoney = money.filter((el) => el.banknots === "RUBLS");
}

  const onClickFilterHandler = (nameButton: FilterType) => {
    setButtonName(nameButton);
  };

  return (
    <NewComponent handler={onClickFilterHandler} money = {currentMoney}/>
  );
}
