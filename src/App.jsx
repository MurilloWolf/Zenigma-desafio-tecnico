import { useReducer } from "react";
import reducer, { changeInput, add, subtract } from "./reducer";

function App() {
  const reucerInitialState = {
    total: 0,
    input: 0,
  };

  const [state, dispatch] = useReducer(reducer, reucerInitialState);

  const handleChange = ({ target: { value } }) => {
    changeInput(value, dispatch);
  };

  return (
    <div>
      <div data-testid="results">{state.total}</div>
      <div>
        <button type="button" onClick={() => add(dispatch)}>
          Add
        </button>
        <button type="button" onClick={() => subtract(dispatch)}>
          Subtract
        </button>
      </div>
      <div>
        <input
          type="number"
          data-testid="counter"
          onChange={handleChange}
          value={state.input}
        />
      </div>
    </div>
  );
}

export default App;
