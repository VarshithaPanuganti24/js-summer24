import React from 'react';
import type { Player } from '../types';

interface SquareProps {
  value: Player;
  onClick: () => void;
}

export const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button
      className="square"
      onClick={onClick}
    >
      {value}
    </button>
  );
};
