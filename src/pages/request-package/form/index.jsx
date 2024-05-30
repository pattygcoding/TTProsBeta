import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./style.css";

const Form = ({ formData, handleChange, handleSubmit, csrfToken }) => {
	return (
		<form onSubmit={handleSubmit} className="contact__form w-100" autoComplete="off">
			<input type="hidden" name="_csrf" value={csrfToken} />
			<Row>
				<Col className="form-group">
					<label htmlFor="first_name">First Name <span style={{ color: 'red' }}>*</span></label>
					<input
						className="form-control"
						id="first_name"
						name="first_name"
						value={formData.first_name || ""}
						type="text"
						required
						maxLength="50"
						onChange={handleChange}
					/>
				</Col>
				<Col lg="6" className="form-group">
					<label htmlFor="last_name">Last Name <span style={{ color: 'red' }}>*</span></label>
					<input
						className="form-control"
						id="last_name"
						name="last_name"
						value={formData.last_name || ""}
						type="text"
						required
						maxLength="50"
						onChange={handleChange}
					/>
				</Col>
				<Col lg="6" className="form-group">
					<label htmlFor="email">Email <span style={{ color: 'red' }}>*</span></label>
					<input
						className="form-control"
						id="email"
						name="email"
						value={formData.email || ""}
						type="email"
						required
						maxLength="100"
						onChange={handleChange}
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
