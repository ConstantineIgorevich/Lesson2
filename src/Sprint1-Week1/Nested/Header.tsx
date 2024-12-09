
type HeaderPropsType = {
    title: string;
}

export function Header(props: HeaderPropsType) {
    return <>{props.title}</>;
}