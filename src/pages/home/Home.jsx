import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import text from '../../config/text.json';
import "./Home.css";

const Home = () => {
	return (
		<HelmetProvider>
			<section id="home" className="home">
				<Helmet>
					<meta charSet="utf-8" />
					<title> {text.meta.title}</title>
					<meta name="description" content={text.meta.description} />
				</Helmet>
				<div className="intro_sec d-block d-lg-flex align-items-center">
					<div
						className="h_bg-image order-1 order-lg-2 h-100 slides" style={{ borderRadius: '4rem' }}
					>
					</div>
					<div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
						<div className="align-self-center ">
							<div className="intro mx-auto">
								<h1 className="mb-1x" style={{ fontSize: '2.5rem' }}>{text.home.title}</h1>
								<p className="mb-1x" style={{ hyphens: 'none' }}>{text.home.description}</p>
							</div>
							<div>
								<Link to="/tailgate-packages">
									<div id="button_p" className="ac_btn btn">
										{text.home.request_package}
										<div className="ring one"></div>
										<div className="ring two"></div>
										<div className="ring three"></div>
									</div>
								</Link>
								<Link to="/gallery">
									<div id="button_p" className="ac_btn btn">
										{text.home.gallery}
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