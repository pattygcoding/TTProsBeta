import React from 'react';
import "./GameButton.css";

const GameButton = ({ game, formData, handleClick, selectedPackageType, disabled }) => {
	const isSelected = formData[`include_${game.key}`];
	const boxClass = selectedPackageType === 'cub' || selectedPackageType === 'intruder' ? 'cub-box' : 'vip-box';
	const selectedClass = selectedPackageType === 'cub' || selectedPackageType === 'intruder' ? 'selected-orange' : 'selected-purple';

	return (
		<div
			className={`${boxClass} ${isSelected ? selectedClass : ''} ${disabled ? 'disabled' : ''}`}
			onClick={!disabled ? handleClick : null}
			style={{ cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1 }}
		>
			{game.date} {game.name} - ${selectedPackageType === 'cub' || selectedPackageType === 'intruder' ? game.price_cub : game.price_vip}
		</div>
	);
};

export default GameButton;
