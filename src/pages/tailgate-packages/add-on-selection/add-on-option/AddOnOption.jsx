import React from 'react';
import t from '@/config/text.json';
import "./AddOnOption.css";

const AddOnOption = ({ selected, name, price, amount, onChange, onAmountChange }) => {
	return (
		<div
			className={`generic-box add_on_box ${selected ? 'selected-orange' : ''}`}
			onClick={onChange}
		>
			{name} - ${price}{t.packages.form.per_game}
			{selected && (
				<div className="countbox" onClick={(e) => e.stopPropagation()}>
					Count:&nbsp;
					<input
						className="form-control"
						type="number"
						placeholder="Enter amount"
						value={amount}
						onChange={(e) => {
							e.stopPropagation(); // Prevent parent box deselection
							onAmountChange(e); // Update the amount without affecting selection
						}}
						onClick={(e) => e.stopPropagation()}
					/>
				</div>
			)}
		</div>
	);
}

export default AddOnOption;
