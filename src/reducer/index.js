// ACTION TYPES
export const ACTIONS_TYPES = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
  CHANGE_INPUT: "CHANGE_INPUT",
};

// ACTION CREATORS
export const add = (dispatch) => dispatch({ type: ACTIONS_TYPES.ADD });
export const subtract = (dispatch) =>
  dispatch({ type: ACTIONS_TYPES.SUBTRACT });
export const changeInput = (value, dispatch) => {
  dispatch({
    type: ACTIONS_TYPES.CHANGE_INPUT,
    payload: Number(value),
  });
};

// REDUCER
export default function reducer(state, action) {
  const actions = {
    CHANGE_INPUT: () => ({ ...state, input: action.payload }),
    ADD: () => ({ ...state, total: state.total + (state.input || 1) }),
    SUBTRACT: () => ({ ...state, total: state.total - (state.input || 1) }),
  };
  return actions[action.type] ? actions[action.type]() : state;
}
