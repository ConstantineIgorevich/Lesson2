
type ButtonPropsType = {
    name: string;
    handler: () => void;
}

export const Button = (props: ButtonPropsType) => {
    return <button onClick={props.handler}>{props.name}</button>
}