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
import { calculatePrice, initialFormData } from "./TailgatePackages.utils";
import email from '@/config/email_test.json';
import t from '@/config/text.json';
import "./TailgatePackages.css";
import { AdditionalInfoForms } from "./additional-info-forms";

const TailgatePackages = ({ away }) => {
	const [formData, setFormData] = useState(initialFormData);
	const [selectedPackageType, setSelectedPackageType] = useState(away ? 'intruder' : 'cub');

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const isGameSelected = () => {
		return (
			formData.include_season ||
			formData.include_game_one ||
			formData.include_game_two ||
			formData.include_game_three ||
			formData.include_game_four ||
			formData.include_game_five ||
			formData.include_game_six ||
			formData.include_game_seven
		);
	};

	const validCountValues = (formData) => {
		const amounts = [
			formData.include_cooler ? formData.cooler_amount : null,
			formData.include_chair ? formData.chair_amount : null,
			formData.include_table ? formData.table_amount : null,
			formData.include_tent ? formData.tent_amount : null,
			formData.include_cocktail_table ? formData.cocktail_table_amount : null,
			formData.include_side_tent ? formData.side_tent_amount : null,
			formData.include_cornhole_boards ? formData.cornhole_boards_amount : null,
			formData.include_premium_chair ? formData.premium_chair_amount : null
		];
	
		// Check that all amounts are greater than 0
		return amounts.every(amount => amount === null || amount > 0);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const requiredFields = ['first_name', 'last_name', 'email', 'phone_number'];
		const missingFields = requiredFields.filter(field => !formData[field]);

		if (missingFields.length > 0 || !isGameSelected()) {
			setFormData({
				...formData,
				alertmessage: "Please fill out all required fields.",
				variant: "danger",
				show: true,
			});

			const alertElement = document.getElementsByClassName("co_alert")[0];
			if (alertElement) {
				alertElement.scrollIntoView({ behavior: 'smooth' });
			}

			return;
		}

		if (!validCountValues(formData)) {
			setFormData({
				...formData,
				alertmessage: "Add on amounts must be a number greater than 0",
				variant: "danger",
				show: true,
			});

			const alertElement = document.getElementsByClassName("co_alert")[0];
			if (alertElement) {
				alertElement.scrollIntoView({ behavior: 'smooth' });
			}

			return;
		}

		setFormData({ ...formData, loading: true });

		const templateParams = {
			// Contact Info
			first_name: formData.first_name,
			last_name: formData.last_name,
			email: formData.email,
			phone_number: formData.phone_number,
			package_type: selectedPackageType,

			// Games
			include_season: formData.include_season ? (t.packages.season?.name || "") : "",
			include_game_one: formData.include_game_one ? (t.packages.game_one?.name || "") : "",
			include_game_two: formData.include_game_two ? (t.packages.game_two?.name || "") : "",
			include_game_three: formData.include_game_three ? (t.packages.game_three?.name || "") : "",
			include_game_four: formData.include_game_four ? (t.packages.game_four?.name || "") : "",
			include_game_five: formData.include_game_five ? (t.packages.game_five?.name || "") : "",
			include_game_six: formData.include_game_six ? (t.packages.game_six?.name || "") : "",
			include_game_seven: formData.include_game_seven ? (t.packages.game_seven?.name || "") : "",

			// Add Ons
			include_cooler: formData.include_cooler ? (t.packages.add_ons.cooler?.name || "") : "",
			include_chair: formData.include_chair ? (t.packages.add_ons.chair?.name || "") : "",
			include_table: formData.include_table ? (t.packages.add_ons.table?.name || "") : "",
			include_tent: formData.include_tent ? (t.packages.add_ons.tent?.name || "") : "",
			include_cocktail_table: formData.include_cocktail_table ? (t.packages.add_ons.cocktail_table?.name || "") : "",
			include_side_tent: formData.include_side_tent ? (t.packages.add_ons.side_tent?.name || "") : "",
			include_cornhole_boards: formData.include_cornhole_boards ? (t.packages.add_ons.cornhole_boards?.name || "") : "",
			include_premium_chair: formData.include_premium_chair ? (t.packages.add_ons.premium_chair?.name || "") : "",

			// Add On Amounts
			cooler_amount: formData.include_cooler ? formData.cooler_amount : "",
			chair_amount: formData.include_chair ? formData.chair_amount : "",
			table_amount: formData.include_table ? formData.table_amount : "",
			tent_amount: formData.include_tent ? formData.tent_amount : "",
			cocktail_table_amount: formData.include_cocktail_table ? formData.cocktail_table_amount : "",
			side_tent_amount: formData.include_side_tent ? formData.side_tent_amount : "",
			cornhole_boards_amount: formData.include_cornhole_boards ? formData.cornhole_boards_amount : "",
			premium_chair_amount: formData.include_premium_chair ? formData.premium_chair_amount : "",

			// Additional Info
			lot_number: formData.lot_number,
			spot_number: formData.spot_number,
			additional_comment: formData.additional_comment,
			hear_about_us_question: formData.hear_about_us_question,
			total_price: calculatePrice(selectedPackageType, formData)
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

				const alertElement = document.getElementsByClassName("co_alert")[0];
				if (alertElement) {
					alertElement.scrollIntoView({ behavior: 'smooth' });
				}
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

	const handleAmountChange = (amountKey, value) => {
		setFormData((prevData) => ({
			...prevData,
			[amountKey]: value,
		}));
	};

	const handleCoolerAmount = (value) => handleAmountChange('cooler_amount', value);
	const handleChairAmount = (value) => handleAmountChange('chair_amount', value);
	const handlePremiumChairAmount = (value) => handleAmountChange('premium_chair_amount', value);
	const handleTableAmount = (value) => handleAmountChange('table_amount', value);
	const handleTentAmount = (value) => handleAmountChange('tent_amount', value);
	const handleCocktailTableAmount = (value) => handleAmountChange('cocktail_table_amount', value);
	const handleSideTentAmount = (value) => handleAmountChange('side_tent_amount', value);
	const handleCornholeBoardsAmount = (value) => handleAmountChange('cornhole_boards_amount', value);

	const handleScrollToForm = () => {
		document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });
	};

	const infographHandlers = { handlePackageTypeChange, handleScrollToForm }
	const gameHandlers = { away, selectedPackageType, handlePackageTypeChange, handleSeason, handleGameOne, handleGameTwo, handleGameThree, handleGameFour, handleGameFive, handleGameSix, handleGameSeven, formData };
	const addOnHandlers = {
		formData,
		handleCooler,
		handleChair,
		handleTable,
		handleTent,
		handleCocktailTable,
		handleSideTent,
		handleCornholeBoards,
		handlePremiumChair,
		handleCoolerAmount,
		handleChairAmount,
		handlePremiumChairAmount,
		handleTableAmount,
		handleTentAmount,
		handleCocktailTableAmount,
		handleSideTentAmount,
		handleCornholeBoardsAmount,
	};

	return (
		<HelmetProvider>
			<Container>
				<TabLabel label={away ? t.packages.away.select_title : t.packages.select_title} />
				<Col>
					<PageTitle title={away ? t.packages.away.select_title : t.packages.select_title} />
					<Row>
						<div className="stack-boxes">
							<PackageInfograph type={away ? "intruder" : "cub"} {...infographHandlers} />
							<PackageInfograph type={away ? "ultimate" : "vip"} {...infographHandlers} />
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
								<div id="alert-section" className="alert-box">
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