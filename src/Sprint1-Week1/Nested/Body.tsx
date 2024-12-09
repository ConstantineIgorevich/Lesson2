
interface IBody {
    titleForBody: string;
}

export const Body = (props: IBody) => {
    return <div>{props.titleForBody}</div>
}