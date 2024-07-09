import React from "react";
import t from '@/config/text.json';
import { Helmet } from "react-helmet-async";

const TabLabel = ({ label }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{label} | {t.meta.title}</title>
            <meta name="description" content={t.meta.description} />
        </Helmet>
    );
}
export default TabLabel;