import React from 'react';
import t from '@/config/text.json';
import data from '@/config/datapack.json';
import "./AddOnSelection.css";
import { AddOnOption } from './add-on-option';

const AddOnSelection = ({
	formData,
	...props
}) => {
	return (
		<div style={{ paddingTop: '1rem' }} >
			<div>Select your add-ons:</div>
			<div className="add_on_container" style={{ paddingTop: '0.3rem' }}>
				{data.add_on_fields.map((addOn) => (
					<AddOnOption
						key={addOn}
						selected={formData[`include_${addOn}`]}
						name={t.packages.add_ons[addOn].name}
						price={t.packages.add_ons[addOn].price}
						amount={formData[`${addOn}_amount`]}
						onChange={props[`handle_${addOn}`]} // Access the handler from props
						onAmountChange={props[`handle_${addOn}_amount`]} // Access the amount handler from props
						{...props}
					/>
				))}
			</div>
		</div>
	);
};

export default AddOnSelection;