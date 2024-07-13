import React, { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { TabLabel } from "@/components/tab-label";
import { PageTitle } from "@/components/page-title";
import image from '@/config/image.json';
import t from '@/config/text.json';
import "./Gallery.css";

const Gallery = () => {
    const images = Object.values(image.gallery);

    return (
        <HelmetProvider>
            <Container className="Gallery-header">
                <TabLabel label={t.gallery.title} />
                <Col>
                    <PageTitle title={t.gallery.title} />
                    <Row className="sec_sp justify-content-center align-items-center">
                        <Carousel>
                            {Object.keys(images).map((key, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-100"
                                        src={images[key]}
                                        alt={`Slide ${index + 1}`}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Row>
                </Col>
            </Container>
        </HelmetProvider>
    );
};

export default Gallery;
