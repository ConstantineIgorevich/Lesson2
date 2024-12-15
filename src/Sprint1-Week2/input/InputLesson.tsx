import { useState } from "react";
import { FullInput } from "./FullInput";
import { Input } from "./Input";
import { Button } from "./Button";

export const InputLesson = () => {
  const [message, setMessage] = useState([
    { message: "message1" },
    { message: "message2" },
    { message: "message3" },
  ]);

  const [title, setTitle] = useState('');

// const changeMessages = (newMessage: string) => {
//     setMessage([{message: newMessage}, ...message])
// }

const changeMessages = () => {
    if (title) setMessage([{message: title}, ...message]);
    setTitle('');
}

const messages = message.map((m, i) => <li key={i}>{m.message}</li>)

  return (
    <div>
      {/* <FullInput changeMessages={changeMessages}/> */}
      <Input title={title} callBack={setTitle}/>
      <Button name="+" callBack={changeMessages}/>
    <ul>
        {messages}
    </ul>
    </div>
  );
};
