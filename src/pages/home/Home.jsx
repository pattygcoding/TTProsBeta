import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import t from '../../config/text.json';
import "./Home.css";

const Home = () => {

	useEffect(() => {
		const images = [
			"https://i.imgur.com/N7XsoR3.jpeg",
			"https://i.imgur.com/yeJiq5G.jpeg",
			"https://i.imgur.com/ckURYig.jpeg",
			"https://i.imgur.com/hVx74Ve.jpeg",
			"https://i.imgur.com/oU0Ma5E.jpeg",
			"https://i.imgur.com/N7XsoR3.jpeg"
		];

		const preloadImages = () => {
			images.forEach((image) => {
				const img = new Image();
				img.src = image;
				img.className = 'hidden';
				document.body.appendChild(img);
			});
		};

		let currentIndex = 0;
		const slideshow = document.getElementById('slideshow');

		const changeImage = () => {
			slideshow.style.backgroundImage = `url(${images[currentIndex]})`;
			currentIndex = (currentIndex + 1) % images.length;
		};

		preloadImages();
		changeImage();
		const interval = setInterval(changeImage, 18000); // Change image every 18 seconds

		return () => clearInterval(interval); // Cleanup interval on component unmount
	}, []);


	return (
		<HelmetProvider>
			<section id="home" className="home">
				<Helmet>
					<meta charSet="utf-8" />
					<title>{t.home.title} | {t.meta.title}</title>
					<meta name="description" content={t.meta.description} />
				</Helmet>
				<div className="intro_sec d-block d-lg-flex align-items-center">
						<div id="slideshow" className="h_bg-image order-1 order-lg-2 h-100 responsive-image sec_sp" style={{ borderRadius: '4rem' }}>
						</div>
					<div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
						<div className="align-self-center ">
							<div className="intro mx-auto">
								<h1 className="mb-1x" style={{ fontSize: '2.5rem' }}>{t.home.title}</h1>
								<p className="mb-1x" style={{ hyphens: 'none' }}>{t.home.description}</p>
							</div>
							<div>
								<Link to="/tailgate-packages">
									<div id="button_p" className="ac_btn btn">
										{t.home.request_package}
										<div className="ring one"></div>
										<div className="ring two"></div>
										<div className="ring three"></div>
									</div>
								</Link>
								<Link to="/gallery">
									<div id="button_p" className="ac_btn btn">
										{t.home.gallery}
										<div className="ring one"></div>
										<div className="ring two"></div>
										<div className="ring three"></div>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</HelmetProvider>
	);
};

export default Home;