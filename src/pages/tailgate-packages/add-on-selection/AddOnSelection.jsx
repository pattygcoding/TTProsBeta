import React from 'react';
import t from '@/config/text.json';
import "./AddOnSelection.css";
import { AddOnOption } from './add-on-option';

const AddOnSelection = ({
	formData,
	handle_cooler,
	handle_chair,
	handle_table,
	handle_tent,
	handle_cocktail_table,
	handle_side_tent,
	handle_cornhole_boards,
	handle_premium_chair,
	handle_cooler_amount,
	handle_chair_amount,
	handle_premium_chair_amount,
	handle_table_amount,
	handle_tent_amount,
	handle_cocktail_table_amount,
	handle_side_tent_amount,
	handle_cornhole_boards_amount,
}) => {
	return (
		<div style={{ paddingTop: '1rem' }} >
			<div>Select your add-ons:</div>
			<div className="add_on_container" style={{ paddingTop: '0.3rem' }}>
				<AddOnOption
					selected={formData.include_cooler}
					name={t.packages.add_ons.cooler.name}
					price={t.packages.add_ons.cooler.price}
					amount={formData.cooler_amount}
					onChange={handle_cooler}
					onAmountChange={handle_cooler_amount}
				/>
				<AddOnOption
					selected={formData.include_chair}
					name={t.packages.add_ons.chair.name}
					price={t.packages.add_ons.chair.price}
					amount={formData.chair_amount}
					onChange={handle_chair}
					onAmountChange={handle_chair_amount}
				/>
				<AddOnOption
					selected={formData.include_premium_chair}
					name={t.packages.add_ons.premium_chair.name}
					price={t.packages.add_ons.premium_chair.price}
					amount={formData.premium_chair_amount}
					onChange={handle_premium_chair}
					onAmountChange={handle_premium_chair_amount}
				/>
				<AddOnOption
					selected={formData.include_table}
					name={t.packages.add_ons.table.name}
					price={t.packages.add_ons.table.price}
					amount={formData.table_amount}
					onChange={handle_table}
					onAmountChange={handle_table_amount}
				/>
				<AddOnOption
					selected={formData.include_tent}
					name={t.packages.add_ons.tent.name}
					price={t.packages.add_ons.tent.price}
					amount={formData.tent_amount}
					onChange={handle_tent}
					onAmountChange={handle_tent_amount}
				/>
				<AddOnOption
					selected={formData.include_cocktail_table}
					name={t.packages.add_ons.cocktail_table.name}
					price={t.packages.add_ons.cocktail_table.price}
					amount={formData.cocktail_table_amount}
					onChange={handle_cocktail_table}
					onAmountChange={handle_cocktail_table_amount}
				/>
				<AddOnOption
					selected={formData.include_side_tent}
					name={t.packages.add_ons.side_tent.name}
					price={t.packages.add_ons.side_tent.price}
					amount={formData.side_tent_amount}
					onChange={handle_side_tent}
					onAmountChange={handle_side_tent_amount}
				/>
				<AddOnOption
					selected={formData.include_cornhole_boards}
					name={t.packages.add_ons.cornhole_boards.name}
					price={t.packages.add_ons.cornhole_boards.price}
					amount={formData.cornhole_boards_amount}
					onChange={handle_cornhole_boards}
					onAmountChange={handle_cornhole_boards_amount}
				/>
			</div>
		</div>
	);
};

export default AddOnSelection;
