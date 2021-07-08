function Decreament(props) {
  let number = props.decrease - 1;
  return (
    <div>
      <button class="btn" onClick={() => props.set_decrease(number)}>
        -
      </button>
    </div>
  );
}
export default Decreament;
