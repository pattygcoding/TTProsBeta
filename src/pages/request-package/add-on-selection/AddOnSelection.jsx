// components/RequestPackage/AddOnSelection.js
import React from 'react';
import text from '../../../config/text.json';
import "./AddOnSelection.css";
import { AddOnOption } from './add-on-option';

const AddOnSelection = ({ formData, handleCooler, handleChair, handleTable, handleTent, handleCocktailTable, handleSideTent }) => {
	return (
		<div>
			<div>Select your add-ons:</div>
			<div className="add_on_container">
				<AddOnOption
					selected={formData.include_cooler}
					name={text.packages.add_ons.cooler.name}
					price={text.packages.add_ons.cooler.price}
					amount={formData.cooler_amount}
					onChange={handleCooler}
				/>
				<AddOnOption
					selected={formData.include_chair}
					name={text.packages.add_ons.chair.name}
					price={text.packages.add_ons.chair.price}
					amount={formData.chair_amount}
					onChange={handleChair}
				/>
				<AddOnOption
					selected={formData.include_table}
					name={text.packages.add_ons.table.name}
					price={text.packages.add_ons.table.price}
					amount={formData.table_amount}
					onChange={handleTable}
				/>
				<AddOnOption
					selected={formData.include_tent}
					name={text.packages.add_ons.tent.name}
					price={text.packages.add_ons.tent.price}
					amount={formData.tent_amount}
					onChange={handleTent}
				/>
				<AddOnOption
					selected={formData.include_cocktail_table}
					name={text.packages.add_ons.cocktail_table.name}
					price={text.packages.add_ons.cocktail_table.price}
					amount={formData.cocktail_table_amount}
					onChange={handleCocktailTable}
				/>
				<AddOnOption
					selected={formData.include_side_tent}
					name={text.packages.add_ons.side_tent.name}
					price={text.packages.add_ons.side_tent.price}
					amount={formData.side_tent_amount}
					onChange={handleSideTent}
				/>
			</div>
		</div>
	);
};

export default AddOnSelection;
