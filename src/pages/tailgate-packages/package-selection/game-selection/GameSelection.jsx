import React from 'react';
import t from '@/config/text.json';
import { GameButton } from './game-button'; // Adjusted import to default export
import "./GameSelection.css";

const GameSelection = ({
    away,
    formData,
    handleSeason,
    handleGameOne,
    handleGameTwo,
    handleGameThree,
    handleGameFour,
    handleGameFive,
    handleGameSix,
    handleGameSeven,
    selectedPackageType
}) => {
    const games = [
        { key: 'game_one', ...t.packages.game_one },
        { key: 'game_two', ...t.packages.game_two },
        { key: 'game_three', ...t.packages.game_three },
        { key: 'game_four', ...t.packages.game_four },
        { key: 'game_five', ...t.packages.game_five },
        { key: 'game_six', ...t.packages.game_six },
        { key: 'game_seven', ...t.packages.game_seven },
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

    const isGameInThePast = (gameDate) => {
        const currentYear = new Date().getFullYear();
        const gameDateObj = new Date(`${currentYear}/${gameDate}`);
        return gameDateObj < new Date();
    };

    return (
        <>
            {!away && (
                <div className='season_select'>
                    <div
                        className={`selection-box ${selectedPackageType === 'cub' || selectedPackageType === 'intruder' ? 'cub-box' : 'vip-box'} ${formData.include_season ? (selectedPackageType === 'cub' || selectedPackageType === 'intruder' ? 'selected-orange' : 'selected-purple') : ''}`}
                        onClick={handleSeason}
                    >
                        {t.packages.season.name} - $
                        {selectedPackageType === 'cub' || selectedPackageType === 'intruder'
                            ? t.packages.season.price_cub
                            : t.packages.season.price_vip}
                    </div>
                </div>
            )}
            <div className="game_select">
                {games.map(game => {
                    const isDisabled = formData.include_season || isGameInThePast(game.date) || game.sold_out;

                    return (
                        <GameButton
                            key={game.key}
                            game={game}
                            formData={formData}
                            handleClick={!isDisabled ? handleClickMap[game.key] : undefined}
                            selectedPackageType={selectedPackageType}
                            disabled={isDisabled}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default GameSelection;
