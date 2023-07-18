import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(reducer, reucerInitialState);
  return (
    <div>
      <div data-testid="results">{state}</div>
      <div>
        <button type="button">Add</button>
        <button type="button">Subtract</button>
      </div>
      <div>
        <input type="text" data-testid="counter" />
      </div>
    </div>
  );
}

export default App;
