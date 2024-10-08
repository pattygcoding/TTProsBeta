import React from 'react';
import t from '@/config/text.json';
import { standardPackageIds } from '@/utils/utils.js'
import { Form } from 'react-bootstrap';
import "./AddOnOption.css";

const AddOnOption = ({ selected, name, price, amount, onChange, onAmountChange, selectedPackageType }) => {
	return (
		<div
			className={`generic-box add_on_box ${standardPackageIds.includes(selectedPackageType) ? (selected ? 'select-orange' : 'ao-orange') : (selected ? 'select-purple' : 'ao-purple')}`}
			onClick={onChange}
		>
			<div className="addon-description">
				{name} - ${price}{t.packages.form.per_game}
			</div>
			{selected && (
				<div className="countbox" onClick={(e) => e.stopPropagation()}>
					Count:&nbsp;
					<Form.Control
						type="number"
						value={amount}
						onChange={(e) => {
							e.stopPropagation();
							const newAmount = e.target.value === '' ? '' : parseInt(e.target.value, 10);
							if (newAmount === '' || (!isNaN(newAmount) && newAmount >= 1)) {
								onAmountChange(newAmount);
							}
						}}
					/>
				</div>
			)}
		</div>
	);
};

export default AddOnOption;
