import React from 'react';
import { Square } from './Square';
import type { Player } from '../types';

interface BoardProps {
  squares: Player[];
  onClick: (index: number) => void;
}

export const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  return (
    <div className="board ">
      {squares.map((value, index) => (
        <Square key={index} value={value} onClick={() => onClick(index)} />
      ))}
    </div>
  );
};
