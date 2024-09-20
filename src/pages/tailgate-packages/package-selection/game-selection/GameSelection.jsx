import React from 'react';
import t from '@/config/text.json';
import data from '@/config/datapack.json';
import { GameButton } from './game-button'; // Adjusted import to default export
import { gameIds } from '@/utils/utils.js';
import "./GameSelection.css";

const GameSelection = ({
    away,
    formData,
    selectedPackageType,
    handle_season,
    ...props
}) => {
    const gamesOmitSeason = gameIds.filter(field => field !== "season");

    const games = gamesOmitSeason.map(field => ({
        key: field,
        ...t.packages[field]
    }));

    const handleClickMap = gamesOmitSeason.reduce((acc, gameField) => {
        acc[gameField] = props[`handle_${gameField}`];
        return acc;
    }, {});

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
                        className={`selection-box ${data.standard_packages.includes(selectedPackageType) ? 'cub-box' : 'vip-box'} ${formData.include_season ? (data.standard_packages.includes(selectedPackageType) ? 'selected-orange' : 'selected-purple') : ''}`}
                        onClick={handle_season}
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
