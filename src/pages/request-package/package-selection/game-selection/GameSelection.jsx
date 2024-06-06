import React from 'react';
import text from '../../../../config/text.json';
import { GameButton } from './game-button';
import "./GameSelection.css";

const GameSelection = ({ formData, handleSeason, handleGameOne, handleGameTwo, handleGameThree, handleGameFour, handleGameFive, handleGameSix, handleGameSeven, selectedPackageType }) => {
	const games = [
		{ key: 'game_one', ...text.packages.game_one },
		{ key: 'game_two', ...text.packages.game_two },
		{ key: 'game_three', ...text.packages.game_three },
		{ key: 'game_four', ...text.packages.game_four },
		{ key: 'game_five', ...text.packages.game_five },
		{ key: 'game_six', ...text.packages.game_six },
		{ key: 'game_seven', ...text.packages.game_seven },
	];

	const handleClickMap = {
		game_one: handleGameOne,
		game_two: handleGameTwo,
		game_three: handleGameThree,
		game_four: handleGameFour,
		game_five: handleGameFive,
		game_six: handleGameSix,
		game_seven: handleGameSeven,
	};

	return (
		<>
			<div className='season_select'>
				<div
					className={`${selectedPackageType === 'cub' ? 'cub-box' : 'vip-box'} full-box ${formData.include_season ? (selectedPackageType === 'cub' ? 'selected-orange' : 'selected-purple') : ''}`}
					onClick={handleSeason}
				>
					{text.packages.season.name} - ${selectedPackageType === 'cub' ? text.packages.season.price_cub : text.packages.season.price_vip}
				</div>
			</div>
			<div className="game_select">
				{games.map(game => (
					<GameButton
						key={game.key}
						game={game}
						formData={formData}
						handleClick={handleClickMap[game.key]}
						selectedPackageType={selectedPackageType}
					/>
				))}
			</div>
		</>
	);
};

export default GameSelection;
