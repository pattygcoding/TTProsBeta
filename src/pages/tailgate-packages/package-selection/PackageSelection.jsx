// components/RequestPackage/PackageSelection.js
import React from 'react';
import t from '@/config/text.json';
import { GameSelection } from './game-selection';
import "./PackageSelection.css";

const PackageSelection = ({ away, selectedPackageType, handlePackageTypeChange, handleSeason, handleGameOne, handleGameTwo, handleGameThree, handleGameFour, handleGameFive, handleGameSix, handleGameSeven, formData }) => {
	return (
		<>
			<div style={{ paddingBottom: '0.3rem' }}>Select your package type:</div>
			<div className='outer_package_select'>
			{ away ? 
				<div
					className={`selectable-box orange-border ${selectedPackageType === 'intruder' ? 'selected-orange' : ''}`}
					onClick={() => handlePackageTypeChange('intruder')}
				>
					{t.packages.form.intruder}
				</div> 
				:
				<div
					className={`selectable-box orange-border ${selectedPackageType === 'cub' ? 'selected-orange' : ''}`}
					onClick={() => handlePackageTypeChange('cub')}
				>
					{t.packages.form.cub}
				</div>
			}
			{ away ? 
				<div
					className={`selectable-box purple-border ${selectedPackageType === 'ultimate' ? 'selected-purple' : ''}`}
					onClick={() => handlePackageTypeChange('ultimate')}
				>
					{t.packages.form.ultimate}
				</div> 
				:
				<div
					className={`selectable-box purple-border ${selectedPackageType === 'vip' ? 'selected-purple' : ''}`}
					onClick={() => handlePackageTypeChange('vip')}
				>
					{t.packages.form.vip}
				</div>
			}
			</div>
			<div style={{ paddingBottom: '0.3rem' }}>Select your games:</div>
			{selectedPackageType === 'cub' || 
			selectedPackageType === 'vip' ||
			selectedPackageType === 'intruder' ||
			selectedPackageType === 'ultimate'
			? (
				<GameSelection
					away={away}
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
		</>
	);
};

export default PackageSelection;