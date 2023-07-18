import React from "react";
import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

function customRender(Component) {
  const user = userEvent.setup();
  return { user, ...render(<Component />) };
}

describe("<App />", () => {
  const getResultsFromScreen = () => screen.getByTestId("results").textContent;

  test("should be add 1 to the counter", async () => {
    const { user } = customRender(App);
    const addButton = screen.getByRole("button", { name: /add/i });

    act(() => {
      user.click(addButton);
    });

    await waitFor(() => expect(getResultsFromScreen()).toBe("1"));
    act(() => {
      user.click(addButton);
    });

    await waitFor(() => expect(getResultsFromScreen()).toBe("2"));
  });

  test("should be subtract 1 to the counter", async () => {
    const { user } = customRender(App);
    const subtractButton = screen.getByRole("button", { name: /subtract/i });

    act(() => {
      user.click(subtractButton);
    });

    await waitFor(() => expect(getResultsFromScreen()).toBe("-1"));

    act(() => {
      user.click(subtractButton);
    });

    await waitFor(() => expect(getResultsFromScreen()).toBe("-2"));
  });

  test("'Add' and 'Subtract' function must work together", async () => {
    const { user } = customRender(App);
    const addButton = screen.getByRole("button", { name: /add/i });
    const subtractButton = screen.getByRole("button", { name: /subtract/i });

    act(() => {
      user.click(addButton);
    });

    await waitFor(() => expect(getResultsFromScreen()).toBe("1"));

    act(() => {
      user.click(subtractButton);
    });

    await waitFor(() => expect(getResultsFromScreen()).toBe("0"));
  });

  test("renders the initial state and updates on button click", async () => {
    const { user } = customRender(App);

    expect(getResultsFromScreen()).toBe("0");

    const addButton = screen.getByRole("button", { name: /add/i });
    const subtractButton = screen.getByRole("button", { name: /subtract/i });
    const counterInput = screen.getByTestId("counter");

    act(() => {
      user.click(addButton);
    });

    await waitFor(() => expect(getResultsFromScreen()).toBe("1"));

    act(() => {
      user.click(subtractButton);
    });
    await waitFor(() => expect(getResultsFromScreen()).toBe("0"));
    act(() => {
      user.type(counterInput, "5");
    });
    await waitFor(() =>
      expect(screen.getByTestId("counter")).toHaveAttribute("value", "5")
    );

    act(() => {
      user.click(addButton);
    });
    await waitFor(() => expect(getResultsFromScreen()).toBe("5"));

    act(() => {
      user.click(subtractButton);
    });
    await waitFor(() => expect(getResultsFromScreen()).toBe("0"));
  });
});
