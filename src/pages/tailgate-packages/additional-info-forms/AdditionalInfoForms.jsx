import React from 'react';
import { Row, Col } from "react-bootstrap";
import "./AdditionalInfoForms.css";

const AdditionalInfoForms = ({ formData, handleChange }) => {
    return (
        <>
            <Row>
                <Col lg="12" className="form-group">
                    <label htmlFor="additional_comment">Additional Comment:</label>
                    <textarea
                        className="form-control"
                        id="additional_comment"
                        name="additional_comment"
                        value={formData.additional_comment}
                        onChange={handleChange}
                        style={{ background: "black", color: "white" }}
                    ></textarea>
                </Col>
            </Row>
            <Row>
                <Col lg="12" className="form-group">
                    <label htmlFor="hear_about_us_question">How did you hear about us?</label>
                    <textarea
                        className="form-control"
                        id="hear_about_us_question"
                        name="hear_about_us_question"
                        value={formData.hear_about_us_question}
                        onChange={handleChange}
                        style={{ background: "black", color: "white" }}
                    ></textarea>
                </Col>
            </Row>
        </>
    );
};

export default AdditionalInfoForms;
