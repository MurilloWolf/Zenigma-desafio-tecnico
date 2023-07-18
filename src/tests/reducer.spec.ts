// THIS FILE IS FOR IN CASE WE WANT TO SEPARETE REDUCER LOGIC FROM APP COMPONENT
// import { vitest } from "vitest";
// import reducer, { changeInput, add, subtract, ACTIONS_TYPES } from "../reducer";

// describe("Reducer", () => {
//   test("should handle CHANGE_INPUT action", () => {
//     const initialState = { total: 0, input: 0 };
//     const action = {
//       type: ACTIONS_TYPES.CHANGE_INPUT,
//       payload: 5,
//     };

//     const nextState = reducer(initialState, action);

//     expect(nextState).toEqual({ total: 0, input: 5 });
//   });

//   test("should handle ADD action", () => {
//     const initialState = { total: 0, input: 0 };
//     const action = { type: ACTIONS_TYPES.ADD };

//     const nextState = reducer(initialState, action);

//     expect(nextState).toEqual({ total: 1, input: 0 });
//   });

//   test("should handle ADD action with input value", () => {
//     const initialState = { total: 0, input: 5 };
//     const action = { type: ACTIONS_TYPES.ADD };

//     const nextState = reducer(initialState, action);

//     expect(nextState).toEqual({ total: 5, input: 5 });
//   });

//   test("should handle SUBTRACT action", () => {
//     const initialState = { total: 0, input: 0 };
//     const action = { type: ACTIONS_TYPES.SUBTRACT };

//     const nextState = reducer(initialState, action);

//     expect(nextState).toEqual({ total: -1, input: 0 });
//   });

//   test("should handle SUBTRACT action with input value", () => {
//     const initialState = { total: 0, input: 5 };
//     const action = { type: ACTIONS_TYPES.SUBTRACT };

//     const nextState = reducer(initialState, action);

//     expect(nextState).toEqual({ total: -5, input: 5 });
//   });

//   test("should return the current state for unknown actions", () => {
//     const initialState = { total: 0, input: 0 };
//     const action = { type: "UNKNOWN_ACTION" };

//     const nextState = reducer(initialState, action);

//     expect(nextState).toEqual(initialState);
//   });
// });

// describe("Action Creators", () => {
//   test("changeInput should create CHANGE_INPUT action", () => {
//     const dispatchMock = vitest.fn();
//     const value = 5;

//     changeInput(value, dispatchMock);

//     expect(dispatchMock).toHaveBeenCalledWith({
//       type: ACTIONS_TYPES.CHANGE_INPUT,
//       payload: value,
//     });
//   });

//   test("add should create ADD action", () => {
//     const dispatchMock = vitest.fn();

//     add(dispatchMock);

//     expect(dispatchMock).toHaveBeenCalledWith({
//       type: ACTIONS_TYPES.ADD,
//     });
//   });

//   test("subtract should create SUBTRACT action", () => {
//     const dispatchMock = vitest.fn();

//     subtract(dispatchMock);

//     expect(dispatchMock).toHaveBeenCalledWith({
//       type: ACTIONS_TYPES.SUBTRACT,
//     });
//   });
// });
