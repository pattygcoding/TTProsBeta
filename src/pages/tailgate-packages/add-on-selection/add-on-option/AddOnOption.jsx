import React from 'react';
import t from '../../../../config/text.json';
import "./AddOnOption.css";

const AddOnOption = ({ selected, name, price, amount, onChange }) => {
	return (
		<div
			className={`generic-box add_on_box ${selected ? 'selected-orange' : ''}`}
			onClick={onChange}
		>
			{name} - ${price}{t.packages.form.per_game}
			{/*selected && (
				<div className="countbox">
					<input
						className="form-control"
						type="number"
						placeholder="Enter amount"
						value={amount}
						onChange={onChange}
					/>
				</div>
			)*/}
		</div>
	);
}

export default AddOnOption;