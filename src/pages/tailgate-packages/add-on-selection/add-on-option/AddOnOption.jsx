import React from 'react';
import t from '@/config/text.json';
import { Form } from 'react-bootstrap';
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
					<Form.Control
						type="number"
						min="1"
						value={amount}
						onChange={(e) => {
							e.stopPropagation();
							const value = e.target.value;
							if (value >= 1) {
								onAmountChange(value); // Ensure this function is called on both increase and decrease
							}
						}}
					/>
				</div>
			)}
		</div>
	);
}

export default AddOnOption;