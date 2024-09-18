import React from 'react';
import "./GameButton.css";

const GameButton = ({ game, formData, handleClick, selectedPackageType, disabled }) => {
	const isSelected = formData[`include_${game.key}`];
	const boxClass = selectedPackageType === 'cub' || selectedPackageType === 'intruder' ? 'cub-box' : 'vip-box';
	const selectedClass = selectedPackageType === 'cub' || selectedPackageType === 'intruder' ? 'selected-orange' : 'selected-purple';
	
	const gameBanner = () => {
		const isStandardTier = selectedPackageType === 'cub' || selectedPackageType === 'intruder';
		const price = isStandardTier ? game.price_cub : game.price_vip;
		const priceDisplay = game.sold_out ? 'SOLD OUT' : `$${price}`;

		return `${game.date} ${game.name} - ${priceDisplay}`;
	};

	return (
		<div
			className={`${boxClass} ${isSelected ? selectedClass : ''} ${disabled ? 'disabled' : ''}`}
			onClick={!disabled ? handleClick : null}
			style={{ cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1 }}
		>
			{gameBanner()}
		</div>
	);
};

export default GameButton;
