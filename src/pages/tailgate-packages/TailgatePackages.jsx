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
import { calculatePrice, isGameSelected, validCountValues } from './TailgatePackages.utils';
import { gameIds } from '@/utils/utils.js';
import email from '@/config/email.json';
import data from '@/config/datapack.json';
import t from '@/config/text.json';
import './TailgatePackages.css';
import { AdditionalInfoForms } from './additional-info-forms';

const TailgatePackages = ({ away }) => {
    const [formData, setFormData] = useState(data.initial_form_data);
    const [selectedPackageType, setSelectedPackageType] = useState(away ? 'intruder' : 'cub');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const missingFields = data.required_fields.filter((field) => !formData[field]);

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
            package_type: selectedPackageType,
            total_price: calculatePrice(selectedPackageType, formData),

            ...data.fields.reduce(
                (acc, field) => ({
                    ...acc,
                    [field]: formData[field],
                }),
                {}
            ),

            ...gameIds.reduce(
                (acc, game) => ({
                    ...acc,
                    [`include_${game}`]: formData[`include_${game}`] ? t.packages[game]?.name || '' : '',
                }),
                {}
            ),

            ...data.add_on_fields.reduce(
                (acc, addOn) => ({
                    ...acc,
                    [`include_${addOn}`]: formData[`include_${addOn}`]
                        ? t.packages.add_ons[addOn]?.name || ''
                        : '',
                    [`${addOn}_amount`]: formData[`include_${addOn}`] ? formData[`${addOn}_amount`] : '',
                }),
                {}
            ),
        };

        emailjs.send(email.service_id, email.template_id, templateParams, email.user_id).then(
            (r) => {
                setFormData({
                    ...data.initial_form_data,
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

    const handleScrollToForm = () => {
        document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });
    };

    const toggleGames = (inclusion, selection, packageName) => {
        setFormData((prevData) => ({
            ...prevData,
            [inclusion]: !prevData[inclusion],
            [selection]: prevData[inclusion] ? '' : t.packages[packageName].name,
        }));
    };

    const toggleAddOns = (inclusion, selection) => {
        setFormData((prevData) => ({
            ...prevData,
            [inclusion]: !prevData[inclusion],
            [selection]: prevData[inclusion] ? '' : prevData[inclusion],
        }));
    };

    const toggleAmounts = (amountKey, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [amountKey]: value,
        }));
    };

    const gameHandlers = gameIds.reduce((handlers, field) => {
        const includeKey = `include_${field}`;
        handlers[`handle_${field}`] = () => toggleGames(includeKey, `selected${field}`, field);
        return handlers;
    }, {});

    const addOnHandlers = data.add_on_fields.reduce((handlers, field) => {
        const includeKey = `include_${field}`;
        const amountKey = `${field}_amount`;
        handlers[`handle_${field}`] = () => toggleAddOns(includeKey, `selected_${field}`);
        handlers[`handle_${field}_amount`] = (value) => toggleAmounts(amountKey, value);
        return handlers;
    }, {});

    const packageSelectionProps = {
        ...gameHandlers,
        formData,
        away,
        selectedPackageType,
        handlePackageTypeChange
    };
    const addOnSelectionProps = {
        ...addOnHandlers,
        selectedPackageType,
        formData
    };

    const infographHandlers = { handlePackageTypeChange, handleScrollToForm };

    // Compute form validity
    const missingFields = data.required_fields.filter((field) => !formData[field]);

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
                                <PackageSelection {...packageSelectionProps} style={{ background: 'black' }} />
                                <AddOnSelection {...addOnSelectionProps} style={{ background: 'black' }} />
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
