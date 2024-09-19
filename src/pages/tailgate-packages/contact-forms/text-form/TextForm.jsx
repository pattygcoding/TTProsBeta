import React from 'react';
import { Col } from 'react-bootstrap';
import { RequiredStar } from '@/components/required-star';
import "./TextForm.css";

const TextForm = ({ label, name, value, handleChange }) => {
	return (
		<Col className="form-group">
			<label htmlFor={name}>
				{label} <RequiredStar/>
			</label>
			<input
				className="form-control"
				id={name}
				name={name}
				value={value || ""}
				type="text"
				required
				maxLength="50"
				onChange={handleChange}
			/>
		</Col>
	);
};

export default TextForm;
