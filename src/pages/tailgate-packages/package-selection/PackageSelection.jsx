import React from 'react';
import data from '@/config/datapack.json';
import t from '@/config/text.json';
import { RequiredStar } from '@/components/required-star';
import { GameSelection } from './game-selection';
import "./PackageSelection.css";

const PackageSelection = ({ formData, away, selectedPackageType, handlePackageTypeChange, ...props }) => {
	const packageTypes = away
		? { standard: 'intruder', premium: 'ultimate', standardLabel: t.packages.form.intruder, premiumLabel: t.packages.form.ultimate }
		: { standard: 'cub', premium: 'vip', standardLabel: t.packages.form.cub, premiumLabel: t.packages.form.vip };

	return (
		<>
			<div style={{ paddingBottom: '0.3rem' }}>
				Select your package type: <RequiredStar/>
			</div>
			<div className='outer_package_select'>
				<div
					className={`selectable-box orange-border ${selectedPackageType === packageTypes.standard ? 'selected-orange' : ''}`}
					onClick={() => handlePackageTypeChange(packageTypes.standard)}
				>
					{packageTypes.standardLabel}
				</div>
				<div
					className={`selectable-box purple-border ${selectedPackageType === packageTypes.premium ? 'selected-purple' : ''}`}
					onClick={() => handlePackageTypeChange(packageTypes.premium)}
				>
					{packageTypes.premiumLabel}
				</div>
			</div>
			<div style={{ paddingBottom: '0.3rem' }}>
				Select your games: <RequiredStar/>
			</div>
			{data.packages.includes(selectedPackageType) && (
				<GameSelection
					formData={formData}
					away={away}
					selectedPackageType={selectedPackageType}
					{...props}
				/>
			)}
		</>
	);
};

export default PackageSelection;