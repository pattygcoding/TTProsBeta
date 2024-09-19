import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';
import { HelmetProvider } from 'react-helmet-async';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { ContactForms } from './contact-forms';
import { PackageSelection } from './package-selection';
import { PackageInfograph } from './package-infograph';
import { ParkingForms } from './parking-forms';
import { AddOnSelection } from './add-on-selection';
import { TabLabel } from '@/components/tab-label';
import { PageTitle } from '@/components/page-title';
import { calculatePrice, initialFormData, isGameSelected, validCountValues } from './TailgatePackages.utils';
import email from '@/config/email_test.json';
import t from '@/config/text.json';
import './TailgatePackages.css';
import { AdditionalInfoForms } from './additional-info-forms';

const TailgatePackages = ({ away }) => {
    const [formData, setFormData] = useState(initialFormData);
    const [selectedPackageType, setSelectedPackageType] = useState(away ? 'intruder' : 'cub');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const requiredFields = ['first_name', 'last_name', 'email', 'phone_number'];
        const missingFields = requiredFields.filter((field) => !formData[field]);

        if (missingFields.length > 0 || !isGameSelected(formData)) {
            setFormData({
                ...formData,
                alertmessage: 'Please fill out all required fields.',
                variant: 'danger',
                show: true,
            });

            const alertElement = document.getElementsByClassName('co_alert')[0];
            if (alertElement) {
                alertElement.scrollIntoView({ behavior: 'smooth' });
            }

            return;
        }

        if (!validCountValues(formData)) {
            setFormData({
                ...formData,
                alertmessage: 'Add-on amounts must be a number greater than 0',
                variant: 'danger',
                show: true,
            });

            const alertElement = document.getElementsByClassName('co_alert')[0];
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
            include_season: formData.include_season ? t.packages.season?.name || '' : '',
            include_game_one: formData.include_game_one ? t.packages.game_one?.name || '' : '',
            include_game_two: formData.include_game_two ? t.packages.game_two?.name || '' : '',
            include_game_three: formData.include_game_three ? t.packages.game_three?.name || '' : '',
            include_game_four: formData.include_game_four ? t.packages.game_four?.name || '' : '',
            include_game_five: formData.include_game_five ? t.packages.game_five?.name || '' : '',
            include_game_six: formData.include_game_six ? t.packages.game_six?.name || '' : '',
            include_game_seven: formData.include_game_seven ? t.packages.game_seven?.name || '' : '',

            // Add-Ons
            include_cooler: formData.include_cooler ? t.packages.add_ons.cooler?.name || '' : '',
            include_chair: formData.include_chair ? t.packages.add_ons.chair?.name || '' : '',
            include_table: formData.include_table ? t.packages.add_ons.table?.name || '' : '',
            include_tent: formData.include_tent ? t.packages.add_ons.tent?.name || '' : '',
            include_cocktail_table: formData.include_cocktail_table ? t.packages.add_ons.cocktail_table?.name || '' : '',
            include_side_tent: formData.include_side_tent ? t.packages.add_ons.side_tent?.name || '' : '',
            include_cornhole_boards: formData.include_cornhole_boards ? t.packages.add_ons.cornhole_boards?.name || '' : '',
            include_premium_chair: formData.include_premium_chair ? t.packages.add_ons.premium_chair?.name || '' : '',

            // Add-On Amounts
            cooler_amount: formData.include_cooler ? formData.cooler_amount : '',
            chair_amount: formData.include_chair ? formData.chair_amount : '',
            table_amount: formData.include_table ? formData.table_amount : '',
            tent_amount: formData.include_tent ? formData.tent_amount : '',
            cocktail_table_amount: formData.include_cocktail_table ? formData.cocktail_table_amount : '',
            side_tent_amount: formData.include_side_tent ? formData.side_tent_amount : '',
            cornhole_boards_amount: formData.include_cornhole_boards ? formData.cornhole_boards_amount : '',
            premium_chair_amount: formData.include_premium_chair ? formData.premium_chair_amount : '',

            // Additional Info
            lot_number: formData.lot_number,
            spot_number: formData.spot_number,
            additional_comment: formData.additional_comment,
            hear_about_us_question: formData.hear_about_us_question,
            total_price: calculatePrice(selectedPackageType, formData),
        };

        emailjs.send(email.service_id, email.template_id, templateParams, email.user_id).then(
            (r) => {
                setFormData({
                    ...initialFormData,
                    loading: false,
                    alertmessage: 'SUCCESS! Thank you for your message',
                    variant: 'success',
                    show: true,
                });
            },
            (e) => {
                setFormData({
                    ...formData,
                    loading: false,
                    alertmessage: `Failed to send! ${e.text}`,
                    variant: 'danger',
                    show: true,
                });

                const alertElement = document.getElementsByClassName('co_alert')[0];
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
            [selection]: prevData[inclusion] ? '' : t.packages[packageName].name,
        }));
    };

    const handle_season = () => toggleGames('include_season', 'selected_season', 'season');
    const handle_game_one = () => toggleGames('include_game_one', 'selected_game_one', 'game_one');
    const handle_game_two = () => toggleGames('include_game_two', 'selected_game_two', 'game_two');
    const handle_game_three = () => toggleGames('include_game_three', 'selected_game_three', 'game_three');
    const handle_game_four = () => toggleGames('include_game_four', 'selected_game_four', 'game_four');
    const handle_game_five = () => toggleGames('include_game_five', 'selected_game_five', 'game_five');
    const handle_game_six = () => toggleGames('include_game_six', 'selected_game_six', 'game_six');
    const handle_game_seven = () => toggleGames('include_game_seven', 'selected_game_seven', 'game_seven');


    const toggleAddOns = (inclusion, selection) => {
        setFormData((prevData) => ({
            ...prevData,
            [inclusion]: !prevData[inclusion],
            [selection]: prevData[inclusion] ? '' : prevData[inclusion],
        }));
    };

    const handle_cooler = () => toggleAddOns('include_cooler', 'selected_cooler');
    const handle_chair = () => toggleAddOns('include_chair', 'selected_chair');
    const handle_table = () => toggleAddOns('include_table', 'selected_table');
    const handle_tent = () => toggleAddOns('include_tent', 'selected_tent');
    const handle_cocktail_table = () => toggleAddOns('include_cocktail_table', 'selected_cocktail_table');
    const handle_side_tent = () => toggleAddOns('include_side_tent', 'selected_side_tent');
    const handle_cornhole_boards = () => toggleAddOns('include_cornhole_boards', 'selected_cornhole_boards');
    const handle_premium_chair = () => toggleAddOns('include_premium_chair', 'selected_premium_chair');


    const toggleAddOnAmounts = (amountKey, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [amountKey]: value,
        }));
    };

    const handle_cooler_amount = (value) => toggleAddOnAmounts('cooler_amount', value);
    const handle_chair_amount = (value) => toggleAddOnAmounts('chair_amount', value);
    const handle_premium_chair_amount = (value) => toggleAddOnAmounts('premium_chair_amount', value);
    const handle_table_amount = (value) => toggleAddOnAmounts('table_amount', value);
    const handle_tent_amount = (value) => toggleAddOnAmounts('tent_amount', value);
    const handle_cocktail_table_amount = (value) => toggleAddOnAmounts('cocktail_table_amount', value);
    const handle_side_tent_amount = (value) => toggleAddOnAmounts('side_tent_amount', value);
    const handle_cornhole_boards_amount = (value) => toggleAddOnAmounts('cornhole_boards_amount', value);

    const handleScrollToForm = () => {
        document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });
    };

    const infographHandlers = { handlePackageTypeChange, handleScrollToForm };
    const gameHandlers = {
        formData,
        away,
        selectedPackageType,
        handlePackageTypeChange,
        handle_season,
        handle_game_one,
        handle_game_two,
        handle_game_three,
        handle_game_four,
        handle_game_five,
        handle_game_six,
        handle_game_seven,

    };
    const addOnHandlers = {
        formData,
        handle_cooler,
        handle_chair,
        handle_table,
        handle_tent,
        handle_cocktail_table,
        handle_side_tent,
        handle_cornhole_boards,
        handle_premium_chair,
        handle_cooler_amount,
        handle_chair_amount,
        handle_premium_chair_amount,
        handle_table_amount,
        handle_tent_amount,
        handle_cocktail_table_amount,
        handle_side_tent_amount,
        handle_cornhole_boards_amount,
    };

    // Compute form validity
    const requiredFields = ['first_name', 'last_name', 'email', 'phone_number'];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    const isFormValid =
        missingFields.length === 0 && isGameSelected(formData) && validCountValues(formData);

    return (
        <HelmetProvider>
            <Container>
                <TabLabel label={away ? t.packages.away.select_title : t.packages.select_title} />
                <Col>
                    <PageTitle title={away ? t.packages.away.select_title : t.packages.select_title} />
                    <Row>
                        <div className="stack-boxes">
                            <PackageInfograph
                                type={away ? 'intruder' : 'cub'}
                                {...infographHandlers}
                            />
                            <PackageInfograph
                                type={away ? 'ultimate' : 'vip'}
                                {...infographHandlers}
                            />
                        </div>
                    </Row>
                    <Row className="sec_sp" id="form-section">
                        <Col className="align-items-center">
                            <form onSubmit={handleSubmit} noValidate>
                                <ContactForms
                                    formData={formData}
                                    handleChange={handleChange}
                                    style={{ background: 'black' }}
                                />
                                <PackageSelection {...gameHandlers} style={{ background: 'black' }} />
                                <AddOnSelection {...addOnHandlers} style={{ background: 'black' }} />
                                <ParkingForms formData={formData} handleChange={handleChange} />
                                <AdditionalInfoForms formData={formData} handleChange={handleChange} />
                                <Row>
                                    <Col lg="12" className="form-group">
                                        <button
                                            className="btn ac_btn"
                                            type="submit"
                                            disabled={formData.loading || !isFormValid}
                                        >
                                            {formData.loading ? 'Sending...' : 'Send'}
                                        </button>
                                    </Col>
                                </Row>
                                <div id="alert-section" className="alert-box">
                                    {formData.show && (
                                        <Alert
                                            variant={formData.variant}
                                            onClose={() => setFormData({ ...formData, show: false })}
                                            dismissible
                                        >
                                            {formData.alertmessage}
                                        </Alert>
                                    )}
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Col>
            </Container>
            <div className={formData.loading ? 'loading-bar' : 'd-none'}></div>
        </HelmetProvider>
    );
};

export default TailgatePackages;
