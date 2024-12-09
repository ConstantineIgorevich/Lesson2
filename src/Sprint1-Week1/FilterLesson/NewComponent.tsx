import { Button } from "./Button";
import { FilterType } from "./FilterLesson";

type NewComponentPropsType = {
    money: Array<MoneyType>;
    handler: (name: FilterType) => void
}

type MoneyType = {
    banknots: string;
    value: number;
    number: string;
}

export const NewComponent = (props: NewComponentPropsType) => {
  return (
    <div>
      <ul>
        {props.money.map((el, i) => {
          return (
            <li key={i}>
              <span> {el.banknots}</span>
              <span> {el.value}</span>
              <span> {el.number}</span>
            </li>
          );
        })}
      </ul>
      <Button name={'all'} handler={() => props.handler("all")} />
      <Button name={'RUBLS'} handler={() => props.handler('RUBLS')} />
      <Button name={'Dollars'} handler={() => props.handler("Dollars")} />
    </div>
  );
};
