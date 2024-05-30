// components/RequestPackage/RequestPackage.js
import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Form from './form';
import PackageSelection from './package-selection';
import AddOnSelection from './add-on-selection';
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

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

  const [selectedPackageType, setSelectedPackageType] = useState('cub');

  const handlePackageTypeChange = (packageType) => {
    setSelectedPackageType(packageType);
  };

  const handleSeason = () => {
    setFormdata({
      ...formData,
      include_season: !formData.include_season,
      selectedSeason: formData.include_season ? "" : text.packages.season.name,
    });
  };

  const handleGameOne = () => {
    setFormdata({
      ...formData,
      include_game_one: !formData.include_game_one,
      selectedGameOne: formData.include_game_one ? "" : text.packages.game_one.name,
    });
  };

  const handleGameTwo = () => {
    setFormdata({
      ...formData,
      include_game_two: !formData.include_game_two,
      selectedGameTwo: formData.include_game_two ? "" : text.packages.game_two.name,
    });
  };

  const handleGameThree = () => {
    setFormdata({
      ...formData,
      include_game_three: !formData.include_game_three,
      selectedGameThree: formData.include_game_three ? "" : text.packages.game_three.name,
    });
  };

  const handleGameFour = () => {
    setFormdata({
      ...formData,
      include_game_four: !formData.include_game_four,
      selectedGameFour: formData.include_game_four ? "" : text.packages.game_four.name,
    });
  };

  const handleGameFive = () => {
    setFormdata({
      ...formData,
      include_game_five: !formData.include_game_five,
      selectedGameFive: formData.include_game_five ? "" : text.packages.game_five.name,
    });
  };

  const handleGameSix = () => {
    setFormdata({
      ...formData,
      include_game_six: !formData.include_game_six,
      selectedGameSix: formData.include_game_six ? "" : text.packages.game_six.name,
    });
  };

  const handleGameSeven = () => {
    setFormdata({
      ...formData,
      include_game_seven: !formData.include_game_seven,
      selectedGameSeven: formData.include_game_seven ? "" : text.packages.game_seven.name,
    });
  };

  const handleCooler = (e) => {
    setFormdata({
      ...formData,
      include_cooler: !formData.include_cooler,
      selectedCooler: formData.include_cooler ? "" : formData.include_cooler,
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
      selectedChair: formData.include_chair ? "" : formData.include_chair,
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
      selectedTable: formData.include_table ? "" : formData.include_table,
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
      selectedTent: formData.include_tent ? "" : formData.include_tent,
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
      selectedCocktailTable: formData.include_cocktail_table ? "" : formData.include_cocktail_table,
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
      selectedSideTent: formData.include_side_tent ? "" : formData.include_side_tent,
    });
  };

  const handleSideTentAmount = (e) => {
    setFormdata({
      ...formData,
      side_tent_amount: e.target.value,
    });
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
                className={`rounded-0 co_alert ${formData.show ? "d-block" : "d-none"}`}
                onClose={() => setFormdata({ ...formData, show: false })}
                dismissible
              >
                <p className="my-0">{formData.alertmessage}</p>
              </Alert>
            </Col>
            <Col className="align-items-center">
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
              />
              <AddOnSelection
                formData={formData}
                handleCooler={handleCooler}
                handleCoolerAmount={handleCoolerAmount}
                handleChair={handleChair}
                handleChairAmount={handleChairAmount}
                handleTable={handleTable}
                handleTableAmount={handleTableAmount}
                handleTent={handleTent}
                handleTentAmount={handleTentAmount}
                handleCocktailTable={handleCocktailTable}
                handleCocktailTableAmount={handleCocktailTableAmount}
                handleSideTent={handleSideTent}
                handleSideTentAmount={handleSideTentAmount}
              />
              <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            </Col>
          </Row>
        </Col>
      </Container>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};