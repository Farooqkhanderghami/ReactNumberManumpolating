function Increament(props) {
  let number = props.increase;

  return (
    <div>
      <button class="btn" onClick={() => props.set_increase(number + 1)}>
        +
      </button>
    </div>
  );
}
export default Increament;
