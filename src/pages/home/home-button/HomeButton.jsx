import React from "react";
import { Link } from "react-router-dom";
import "./HomeButton.css";

const HomeButton = ({ page, label }) => {
	return (
		<Link to={page}>
			<div id="button_p" className="ac_btn btn">
				{label}
				<div className="ring one"/>
				<div className="ring two"/>
				<div className="ring three"/>
			</div>
		</Link>
	);
}
export default HomeButton;