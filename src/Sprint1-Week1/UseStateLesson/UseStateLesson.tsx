import { useState } from "react";

export const UseStateLesson = () => {
  let [a, setA] = useState(1);

  const onClickHandler = () => {
    setA(++a);
  };
  
  const onClickHandler2 = () => {
    setA(0);
  };

  return (
    <div>
      <h1>{a}</h1>
      <button onClick={onClickHandler}>number</button>
      <button onClick={onClickHandler2}>0</button>
    </div>
  );
};
