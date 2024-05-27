import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap";
import image from '../../config/image.json';
import text from '../../config/text.json';

export const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = Object.values(image.gallery);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <HelmetProvider>
            <Container className="Gallery-header">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{`${text.gallery.title} | ${text.meta.title}`}</title>
                    <meta name="description" content={text.meta.description} />
                </Helmet>
                <Col>
                    <Row className="mb-5 mt-3 pt-md-3">
                        <Col lg="12" className="text-header">
                            <h1 className="display-4 mb-4">{text.gallery.title}</h1>
                            <hr className="t_border my-4 ml-0" />
                        </Col>
                    </Row>
                    <Row className="sec_sp justify-content-center align-items-center">
                        <Col xs="auto">
                            <Button className="gallery-button" onClick={handlePrevClick}>←</Button>
                        </Col>
                        <Col xs="auto">
                            <img src={images[currentIndex]} alt={`Gallery item ${currentIndex + 1}`} className="img-fluid gallery-image" style={{ borderRadius: '4rem' }}  />
                        </Col>
                        <Col xs="auto">
                            <Button className="gallery-button" onClick={handleNextClick}>→</Button>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </HelmetProvider>
    );
};
