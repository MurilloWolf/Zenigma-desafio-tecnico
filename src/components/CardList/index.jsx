import { useState } from "react";
import PropTypes from "prop-types";

export default function CardList({ size }) {
  const list = Array.from({ length: size }, (_, i) => i);
  const [selectedCard, setSelectedCard] = useState(-1);

  const handleSelectCard = (cardIndex) => {
    setSelectedCard(cardIndex);
  };
  return (
    <div>
      <ul>
        {list.map((card, index) => (
          <li
            key={card}
            role="menuitem"
            onClick={() => handleSelectCard(index)}
          >
            {selectedCard === index ? "up" : "down"}
          </li>
        ))}
      </ul>
    </div>
  );
}

CardList.propTypes = {
  size: PropTypes.number.isRequired,
};
