import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { HomeButton } from './home-button';
import { Row, Carousel } from 'react-bootstrap';
import { images } from "./Home.utils";
import { TabLabel } from "@/components/tab-label";
import t from '@/config/text.json';
import "./Home.css";

const Home = () => {
	return (
		<HelmetProvider>
			<section id="home" className="home">
				<TabLabel label={t.home.title} />
				<div className="intro_sec d-block d-lg-flex align-items-center">
					<div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center" style={{ padding: '1rem' }}>
						<div className="align-self-center">
							<div className="intro mx-auto">
								<h1 className="mb-1x" style={{ fontSize: '2.5rem' }}>{t.home.title}</h1>
								<p className="mb-1x" style={{ hyphens: 'none' }}>{t.home.description}</p>
								<Row>
									<div className="align-items-center" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
										<HomeButton page="/tailgate-packages" label={t.home.request_package} />
										<HomeButton page="/away-fan-packages" label={t.home.away_package} />
										<HomeButton page="/gallery" label={t.home.gallery} />
										<HomeButton page="/about" label={t.home.about_us} />
									</div>
								</Row>
							</div>
						</div>
					</div>
					<div className="carousel-wrapper order-1 order-lg-2 h-100 sec_sp">
						<Carousel>
							{images.map((image, index) => (
								<Carousel.Item key={index}>
									<img
										className="d-block w-100"
										src={image}
										alt={`Slide ${index + 1}`}
									/>
								</Carousel.Item>
							))}
						</Carousel>
					</div>
				</div>
			</section>
		</HelmetProvider>
	);
};

export default Home;
