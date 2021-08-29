

export function IncrementCounter(props) {
  return (
    <button onClick={props.onClickFunction}>{props.label}</button>
  );
}

export function Display(props) {
  return (
    <div>Current Counter - {props.counterText}</div>
  );
}
