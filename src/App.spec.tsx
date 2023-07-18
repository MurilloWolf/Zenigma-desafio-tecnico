import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

function customRender(Component) {
  const user = userEvent.setup();
  return { user, ...render(<Component />) };
}

describe("<App />", () => {
  test("renders the initial state and updates on button click", () => {
    const { user } = customRender(<App />);

    const resultsElement = screen.getByTestId("results");
    expect(resultsElement.textContent).toBe("0");

    const addButton = screen.getByRole("button", { name: /add/i });
    const subtractButton = screen.getByRole("button", { name: /subtract/i });
    const counterInput = screen.getByTestId("counter");

    act(() => {
      user.click(addButton);
    });
    expect(resultsElement.textContent).toBe("1");

    act(() => {
      user.click(subtractButton);
    });
    expect(resultsElement.textContent).toBe("0");

    userEvent.type(counterInput, "5");
    expect(resultsElement.textContent).toBe("5");
  });
});
