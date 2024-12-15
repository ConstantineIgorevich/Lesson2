import { ChangeEvent, useState } from "react";


export type FullInputPropsType = {
    changeMessages: (newMessage: string) => void;
}

export const FullInput = ({changeMessages}: FullInputPropsType) => {

    const [title, setTitle] = useState('');


    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }

    const onClickHandler = () => {
        if (title) changeMessages(title);
        setTitle('');
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    )
}