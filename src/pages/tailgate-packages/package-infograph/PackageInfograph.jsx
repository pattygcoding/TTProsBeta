import React from "react";
import { Row, Col } from "react-bootstrap";
import t from '@/config/text.json';
import "./PackageInfograph.css";

const PackageInfograph = () => {
	return (
			<Row>
				<Col>
					<div className="cub" style={{ borderRadius: '4rem 0 0 4rem' }} >
						<div className="imgtext">
							<h2>{t.packages.cub.name}</h2>
							<p>{t.packages.cub.description.split('\n').map((line, index) => (
								<React.Fragment key={index}>{line}<br /></React.Fragment>
							))}</p>
						</div>
					</div>
				</Col>
				<Col>
					<div className="vip" style={{ borderRadius: '0 4rem 4rem 0' }} >
						<div className="imgtext">
							<h2>{t.packages.vip.name}</h2>
							<p>{t.packages.vip.description.split('\n').map((line, index) => (
								<React.Fragment key={index}>{line}<br /></React.Fragment>
							))}</p>
						</div>
					</div>
				</Col>
			</Row>
	);
};

export default PackageInfograph