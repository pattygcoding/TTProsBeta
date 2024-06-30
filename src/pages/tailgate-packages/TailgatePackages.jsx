import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { ContactForms } from './contact-forms';
import { PackageSelection } from './package-selection';
import { PackageInfograph } from "./package-infograph";
import { AddOnSelection } from './add-on-selection';
import email from '../../config/email.json';
import text from '../../config/text.json';
import "./TailgatePackages.css";

const TailgatePackages = () => {
	const [formData, setFormdata] = useState({
		first_name: "",
		last_name: "",
		email: "",
		phone_number: "",
		include_season: "",
		include_game_one: "",
		include_game_two: "",
		include_game_three: "",
		include_game_four: "",
		include_game_five: "",
		include_game_six: "",
		include_game_seven: "",
		include_cooler: "",
		include_chair: "",
		include_table: "",
		include_tent: "",
		include_cocktail_table: "",
		include_side_tent: "",
		cooler_amount: 1,
		chair_amount: 1,
		table_amount: 1,
		tent_amount: 1,
		cocktail_table_amount: 1,
		side_tent_amount: 1,
		lot_number: "",
		spot_number: "",
		additional_comment: "",
		hear_about_us_question: "",
		loading: false,
		show: false,
		alertmessage: "",
		variant: "",
	});

	const [recaptchaToken, setRecaptchaToken] = useState(null);

	const handleChange = (e) => {
		setFormdata({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!recaptchaToken) {
			alert('Please complete the reCAPTCHA');
			return;
		}
		setFormdata({ ...formData, loading: true });
		const templateParams = {
			first_name: formData.first_name,
			last_name: formData.last_name,
			email: formData.email,
			phone_number: formData.phone_number,
			package_type: selectedPackageType,
			include_season: formData.include_season ? (text.packages.season?.name || "") : "",
			include_game_one: formData.include_game_one ? (text.packages.game_one?.name || "") : "",
			include_game_two: formData.include_game_two ? (text.packages.game_two?.name || "") : "",
			include_game_three: formData.include_game_three ? (text.packages.game_three?.name || "") : "",
			include_game_four: formData.include_game_four ? (text.packages.game_four?.name || "") : "",
			include_game_five: formData.include_game_five ? (text.packages.game_five?.name || "") : "",
			include_game_six: formData.include_game_six ? (text.packages.game_six?.name || "") : "",
			include_game_seven: formData.include_game_seven ? (text.packages.game_seven?.name || "") : "",
			include_cooler: formData.include_cooler ? (text.packages.add_ons.cooler?.name || "") : "[-]",
			include_chair: formData.include_chair ? (text.packages.add_ons.chair?.name || "") : "[-]",
			include_table: formData.include_table ? (text.packages.add_ons.table?.name || "") : "[-]",
			include_tent: formData.include_tent ? (text.packages.add_ons.tent?.name || "") : "[-]",
			include_cocktail_table: formData.include_cocktail_table ? (text.packages.add_ons.cocktail_table?.name || "") : "[-]",
			include_side_tent: formData.include_side_tent ? (text.packages.add_ons.side_tent?.name || "") : "[-]",
			cooler_amount: formData.cooler_amount ? (text.packages?.count + formData.cooler_amount || "") : "",
			chair_amount: formData.chair_amount ? (text.packages?.count + formData.chair_amount || "") : "",
			table_amount: formData.table_amount ? (text.packages?.count + formData.table_amount || "") : "",
			tent_amount: formData.tent_amount ? (text.packages?.count + formData.tent_amount || "") : "",
			cocktail_table_amount: formData.cocktail_table_amount ? (text.packages?.count + formData.cocktail_table_amount || "") : "",
			side_tent_amount: formData.side_tent_amount ? (text.packages?.count + formData.side_tent_amount || "") : "",
			lot_number: formData.lot_number,
			spot_number: formData.spot_number,
			additional_comment: formData.additional_comment,
			hear_about_us_question: formData.hear_about_us_question,
		};
		emailjs.send(email.service_id, email.template_id, templateParams, email.user_id)
			.then((result) => {
				console.log(result.text);
				setFormdata({
					...formData,
					loading: false,
					alertmessage: "SUCCESS! Thank you for your message",
					variant: "success",
					show: true,
				});
			},
				(error) => {
					console.log(error.text);
					setFormdata({
						...formData,
						alertmessage: `Failed to send! ${error.text}`,
						variant: "danger",
						show: true,
					});
					document.getElementsByClassName("co_alert")[0].scrollIntoView();
				}
			);
	};

	const handleRecaptchaChange = (token) => {
		setRecaptchaToken(token);
	};

	const [selectedPackageType, setSelectedPackageType] = useState('cub');

	const handlePackageTypeChange = (packageType) => {
		setSelectedPackageType(packageType);
	};

	const toggleGames = (inclusion, selection, packageName) => {
		setFormdata((prevData) => ({
			...prevData,
			[inclusion]: !prevData[inclusion],
			[selection]: prevData[inclusion] ? "" : text.packages[packageName].name,
		}));
	};

	const handleSeason = () => toggleGames('include_season', 'selectedSeason', 'season');
	const handleGameOne = () => toggleGames('include_game_one', 'selectedGameOne', 'game_one');
	const handleGameTwo = () => toggleGames('include_game_two', 'selectedGameTwo', 'game_two');
	const handleGameThree = () => toggleGames('include_game_three', 'selectedGameThree', 'game_three');
	const handleGameFour = () => toggleGames('include_game_four', 'selectedGameFour', 'game_four');
	const handleGameFive = () => toggleGames('include_game_five', 'selectedGameFive', 'game_five');
	const handleGameSix = () => toggleGames('include_game_six', 'selectedGameSix', 'game_six');
	const handleGameSeven = () => toggleGames('include_game_seven', 'selectedGameSeven', 'game_seven');

	const toggleAddOns = (inclusion, selection) => {
		setFormdata((prevData) => ({
			...prevData,
			[inclusion]: !prevData[inclusion],
			[selection]: prevData[inclusion] ? "" : prevData[inclusion],
		}));
	};

	const handleCooler = () => toggleAddOns('include_cooler', 'selectedCooler');
	const handleChair = () => toggleAddOns('include_chair', 'selectedChair');
	const handleTable = () => toggleAddOns('include_table', 'selectedTable');
	const handleTent = () => toggleAddOns('include_tent', 'selectedTent');
	const handleCocktailTable = () => toggleAddOns('include_cocktail_table', 'selectedCocktailTable');
	const handleSideTent = () => toggleAddOns('include_side_tent', 'selectedSideTent');

	const handleScrollToForm = () => {
		document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<HelmetProvider>
			<Container>
				<Helmet>
					<meta charSet="utf-8" />
					<title>{text.meta.title}</title>
					<meta name="description" content={text.meta.description} />
				</Helmet>
				<Col>
					<Row className="mb-5 mt-3 pt-md-3">
						<Col lg="12" className="text-header">
							<h1 className="display-4 mb-4">{text.packages.select_title}</h1>
							<hr className="t_border my-4 ml-0" />
						</Col>
					</Row>
					<div className="pictures" onClick={handleScrollToForm}>
						<PackageInfograph />
					</div>
					<Row className="sec_sp" id="form-section">
						<Col className="align-items-center">
							<ContactForms
								formData={formData}
								handleChange={handleChange}
								handleSubmit={handleSubmit}
								style={{ background: "black" }}
							/>
							<PackageSelection
								selectedPackageType={selectedPackageType}
								handlePackageTypeChange={handlePackageTypeChange}
								handleSeason={handleSeason}
								handleGameOne={handleGameOne}
								handleGameTwo={handleGameTwo}
								handleGameThree={handleGameThree}
								handleGameFour={handleGameFour}
								handleGameFive={handleGameFive}
								handleGameSix={handleGameSix}
								handleGameSeven={handleGameSeven}
								formData={formData}
								style={{ background: "black" }}
							/>
							<AddOnSelection
								formData={formData}
								handleCooler={handleCooler}
								handleChair={handleChair}
								handleTable={handleTable}
								handleTent={handleTent}
								handleCocktailTable={handleCocktailTable}
								handleSideTent={handleSideTent}
								style={{ background: "black" }}
							/>
							<Row>
								<Col lg="6" className="form-group">
									<label htmlFor="lot_number">Lot Number:</label>
									<input
										type="number"
										className="form-control"
										id="lot_number"
										name="lot_number"
										value={formData.lot_number}
										onChange={handleChange}
										style={{ background: "black", color: "white" }}
									/>
								</Col>
								<Col lg="6" className="form-group">
									<label htmlFor="spot_number">Spot Number:</label>
									<input
										type="number"
										className="form-control"
										id="spot_number"
										name="spot_number"
										value={formData.spot_number}
										onChange={handleChange}
										style={{ background: "black", color: "white" }}
									/>
								</Col>
							</Row>
							<form onSubmit={handleSubmit}>
								<Row>
									<Col lg="12" className="form-group">
										<label htmlFor="additional_comment">Additional Comment:</label>
										<textarea
											className="form-control"
											id="additional_comment"
											name="additional_comment"
											value={formData.additional_comment}
											onChange={handleChange}
											style={{ background: "black", color: "white" }}
										></textarea>
									</Col>
								</Row>
								<Row>
									<Col lg="12" className="form-group">
										<label htmlFor="hear_about_us_question">How did you hear about us?</label>
										<textarea
											className="form-control"
											id="hear_about_us_question"
											name="hear_about_us_question"
											value={formData.hear_about_us_question}
											onChange={handleChange}
											style={{ background: "black", color: "white" }}
										></textarea>
									</Col>
								</Row>
							</form>

							<div style={{ height: "1rem" }}></div>
							<form onSubmit={handleSubmit}>
								<Row>
									<Col lg="12" className="form-group">
										<button className="btn ac_btn" type="submit" disabled={formData.loading}>
											{formData.loading ? "Sending..." : "Send"}
										</button>
									</Col>
								</Row>
							</form>
						</Col>
						<Col lg="12">
							<Alert
								variant={formData.variant}
								className={`rounded-0 co_alert ${formData.show ? "d-block" : "d-none"}`}
								onClose={() => setFormdata({ ...formData, show: false })}
								dismissible
							>
								<p className="my-0">{formData.alertmessage}</p>
							</Alert>
						</Col>
					</Row>
				</Col>
			</Container>
			<div className={formData.loading ? "loading-bar" : "d-none"}></div>
		</HelmetProvider>
	);
};

export default TailgatePackages;