import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { TextForm } from './text-form';
import "./ContactForms.css";

const ContactForms = ({ formData, handleChange, handleSubmit, csrfToken }) => {
	return (
		<form onSubmit={handleSubmit} className="contact__form w-100" autoComplete="off">
			<input type="hidden" name="_csrf" value={csrfToken} />
			<Row>
				<Col lg="6" className="form-group">
					<TextForm
						label="First Name"
						name="first_name"
						value={formData.first_name}
						handleChange={handleChange}
					/>
				</Col>
				<Col lg="6" className="form-group">
					<TextForm
						label="Last Name"
						name="last_name"
						value={formData.last_name}
						handleChange={handleChange}
					/>
				</Col>
			</Row>
			<Row>
				<Col lg="6" className="form-group">
					<TextForm
						label="Email"
						name="email"
						value={formData.email}
						handleChange={handleChange}
					/>
				</Col>
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
						onChange={handleChange}
					/>
				</Col>
			</Row>
		</form>
	);
};

export default ContactForms;
