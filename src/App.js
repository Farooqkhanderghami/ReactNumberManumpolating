import React from "react";
import Increament from "./Increament";
import Decreament from "./Decreament";
import Reset from "./Reset";

const App = () => {
  const [current_value, set_value] = React.useState(0);
  function parentAlert(data) {
    set_value(data);
  }
  return (
    <div class="parent">
      <Increament increase={current_value} set_increase={parentAlert} />
      <Decreament decrease={current_value} set_decrease={parentAlert} />
      <Reset reset_value={current_value} set_rest_value={parentAlert} />
      <button class="btn">{current_value}</button>
      <p>this is change</p>
    </div>
  );
};

export default App;
