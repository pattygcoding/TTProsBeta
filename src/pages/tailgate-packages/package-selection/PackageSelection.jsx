// components/RequestPackage/PackageSelection.js
import React from 'react';
import text from '../../../config/text.json';
import { GameSelection } from './game-selection';
import "./PackageSelection.css";

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
			{selectedPackageType === 'cub' || selectedPackageType === 'vip' ? (
				<GameSelection
					formData={formData}
					handleSeason={handleSeason}
					handleGameOne={handleGameOne}
					handleGameTwo={handleGameTwo}
					handleGameThree={handleGameThree}
					handleGameFour={handleGameFour}
					handleGameFive={handleGameFive}
					handleGameSix={handleGameSix}
					handleGameSeven={handleGameSeven}
					selectedPackageType={selectedPackageType}
				/>
			) : null}
		</div>
	);
};

export default PackageSelection;