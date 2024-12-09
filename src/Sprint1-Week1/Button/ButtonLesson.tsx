import React, {MouseEvent} from "react";
import { Button } from "./components/Button";

export function ButtonLesson() {

// const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
//     console.log('Hello, Im VASYA!');
// }

// const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
//     console.log('Hello, Im IVAN!');
// }


// const onClickHandler = (name: string) => {
//     console.log(name);
// }


const button1Foo = (subscriber: string, age: number) => {
    console.log(`Im ${subscriber}`, age)
}

const button2Foo = (subscriber: string) => {
    console.log(`Im ${subscriber}`)
}

const button3Foo = () => {
    console.log('Im stupid button');
}


    return (
    <>
        {/* <button onClick={(event) => {console.log('Hello!')}}>MyYouTubeChannel-1</button> */}
        <Button name={'MyYouTubeChanel-1'} callBack={() => button1Foo('VASYA', 21)}/>
        <Button name={'MyYouTubeChanel-2'} callBack={() => button2Foo('IVAN')}/>
        <Button name={'Stupid button'} callBack={button3Foo}/>
    </>
    );
}
