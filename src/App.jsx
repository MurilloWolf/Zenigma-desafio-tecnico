import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer();
  return (
    <div>
      <div data-testid="results">{state}</div>
      <div>
        <button>Add</button>
        <button>Subtract</button>
      </div>
      <div>
        <input type="number" data-testid="counter" />
      </div>
    </div>
  );
}

export default App;
