import React from "react";
import t from '@/config/text.json';
import ga from '@/config/ga.json';
import { Helmet } from "react-helmet-async";

const TabLabel = ({ label }) => {
    return (
        <Helmet>
            <script async src={ga.url}></script>
            <script>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${ga.tag}');
                `}
            </script>
            <meta charSet="utf-8" />
            <title>{label} | {t.meta.title}</title>
            <meta name="description" content={t.meta.description} />
        </Helmet>
    );
}
export default TabLabel;