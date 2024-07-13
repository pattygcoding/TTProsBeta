import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { TabLabel } from "@/components/tab-label";
import { PageTitle } from "@/components/page-title";
import image from '@/config/image.json';
import t from '@/config/text.json';
import "./About.css";

const About = () => {

	return (
		<HelmetProvider>
			<Container>
				<TabLabel label={t.about.title} />
				<Col>
				<PageTitle title={t.about.title}/>
					<Row className="sec_sp">
						<img src={image.about.display} alt="" style={{ borderRadius: '4rem' }} />
						<div className="d-flex custom-gap align-items-stretch">
							<div className="col-lg-6">
								<h3 className="color_sec py-4">{t.about.name_left}</h3>
								<p style={{ hyphens: 'none' }}>{t.about.description_left}</p>
							</div>
							<div className="col-lg-6 d-flex align-items-center">
								<div>
									<h3 className="color_sec py-4">{t.about.name_right}</h3>
									<p style={{ hyphens: 'none' }}>{t.about.description_right}</p>
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