import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./TextForm.css";

const TextForm = ({ label, name, value, handleChange }) => {
	return (
		<Col className="form-group">
			<label htmlFor={name}>{label} <span style={{ color: 'red' }}>*</span></label>
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
