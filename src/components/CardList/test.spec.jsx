import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import CardList from "./";

describe("Test <CardList />", () => {
  const listSize = 4;
  it("should render CardList with the right size", () => {
    render(<CardList size={listSize} />);
    const cards = screen.getAllByRole("menuitem");
    expect(cards).toHaveLength(listSize);
  });

  it("should render CardList with custom size", () => {
    const customSize = 8;
    render(<CardList size={customSize} />);
    const cards = screen.getAllByRole("menuitem");
    expect(cards).toHaveLength(customSize);
  });

  it("should the cards be 'down'", () => {
    render(<CardList size={listSize} />);
    const cards = screen.getAllByRole("menuitem");
    const cardsDown = cards.filter((card) => card.textContent === "down");
    expect(cardsDown).toHaveLength(listSize);
  });

  it("should not to have cards with 'up'", () => {
    render(<CardList size={listSize} />);
    const cards = screen.getAllByRole("menuitem");
    const cardsUp = cards.filter((card) => card.textContent === "up");
    expect(cardsUp).toHaveLength(0);
  });

  it("should the cards be 'up' when clicked", async () => {
    const user = userEvent.setup();
    const selectedCard = 2;

    render(<CardList size={listSize} />);
    const cards = screen.getAllByRole("menuitem");

    const cardsDown = cards.filter((card) => card.textContent === "down");
    expect(cardsDown).toHaveLength(listSize);

    user.click(cards[selectedCard]);

    await waitFor(() => {
      const upCard = screen.getAllByText("up");
      expect(upCard).toHaveLength(1);
    });
  });

  it("should the cards be 'up' when clicked and have just one card 'up' on the same time", async () => {
    const user = userEvent.setup();
    const firstSelected = 0;
    const secondSelected = 2;

    render(<CardList size={listSize} />);
    const cards = screen.getAllByRole("menuitem");

    // selecte first card
    user.click(cards[firstSelected]);

    await waitFor(() => {
      const firstUpedCard = screen.getAllByText("up");
      expect(firstUpedCard).toHaveLength(1);
    });

    // selecte second card
    user.click(cards[secondSelected]);

    // get positon of the first element with 'up'
    await waitFor(() => {
      const secondUpedCard = screen.getAllByText("up");
      expect(secondUpedCard).toHaveLength(1);
    });

    const cardsDown = screen.getAllByText("down");
    // expect the cards with 'down' be the listSize - 1 => 3
    expect(cardsDown).toHaveLength(listSize - 1);
  });
});
