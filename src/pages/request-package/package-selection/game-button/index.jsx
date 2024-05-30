import React from 'react';
import "./style.css";

const GameButton = ({ game, formData, handleClick, selectedPackageType }) => {
  const isSelected = formData[`include_${game.key}`];
  const boxClass = selectedPackageType === 'cub' ? 'cub-box' : 'vip-box';
  const selectedClass = selectedPackageType === 'cub' ? 'selected-orange' : 'selected-purple';

  return (
    <div
      className={`${boxClass} ${isSelected ? selectedClass : ''}`}
      onClick={handleClick}
    >
      {game.date} {game.name} - ${selectedPackageType === 'cub' ? game.price_cub : game.price_vip}
    </div>
  );
};

export default GameButton;
