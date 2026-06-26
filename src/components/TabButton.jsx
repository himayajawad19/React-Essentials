export default function TabButton(props) {
    console.log(props.children);
   
    return (
        <li> <button onClick={props.onClick}>{props.children}</button></li>
    );
}