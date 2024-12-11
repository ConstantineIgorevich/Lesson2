import React, { useState } from "react";

export type FilterType = 'all' | "Dollars" | "RUBLS";

export function FilterLesson2() {

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

  const [filteredArr, setFilteredArr] = useState([...money]);

  const onClickFilterHandler = (nameButton: FilterType) => {
    if (nameButton === 'Dollars') {
      setFilteredArr(money.filter(el => el.banknots === 'Dollars'));
    } else if (nameButton === 'RUBLS') {
      setFilteredArr(money.filter(el => el.banknots === 'RUBLS'));
    } else {
      setFilteredArr([...money]);
    }
  };

  return (
    <div>
      <ul>
        {filteredArr.map((el, i) => {
          return (
            <li key={i}>
              <span> {el.banknots}</span>
              <span> {el.value}</span>
              <span> {el.number}</span>
            </li>
          );
        })}
      </ul>
      <button onClick={() => onClickFilterHandler('all')}>all</button>
      <button onClick={() => onClickFilterHandler('RUBLS')}>RUBLS</button>
      <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>
    </div>
  );
}
