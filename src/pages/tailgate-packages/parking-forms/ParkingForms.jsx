import React from 'react';
import { Row, Col } from "react-bootstrap";

const ParkingForms = ({ formData, handleChange }) => {
    return (
        <Row>
            <Col lg="6" className="form-group">
                <label htmlFor="lot_number">Lot Number:</label>
                <input
                    type="number"
                    className="form-control"
                    id="lot_number"
                    name="lot_number"
                    value={formData.lot_number}
                    onChange={handleChange}
                    style={{ background: "black", color: "white" }}
                />
            </Col>
            <Col lg="6" className="form-group">
                <label htmlFor="spot_number">Spot Number:</label>
                <input
                    type="number"
                    className="form-control"
                    id="spot_number"
                    name="spot_number"
                    value={formData.spot_number}
                    onChange={handleChange}
                    style={{ background: "black", color: "white" }}
                />
            </Col>
        </Row>
    );
};

export default ParkingForms;
