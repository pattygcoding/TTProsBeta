import React from 'react';
import { standardPackageIds } from '@/utils/utils.js'
import "./GameButton.css";

const GameButton = ({ game, formData, handleClick, selectedPackageType, disabled }) => {
	const isSelected = formData[`include_${game.key}`];

	const isStandardTier = standardPackageIds.includes(selectedPackageType);
	const boxTypeClass = isStandardTier ? 'cub-box' : 'vip-box';
	const selectedClass = isStandardTier ? 'selected-orange' : 'selected-purple';

	const gameBanner = () => {
		const price = isStandardTier ? game.price_cub : game.price_vip;
		const priceDisplay = game.sold_out ? 'SOLD OUT' : `$${price}`;

		return `${game.date} ${game.name} - ${priceDisplay}`;
	}
	
	return (
		<div
			className={`game-box ${boxTypeClass} ${isSelected ? selectedClass : ''} ${disabled ? 'disabled' : ''}`}
			onClick={!disabled ? handleClick : undefined}
		>
			{gameBanner()}
		</div>
	);
};

export default GameButton;
