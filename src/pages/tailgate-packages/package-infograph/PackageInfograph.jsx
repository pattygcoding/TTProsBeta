import React from "react";
import t from '@/config/text.json';
import "./PackageInfograph.css";

const PackageInfograph = ({ type, handlePackageTypeChange, handleScrollToForm }) => {
	return (
		<div 
			className={`pictures ${type}`} 
			style={{ borderRadius: '4rem', cursor: 'pointer' }} 
			onClick={() => {
				handlePackageTypeChange(type);
				handleScrollToForm();
			}}
		>
			<div className="imgtext">
				<h2>{t.packages[type].name}</h2>
				<p>{t.packages[type].description.split('\n').map((line, index) => (
					<React.Fragment key={index}>{line}<br /></React.Fragment>
				))}</p>
			</div>
		</div>
	);
};

export default PackageInfograph;
