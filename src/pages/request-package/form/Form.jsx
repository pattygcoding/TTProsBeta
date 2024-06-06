import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { TextForm } from './text-form';
import "./Form.css";


const Form = ({ formData, handleChange, handleSubmit, csrfToken }) => {
	return (
		<form onSubmit={handleSubmit} className="contact__form w-100" autoComplete="off">
			<input type="hidden" name="_csrf" value={csrfToken} />
			<Row>
				<TextForm
					label="First Name"
					name="first_name"
					value={formData.first_name}
					handleChange={handleChange}
				/>
				<TextForm
					label="Last Name"
					name="last_name"
					value={formData.last_name}
					handleChange={handleChange}
				/>
				<TextForm
					label="Email"
					name="email"
					value={formData.email}
					handleChange={handleChange}
				/>
				<Col lg="6" className="form-group">
					<label htmlFor="phone_number">Phone Number <span style={{ color: 'red' }}>*</span></label>
					<input
						className="form-control rounded-0"
						id="phone_number"
						name="phone_number"
						type="tel"
						value={formData.phone_number || ""}
						required
						maxLength="14"
						pattern="[0-9()\-]*"
						onChange={handleChange}
					/>
				</Col>
			</Row>
			<Row>
				<Col lg="12" className="form-group">
					<button className="btn ac_btn" type="submit" disabled={formData.loading}>
						{formData.loading ? "Sending..." : "Send"}
					</button>
				</Col>
			</Row>
		</form>
	);
};

export default Form;
