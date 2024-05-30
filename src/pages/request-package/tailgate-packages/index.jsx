import React from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";
import text from '../../../config/text.json';

const TailgatePackages = () => {
	return (
		<Col>
			<Row className="sec_sp">
				<Col>
					<div class="cub" style={{ borderRadius: '4rem' }} >
						<div class="imgtext">
							<h2>{text.packages.cub.name}</h2>
							<p>{text.packages.cub.description.split('\n').map((line, index) => (
								<div key={index}>{line}</div>
							))}</p>
						</div>
					</div>
				</Col>
				<Col>
					<div class="vip" style={{ borderRadius: '4rem' }} >
						<div class="imgtext">
							<h2>{text.packages.vip.name}</h2>
							<p>{text.packages.vip.description.split('\n').map((line, index) => (
								<div key={index}>{line}</div>
							))}</p>
						</div>
					</div>
				</Col>
			</Row>
		</Col>
	);
};

export default TailgatePackages