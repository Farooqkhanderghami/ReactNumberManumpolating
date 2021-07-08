function Reset(props) {
  let number = props.reset_value;
  return (
    <div>
      <button class="btn" onClick={() => props.set_rest_value(0)}>
        Reset
      </button>
    </div>
  );
}
export default Reset;
