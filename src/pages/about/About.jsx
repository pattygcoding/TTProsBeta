import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import image from '../../config/image.json';
import text from '../../config/text.json';
import "./About.css";

const About = () => {

	return (
		<HelmetProvider>
			<Container className="About-header">
				<Helmet>
					<meta charSet="utf-8" />
					<title> About | {text.meta.title}</title>
					<meta name="description" content={text.meta.description} />
				</Helmet>
				<Col>
					<Row className="mb-5 mt-3 pt-md-3">
						<Col lg="12" className="text-header">
							<h1 className="display-4 mb-4">{text.about.title}</h1>
							<hr className="t_border my-4 ml-0" />
						</Col>
					</Row>
					<Row className="sec_sp">
						<img src={image.about.display} alt="" style={{ borderRadius: '4rem' }} />
						<div className="d-flex custom-gap align-items-stretch">
							<div className="col-lg-6">
								<h3 className="color_sec py-4">{text.about.name_left}</h3>
								<p style={{ hyphens: 'none' }}>{text.about.description_left}</p>
							</div>
							<div className="col-lg-6 d-flex align-items-center">
								<div>
									<h3 className="color_sec py-4">{text.about.name_right}</h3>
									<p style={{ hyphens: 'none' }}>{text.about.description_right}</p>
								</div>
							</div>
						</div>
					</Row>
				</Col>
			</Container>
		</HelmetProvider>
	);
};

export default About;