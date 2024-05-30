// components/RequestPackage/PackageSelection.js
import React from 'react';
import text from '../../../config/text.json';

const PackageSelection = ({ selectedPackageType, handlePackageTypeChange, handleSeason, handleGameOne, handleGameTwo, handleGameThree, handleGameFour, handleGameFive, handleGameSix, handleGameSeven, formData }) => {
  return (
    <div>
      <div className='outer_package_select'>
        <div
          className={`selectable-box orange-border ${selectedPackageType === 'cub' ? 'selected-orange' : ''}`}
          onClick={() => handlePackageTypeChange('cub')}
        >
          {text.packages.form.cub}
        </div>
        <div
          className={`selectable-box purple-border ${selectedPackageType === 'vip' ? 'selected-purple' : ''}`}
          onClick={() => handlePackageTypeChange('vip')}
        >
          {text.packages.form.vip}
        </div>
      </div>
      {selectedPackageType === 'cub' ? (
        <>
          <div className='season_select'>
            <div
              className={`cub-box full-box ${formData.include_season ? 'selected-orange' : ''}`}
              onClick={handleSeason}
            >
              {text.packages.season.name} - ${text.packages.season.price_cub}
            </div>
          </div>
          <div className="game_select">
            <div
              className={`cub-box ${formData.include_game_one ? 'selected-orange' : ''}`}
              onClick={handleGameOne}
            >
              {text.packages.game_one.date} {text.packages.game_one.name} - ${text.packages.game_one.price_cub}
            </div>
            <div
              className={`cub-box ${formData.include_game_two ? 'selected-orange' : ''}`}
              onClick={handleGameTwo}
            >
              {text.packages.game_two.date} {text.packages.game_two.name} - ${text.packages.game_two.price_cub}
            </div>
            <div
              className={`cub-box ${formData.include_game_three ? 'selected-orange' : ''}`}
              onClick={handleGameThree}
            >
              {text.packages.game_three.date} {text.packages.game_three.name} - ${text.packages.game_three.price_cub}
            </div>
            <div
              className={`cub-box ${formData.include_game_four ? 'selected-orange' : ''}`}
              onClick={handleGameFour}
            >
              {text.packages.game_four.date} {text.packages.game_four.name} - ${text.packages.game_four.price_cub}
            </div>
            <div
              className={`cub-box ${formData.include_game_five ? 'selected-orange' : ''}`}
              onClick={handleGameFive}
            >
              {text.packages.game_five.date} {text.packages.game_five.name} - ${text.packages.game_five.price_cub}
            </div>
            <div
              className={`cub-box ${formData.include_game_six ? 'selected-orange' : ''}`}
              onClick={handleGameSix}
            >
              {text.packages.game_six.date} {text.packages.game_six.name} - ${text.packages.game_six.price_cub}
            </div>
            <div
              className={`cub-box ${formData.include_game_seven ? 'selected-orange' : ''}`}
              onClick={handleGameSeven}
            >
              {text.packages.game_seven.date} {text.packages.game_seven.name} - ${text.packages.game_seven.price_cub}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="season_select">
            <div
              className={`vip-box full-box ${formData.include_season ? 'selected-purple' : ''}`}
              onClick={handleSeason}
            >
              {text.packages.season.name} - ${text.packages.season.price_vip}
            </div>
          </div>
          <div className="game_select">
            <div
              className={`vip-box ${formData.include_game_one ? 'selected-purple' : ''}`}
              onClick={handleGameOne}
            >
              {text.packages.game_one.date} {text.packages.game_one.name} - ${text.packages.game_one.price_vip}
            </div>
            <div
              className={`vip-box ${formData.include_game_two ? 'selected-purple' : ''}`}
              onClick={handleGameTwo}
            >
              {text.packages.game_two.date} {text.packages.game_two.name} - ${text.packages.game_two.price_vip}
            </div>
            <div
              className={`vip-box ${formData.include_game_three ? 'selected-purple' : ''}`}
              onClick={handleGameThree}
            >
              {text.packages.game_three.date} {text.packages.game_three.name} - ${text.packages.game_three.price_vip}
            </div>
            <div
              className={`vip-box ${formData.include_game_four ? 'selected-purple' : ''}`}
              onClick={handleGameFour}
            >
              {text.packages.game_four.date} {text.packages.game_four.name} - ${text.packages.game_four.price_vip}
            </div>
            <div
              className={`vip-box ${formData.include_game_five ? 'selected-purple' : ''}`}
              onClick={handleGameFive}
            >
              {text.packages.game_five.date} {text.packages.game_five.name} - ${text.packages.game_five.price_vip}
            </div>
            <div
              className={`vip-box ${formData.include_game_six ? 'selected-purple' : ''}`}
              onClick={handleGameSix}
            >
              {text.packages.game_six.date} {text.packages.game_six.name} - ${text.packages.game_six.price_vip}
            </div>
            <div
              className={`vip-box ${formData.include_game_seven ? 'selected-purple' : ''}`}
              onClick={handleGameSeven}
            >
              {text.packages.game_seven.date} {text.packages.game_seven.name} - ${text.packages.game_seven.price_vip}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PackageSelection;