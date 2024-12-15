import { ChangeEvent, Dispatch } from "react";

type InputPropsType = {
    title: string;
    callBack: Dispatch<React.SetStateAction<string>>
}

export const Input = (props: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBack(e.currentTarget.value);
    }

    return <input value={props.title} onChange={onChangeHandler}/>
}