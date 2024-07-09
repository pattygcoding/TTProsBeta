import React, { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { HomeButton } from './home-button';
import { Row } from 'react-bootstrap';
import { images } from "./Home.utils";
import { TabLabel } from "@/components/tab-label";
import t from '@/config/text.json';
import "./Home.css";

const Home = () => {

	useEffect(() => {
		let currentIndex = 0;
		const slideshow = document.getElementById('slideshow');

		const preloadImages = () => {
			images.forEach((image) => {
				const img = new Image();
				img.src = image;
				img.className = 'hidden';
				document.body.appendChild(img);
			});
		};

		const changeImage = () => {
			slideshow.style.backgroundImage = `url(${images[currentIndex]})`;
			currentIndex = (currentIndex + 1) % images.length;
		};

		preloadImages();
		changeImage();
		const interval = setInterval(changeImage, 18000);

		return () => clearInterval(interval);
	}, []);

	return (
		<HelmetProvider>
			<section id="home" className="home">
				<TabLabel label={t.home.title} />
				<div className="intro_sec d-block d-lg-flex align-items-center"  >
					<div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center" style={{ padding: '1rem' }}>
						<div className="align-self-center ">
							<div className="intro mx-auto">
								<h1 className="mb-1x" style={{ fontSize: '2.5rem' }}>{t.home.title}</h1>
								<p className="mb-1x" style={{ hyphens: 'none' }}>{t.home.description}</p>
								<Row>
									<div className="align-items-center">
										<HomeButton page="/tailgate-packages" label={t.home.request_package} />
										<HomeButton page="/gallery" label={t.home.gallery} />
										<HomeButton page="/about" label={t.home.about_us} />
									</div>
								</Row>
							</div>
						</div>
					</div>
					<div id="slideshow" className="h_bg-image order-1 order-lg-2 h-100 sec_sp"/>
				</div>
			</section>
		</HelmetProvider>
	);
};

export default Home;