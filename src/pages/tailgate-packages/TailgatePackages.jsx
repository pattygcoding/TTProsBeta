import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import { HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { ContactForms } from './contact-forms';
import { PackageSelection } from './package-selection';
import { PackageInfograph } from "./package-infograph";
import { ParkingForms } from "./parking-forms";
import { AddOnSelection } from './add-on-selection';
import { TabLabel } from "@/components/tab-label";
import { PageTitle } from "@/components/page-title";
import { initialFormData } from "./TailgatePackages.utils";
import email from '@/config/email_test.json';
import ga from '@/config/ga.json';
import t from '@/config/text.json';
import "./TailgatePackages.css";
import { AdditionalInfoForms } from "./additional-info-forms";

const TailgatePackages = () => {
	const [formData, setFormData] = useState(initialFormData);
	const [selectedPackageType, setSelectedPackageType] = useState('cub');

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const requiredFields = ['first_name', 'last_name', 'email', 'phone_number'];
		const missingFields = requiredFields.filter(field => !formData[field]);

		if (missingFields.length > 0) {
			setFormData({
				...formData,
				alertmessage: "Please fill out all required fields.",
				variant: "danger",
				show: true,
			});
			document.getElementsByClassName("co_alert")[0].scrollIntoView();
			return;
		}

		setFormData({ ...formData, loading: true });

		const templateParams = {
			first_name: formData.first_name,
			last_name: formData.last_name,
			email: formData.email,
			phone_number: formData.phone_number,
			package_type: selectedPackageType,
			include_season: formData.include_season ? (t.packages.season?.name || "") : "",
			include_game_one: formData.include_game_one ? (t.packages.game_one?.name || "") : "",
			include_game_two: formData.include_game_two ? (t.packages.game_two?.name || "") : "",
			include_game_three: formData.include_game_three ? (t.packages.game_three?.name || "") : "",
			include_game_four: formData.include_game_four ? (t.packages.game_four?.name || "") : "",
			include_game_five: formData.include_game_five ? (t.packages.game_five?.name || "") : "",
			include_game_six: formData.include_game_six ? (t.packages.game_six?.name || "") : "",
			include_game_seven: formData.include_game_seven ? (t.packages.game_seven?.name || "") : "",
			include_cooler: formData.include_cooler ? (t.packages.add_ons.cooler?.name || "") : "[-]",
			include_chair: formData.include_chair ? (t.packages.add_ons.chair?.name || "") : "[-]",
			include_table: formData.include_table ? (t.packages.add_ons.table?.name || "") : "[-]",
			include_tent: formData.include_tent ? (t.packages.add_ons.tent?.name || "") : "[-]",
			include_cocktail_table: formData.include_cocktail_table ? (t.packages.add_ons.cocktail_table?.name || "") : "[-]",
			include_side_tent: formData.include_side_tent ? (t.packages.add_ons.side_tent?.name || "") : "[-]",
			include_cornhole_boards: formData.include_cornhole_boards ? (t.packages.add_ons.cornhole_boards?.name || "") : "[-]",
			include_premium_chair: formData.include_premium_chair ? (t.packages.add_ons.premium_chair?.name || "") : "[-]",
			cooler_amount: formData.cooler_amount ? (t.packages?.count + formData.cooler_amount || "") : "",
			chair_amount: formData.chair_amount ? (t.packages?.count + formData.chair_amount || "") : "",
			table_amount: formData.table_amount ? (t.packages?.count + formData.table_amount || "") : "",
			tent_amount: formData.tent_amount ? (t.packages?.count + formData.tent_amount || "") : "",
			cocktail_table_amount: formData.cocktail_table_amount ? (t.packages?.count + formData.cocktail_table_amount || "") : "",
			side_tent_amount: formData.side_tent_amount ? (t.packages?.count + formData.side_tent_amount || "") : "",
			cornhole_boards_amount: formData.cornhole_boards_amount ? (t.packages?.count + formData.cornhole_boards_amount || "") : "",
			premium_chair_amount: formData.premium_chair_amount ? (t.packages?.count + formData.premium_chair_amount || "") : "",
			lot_number: formData.lot_number,
			spot_number: formData.spot_number,
			additional_comment: formData.additional_comment,
			hear_about_us_question: formData.hear_about_us_question,
			//recaptcha: token,
		};

		emailjs.send(email.service_id, email.template_id, templateParams, email.user_id)
			.then((r) => {
				setFormData({
					...initialFormData,
					loading: false,
					alertmessage: "SUCCESS! Thank you for your message",
					variant: "success",
					show: true,
				});
			}, (e) => {
				setFormData({
					...formData,
					loading: false,
					alertmessage: `Failed to send! ${e.text}`,
					variant: "danger",
					show: true,
				});
				document.getElementsByClassName("co_alert")[0].scrollIntoView();
			}
			);
	};

	const handlePackageTypeChange = (packageType) => {
		setSelectedPackageType(packageType);
	};

	const toggleGames = (inclusion, selection, packageName) => {
		setFormData((prevData) => ({
			...prevData,
			[inclusion]: !prevData[inclusion],
			[selection]: prevData[inclusion] ? "" : t.packages[packageName].name,
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
		setFormData((prevData) => ({
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
	const handleCornholeBoards = () => toggleAddOns('include_cornhole_boards', 'selectedCornholeBoards');
	const handlePremiumChair = () => toggleAddOns('include_premium_chair', 'selectedPremiumChair');

	const handleScrollToForm = () => {
		document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });
	};

	const infographHandlers = { handlePackageTypeChange, handleScrollToForm }
	const gameHandlers = { selectedPackageType, handlePackageTypeChange, handleSeason, handleGameOne, handleGameTwo, handleGameThree, handleGameFour, handleGameFive, handleGameSix, handleGameSeven, formData };
	const addOnHandlers = { formData, handleCooler, handleChair, handleTable, handleTent, handleCocktailTable, handleSideTent, handleCornholeBoards, handlePremiumChair };

	return (
		<HelmetProvider>
			<Container>
				<TabLabel label={t.packages.select_title} />
				<Col>
					<PageTitle title={t.packages.select_title} />
					<Row>
						<div style={{ display: "flex", flexDirection: "row" }}>
							<PackageInfograph type="cub" {...infographHandlers} />
							<div style={{ width: "2.5rem" }} />
							<PackageInfograph type="vip" {...infographHandlers} />
						</div>
					</Row>
					<Row className="sec_sp" id="form-section">
						<Col className="align-items-center">
							<form onSubmit={handleSubmit} noValidate>
								<ContactForms formData={formData} handleChange={handleChange} style={{ background: "black" }} />
								<PackageSelection {...gameHandlers} style={{ background: "black" }} />
								<AddOnSelection {...addOnHandlers} style={{ background: "black" }} />
								<ParkingForms formData={formData} handleChange={handleChange} />
								<AdditionalInfoForms formData={formData} handleChange={handleChange} />
								<Row>
									<Col lg="12" className="form-group">
										<button className="btn ac_btn" type="submit" disabled={formData.loading}>
											{formData.loading ? "Sending..." : "Send"}
										</button>
									</Col>
								</Row>
								<div id="alert-section">
									{formData.show && (
										<Alert variant={formData.variant} onClose={() => setFormData({ ...formData, show: false })} dismissible>
											{formData.alertmessage}
										</Alert>
									)}
								</div>
							</form>
						</Col>
					</Row>
				</Col>
			</Container>
			<div className={formData.loading ? "loading-bar" : "d-none"}></div>
		</HelmetProvider>
	);
};

export default TailgatePackages;