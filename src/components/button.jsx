export function Button(props) {
  return (
    <button className={` rounded-md ${props.className}`}>{props.text}</button>
  );
}
