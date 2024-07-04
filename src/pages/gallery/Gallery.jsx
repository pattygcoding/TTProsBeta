import React, { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TabLabel } from "../../components/tab-label";
import { PageTitle } from "../../components/page-title";
import image from '../../config/image.json';
import t from '../../config/text.json';
import "./Gallery.css";

const Gallery = () => {
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
                <TabLabel label={t.gallery.title} />
                <Col>
                    <PageTitle title={t.gallery.title}/>
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

export default Gallery;