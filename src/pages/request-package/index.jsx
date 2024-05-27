import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";
import email from '../../config/email.json';
import text from '../../config/text.json';

export const RequestPackage = () => {
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

	const handlePackageChange = (e) => {
		setFormdata({
			...formData,
			package_game: e.target.value,
		});
	};

	const handleAddOnChange = (e) => {
		setFormdata({
			...formData,
			selected_add_on: e.target.value,
		});
	};

	const handleSeason = () => {
		setFormdata({
			...formData,
			include_season: !formData.include_season,
			selectedSeason: formData.include_season ? "" : text.packages.season.name
		});
	};

	const handleGameOne = () => {
		setFormdata({
			...formData,
			include_game_one: !formData.include_game_one,
			selectedGameOne: formData.include_game_one ? "" : text.packages.game_one.name
		});
	};

	const handleGameTwo = () => {
		setFormdata({
			...formData,
			include_game_two: !formData.include_game_two,
			selectedGameTwo: formData.include_game_two ? "" : text.packages.game_two.name
		});
	};

	const handleGameThree = () => {
		setFormdata({
			...formData,
			include_game_three: !formData.include_game_three,
			selectedGameThree: formData.include_game_three ? "" : text.packages.game_three.name
		});
	};

	const handleGameFour = () => {
		setFormdata({
			...formData,
			include_game_four: !formData.include_game_four,
			selectedGameFour: formData.include_game_four ? "" : text.packages.game_four.name
		});
	};

	const handleGameFive = () => {
		setFormdata({
			...formData,
			include_game_five: !formData.include_game_five,
			selectedGameFive: formData.include_game_five ? "" : text.packages.game_five.name
		});
	};

	const handleGameSix = () => {
		setFormdata({
			...formData,
			include_game_six: !formData.include_game_six,
			selectedGameSix: formData.include_game_six ? "" : text.packages.game_six.name
		});
	};

	const handleGameSeven = () => {
		setFormdata({
			...formData,
			include_game_seven: !formData.include_game_seven,
			selectedGameSeven: formData.include_game_seven ? "" : text.packages.game_seven.name
		});
	};

	const handleCooler = (e) => {
		setFormdata({
			...formData,
			include_cooler: !formData.include_cooler,
			selectedCooler: formData.include_cooler ? "" : formData.include_cooler
		});
	};

	const handleCoolerAmount = (e) => {
		setFormdata({
			...formData,
			cooler_amount: e.target.value,
		});
	};

	const handleChair = (e) => {
		setFormdata({
			...formData,
			include_chair: !formData.include_chair,
			selectedChair: formData.include_chair ? "" : formData.include_chair
		});
	};

	const handleChairAmount = (e) => {
		setFormdata({
			...formData,
			chair_amount: e.target.value,
		});
	};

	const handleTable = (e) => {
		setFormdata({
			...formData,
			include_table: !formData.include_table,
			selectedTable: formData.include_table ? "" : formData.include_table
		});
	};

	const handleTableAmount = (e) => {
		setFormdata({
			...formData,
			table_amount: e.target.value,
		});
	};

	const handleTent = (e) => {
		setFormdata({
			...formData,
			include_tent: !formData.include_tent,
			selectedTent: formData.include_tent ? "" : formData.include_tent
		});
	};

	const handleTentAmount = (e) => {
		setFormdata({
			...formData,
			tent_amount: e.target.value,
		});
	};

	const handleCocktailTable = (e) => {
		setFormdata({
			...formData,
			include_cocktail_table: !formData.include_cocktail_table,
			selectedCocktailTable: formData.include_cocktail_table ? "" : formData.include_cocktail_table
		});
	};

	const handleCocktailTableAmount = (e) => {
		setFormdata({
			...formData,
			cocktail_table_amount: e.target.value,
		});
	};

	const handleSideTent = (e) => {
		setFormdata({
			...formData,
			include_side_tent: !formData.include_side_tent,
			selectedSideTent: formData.include_side_tent ? "" : formData.include_side_tent
		});
	};

	const handleSideTentAmount = (e) => {
		setFormdata({
			...formData,
			side_tent_amount: e.target.value,
		});
	};


	const [selectedPackageType, setSelectedPackageType] = useState('cub');

	const handlePackageTypeChange = (packageType) => {
		setSelectedPackageType(packageType);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormdata({ loading: true });


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
			hear_about_us_question: formData.hear_about_us_question
		};

		emailjs
			.send(
				email.service_id,
				email.template_id,
				templateParams,
				email.user_id
			)
			.then(
				(result) => {
					console.log(result.text);
					setFormdata({
						loading: false,
						alertmessage: "SUCCESS! ,Thankyou for your messege",
						variant: "success",
						show: true,
					});
				},
				(error) => {
					console.log(error.text);
					setFormdata({
						alertmessage: `Faild to send!,${error.text}`,
						variant: "danger",
						show: true,
					});
					document.getElementsByClassName("co_alert")[0].scrollIntoView();
				}
			);
	};

	const handleChange = (e) => {
		setFormdata({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked); // Toggle the isChecked state
	};

	const [isLotChecked, setIsLotChecked] = useState(false);

	const handleLotCheckboxChange = () => {
		setIsLotChecked(!isLotChecked); // Toggle the isChecked state
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
					<Row className="sec_sp">
						<Col lg="12">
							<Alert
								variant={formData.variant}
								className={`rounded-0 co_alert ${formData.show ? "d-block" : "d-none"
									}`}
								onClose={() => setFormdata({ show: false })}
								dismissible
							>
								<p className="my-0">{formData.alertmessage}</p>
							</Alert>
						</Col>
						<Col className="align-items-center">
							<form onSubmit={handleSubmit} className="contact__form w-100">
								<Row>
									<div className='outer_package_select'>
										<div
											className={`selectable-box orange-border ${selectedPackageType === 'cub' ? 'selected-orange' : ''}`}
											onClick={() => handlePackageTypeChange('cub')}
										>
											{text.packages.form.cub}
										</div>
										<div
											className={`selectable-box purple-border ${selectedPackageType === 'vip' ? 'selected-purple' : ''}`}
											onClick={() => handlePackageTypeChange('vip')}
										>
											{text.packages.form.vip}
										</div>
									</div>
									<Col className="form-group">
										<label htmlFor={text.packages.id.first_name}>{text.packages.form.first_name} <span style={{ color: 'red' }}>*</span></label>
										<input
											className="form-control"
											id={text.packages.id.first_name}
											name={text.packages.id.first_name}
											value={formData.first_name || ""}
											type="text"
											required
											onChange={handleChange}
										/>
									</Col>
									<Col lg="6" className="form-group">
										<label htmlFor={text.packages.id.last_name}>{text.packages.form.last_name} <span style={{ color: 'red' }}>*</span></label>
										<input
											className="form-control"
											id={text.packages.id.last_name}
											name={text.packages.id.last_name}
											value={formData.last_name || ""}
											type="text"
											required
											onChange={handleChange}
										/>
									</Col>
									<Col lg="6" className="form-group">
										<label htmlFor={text.packages.id.email}>{text.packages.form.email} <span style={{ color: 'red' }}>*</span></label>
										<input
											className="form-control"
											id={text.packages.id.email}
											name={text.packages.id.email}
											value={formData.email || ""}
											type="text"
											required
											onChange={handleChange}
										/>
									</Col>
									<Col lg="6" className="form-group">
										<label htmlFor={text.packages.id.phone_number}>{text.packages.form.phone_number} <span style={{ color: 'red' }}>*</span></label>
										<input
											className="form-control rounded-0"
											id={text.packages.id.phone_number}
											name={text.packages.id.phone_number}
											type="tel"
											value={formData.phone_number || ""}
											required
											onChange={handleChange}
										/>
									</Col>
									<div>
										Click to select your Tailgate Package below:
										<span style={{ color: 'red' }}>*</span>
									</div>
									<div class="container">

										{selectedPackageType === 'cub' ?
											<>
												<div className='season_select' >
													<div
														className={`cub-box full-box ${formData.include_season ? 'selected-orange' : ''}`}
														onClick={handleSeason}
													>
														<div>
															{text.packages.season.name} - ${text.packages.season.price_cub}
														</div>
													</div>
												</div>
												<div className="game_select" >
													<div
														className={`cub-box ${formData.include_game_one ? 'selected-orange' : ''}`}
														onClick={handleGameOne}
													>
														<div>
															{text.packages.game_one.date} {text.packages.game_one.name} - ${text.packages.game_one.price_cub}
														</div>
													</div>
													<div
														className={`cub-box ${formData.include_game_two ? 'selected-orange' : ''}`}
														onClick={handleGameTwo}
													>
														<div>
															{text.packages.game_two.date} {text.packages.game_two.name} - ${text.packages.game_two.price_cub}
														</div>
													</div>
													<div
														className={`cub-box ${formData.include_game_three ? 'selected-orange' : ''}`}
														onClick={handleGameThree}
													>
														<div>
															{text.packages.game_three.date} {text.packages.game_three.name} - ${text.packages.game_three.price_cub}
														</div>
													</div>
													<div
														className={`cub-box ${formData.include_game_four ? 'selected-orange' : ''}`}
														onClick={handleGameFour}
													>
														<div>
															{text.packages.game_four.date} {text.packages.game_four.name} - ${text.packages.game_four.price_cub}
														</div>
													</div>
													<div
														className={`cub-box ${formData.include_game_five ? 'selected-orange' : ''}`}
														onClick={handleGameFive}
													>
														<div>
															{text.packages.game_five.date} {text.packages.game_five.name} - ${text.packages.game_five.price_cub}
														</div>
													</div>
													<div
														className={`cub-box ${formData.include_game_six ? 'selected-orange' : ''}`}
														onClick={handleGameSix}
													>
														<div>
															{text.packages.game_six.date} {text.packages.game_six.name} - ${text.packages.game_six.price_cub}
														</div>
													</div>
													<div
														className={`cub-box ${formData.include_game_seven ? 'selected-orange' : ''}`}
														onClick={handleGameSeven}
													>
														<div>
															{text.packages.game_seven.date} {text.packages.game_seven.name} - ${text.packages.game_seven.price_cub}
														</div>
													</div>
												</div>
											</>
											:
											<>
												<div class="season_select">
													<div
														className={`vip-box full-box ${formData.include_season ? 'selected-purple' : ''}`}
														onClick={handleSeason}
													>
														<div>
															{text.packages.season.name} - ${text.packages.season.price_vip}
														</div>
													</div>
												</div>
												<div className="game_select">
													<div
														className={`vip-box ${formData.include_game_one ? 'selected-purple' : ''}`}
														onClick={handleGameOne}
													>
														<div>
															{text.packages.game_one.date} {text.packages.game_one.name} - ${text.packages.game_one.price_vip}
														</div>
													</div>
													<div
														className={`vip-box ${formData.include_game_two ? 'selected-purple' : ''}`}
														onClick={handleGameTwo}
													>
														<div>
															{text.packages.game_two.date} {text.packages.game_two.name} - ${text.packages.game_two.price_vip}
														</div>
													</div>
													<div
														className={`vip-box ${formData.include_game_three ? 'selected-purple' : ''}`}
														onClick={handleGameThree}
													>
														<div>
															{text.packages.game_three.date} {text.packages.game_three.name} - ${text.packages.game_three.price_vip}
														</div>
													</div>
													<div
														className={`vip-box ${formData.include_game_four ? 'selected-purple' : ''}`}
														onClick={handleGameFour}
													>
														<div>
															{text.packages.game_four.date} {text.packages.game_four.name} - ${text.packages.game_four.price_vip}
														</div>
													</div>
													<div
														className={`vip-box ${formData.include_game_five ? 'selected-purple' : ''}`}
														onClick={handleGameFive}
													>
														<div>
															{text.packages.game_five.date} {text.packages.game_five.name} - ${text.packages.game_five.price_vip}
														</div>
													</div>
													<div
														className={`vip-box ${formData.include_game_six ? 'selected-purple' : ''}`}
														onClick={handleGameSix}
													>
														<div>
															{text.packages.game_six.date} {text.packages.game_six.name} - ${text.packages.game_six.price_vip}
														</div>
													</div>
													<div
														className={`vip-box ${formData.include_game_seven ? 'selected-purple' : ''}`}
														onClick={handleGameSeven}
													>
														<div>
															{text.packages.game_seven.date} {text.packages.game_seven.name} - ${text.packages.game_seven.price_vip}
														</div>
													</div>
												</div>
											</>
										}
									</div>


									<div>Select your add-ons:</div>
									<div className="add_on_container">
										<div className="add_on_option">
											<div
												className={`cub-box add_on_box ${formData.include_cooler ? 'selected-orange' : ''}`}
												onClick={handleCooler}
											>
												<div>
													{text.packages.add_ons.cooler.name} - ${text.packages.add_ons.cooler.price}{text.packages.form.per_game}
												</div>
											</div>
											{formData.include_cooler && (
												<div className="countbox">
													<input
														id={`${text.packages.add_ons.cooler.id}_amount`}
														className="form-control"
														type="number"
														placeholder="Enter amount"
														value={formData.cooler_amount}
														onChange={handleCoolerAmount}
													/>
												</div>
											)}

										</div>
										<div className="add_on_option">
											<div
												className={`cub-box add_on_box ${formData.include_chair ? 'selected-orange' : ''}`}
												onClick={handleChair}
											>
												<div>
													{text.packages.add_ons.chair.name} - ${text.packages.add_ons.chair.price}{text.packages.form.per_game}
												</div>
											</div>
											{formData.include_chair && (
												<div className="countbox">
													<input
														id={`${text.packages.add_ons.chair.id}_amount`}
														className="form-control"
														type="number"
														placeholder="Enter amount"
														value={formData.chair_amount}
														onChange={handleChairAmount}
													/>
												</div>
											)}
										</div>
										<div className="add_on_option">
											<div
												className={`cub-box add_on_box ${formData.include_table ? 'selected-orange' : ''}`}
												onClick={handleTable}
											>
												<div>
													{text.packages.add_ons.table.name} - ${text.packages.add_ons.table.price}{text.packages.form.per_game}
												</div>
											</div>
											{formData.include_table && (
												<div className="countbox">
													<input
														id={`${text.packages.add_ons.table.id}_amount`}
														className="form-control"
														type="number"
														placeholder="Enter amount"
														value={formData.table_amount}
														onChange={handleTableAmount}
													/>
												</div>
											)}
										</div>
										<div className="add_on_option">
											<div
												className={`cub-box add_on_box ${formData.include_tent ? 'selected-orange' : ''}`}
												onClick={handleTent}
											>
												<div>
													{text.packages.add_ons.tent.name} - ${text.packages.add_ons.tent.price}{text.packages.form.per_game}
												</div>
											</div>
											{formData.include_tent && (
												<div className="countbox">
													<input
														id={`${text.packages.add_ons.tent.id}_amount`}
														className="form-control"
														type="number"
														placeholder="Enter amount"
														value={formData.tent_amount}
														onChange={handleTentAmount}
													/>
												</div>
											)}
										</div>
										<div className="add_on_option">
											<div
												className={`cub-box add_on_box ${formData.include_cocktail_table ? 'selected-orange' : ''}`}
												onClick={handleCocktailTable}
											>
												<div>
													{text.packages.add_ons.cocktail_table.name} - ${text.packages.add_ons.cocktail_table.price}{text.packages.form.per_game}
												</div>
											</div>
											{formData.include_cocktail_table && (
												<div className="countbox">
													<input
														id={`${text.packages.add_ons.cocktail_table.id}_amount`}
														className="form-control"
														type="number"
														placeholder="Enter amount"
														value={formData.cocktail_table_amount}
														onChange={handleCocktailTableAmount}
													/>
												</div>
											)}
										</div>
										<div className="add_on_option">
											<div
												className={`cub-box add_on_box ${formData.include_side_tent ? 'selected-orange' : ''}`}
												onClick={handleSideTent}
											>
												<div>
													{text.packages.add_ons.side_tent.name} - ${text.packages.add_ons.side_tent.price}{text.packages.form.per_game}
												</div>
											</div>
											{formData.include_side_tent && (
												<div className="countbox">
													<input
														id={`${text.packages.add_ons.side_tent.id}_amount`}
														className="form-control"
														type="number"
														placeholder="Enter amount"
														value={formData.side_tent_amount}
														onChange={handleSideTentAmount}
													/>
												</div>
											)}
										</div>
									</div>

								</Row>
								<Row>
									<div className="space">If you have purchased a parking pass, enter your lot & space numbers below: </div>
									<Col lg="6" className="form-group">
										<label htmlFor={text.packages.id.lot_number}>{text.packages.form.lot_number} </label>
										<input
											className="form-control"
											id={text.packages.id.lot_number}
											name={text.packages.id.lot_number}
											value={formData.lot_number || ""}
											type="text"
											onChange={handleChange}
										/>
									</Col>
									<Col lg="6" className="form-group">
										<label htmlFor={text.packages.id.spot_number}>{text.packages.form.spot_number} </label>
										<input
											className="form-control"
											id={text.packages.id.spot_number}
											name={text.packages.id.spot_number}
											value={formData.spot_number || ""}
											type="text"
											onChange={handleChange}
										/>
									</Col>
								</Row>
								<div className="space">
									<label htmlFor={text.packages.id.additional_comment}>{text.packages.form.additional_comment} </label>
									<textarea
										className="form-control rounded-0"
										id={text.packages.id.additional_comment}
										name={text.packages.id.additional_comment}
										rows="5"
										value={formData.additional_comment}
										onChange={handleChange}
									></textarea>
								</div>
								<div className="space">
									<label htmlFor={text.packages.id.hear_about_us_question}>{text.packages.form.hear_about_us_question} </label>
									<textarea
										className="form-control rounded-0"
										id={text.packages.id.hear_about_us_question}
										name={text.packages.id.hear_about_us_question}
										rows="5"
										value={formData.hear_about_us_question}
										onChange={handleChange}
									></textarea>
								</div>
								<br />
								<p style={{ marginBottom: '5px' }}>Note: Fields marked with <span style={{ color: 'red' }}>*</span> are required.</p>
								<Row>
									<Col lg="12" className="form-group">
										<button className="btn ac_btn" type="submit">
											{formData.loading ? "Sending..." : "Send"}
										</button>
									</Col>
								</Row>
							</form>
						</Col>
					</Row>
				</Col>
			</Container>
			<div className={formData.loading ? "loading-bar" : "d-none"}></div>
		</HelmetProvider>
	);
};