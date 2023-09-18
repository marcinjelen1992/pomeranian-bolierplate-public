import './styles.css';
import { useState, useEffect } from 'react';

const DEFAULT_SHOPPING_CART = [
  { name: 'Mleko', price: 12.12, isHighlighted: false },
  { name: 'Jajka', price: 8.12, isHighlighted: false },
  { name: 'Chleb', price: 3.12, isHighlighted: false },
  { name: 'Woda mineralna', price: 1.12, isHighlighted: false },
];

function HitTheMoleGame() {
  const [items, setItems] = useState(DEFAULT_SHOPPING_CART);

  const handleClick = (event) => {
    setItems(
      items.map((item) => {
        if (item.name === event.target.id) {
          return { ...item, isHighlighted: true };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <>
      {items.map((item) => (
        <button
          key={item.name}
          data-highlighted={item.isHighlighted}
          id={item.name}
          onClick={handleClick}
        >
          {item.name}
        </button>
      ))}
    </>
  );
}

export default HitTheMoleGame;
