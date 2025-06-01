import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CTA = () => {
    const { t } = useTranslation();

    return (
        <section>
            <div className="w-full flex flex-col sm:flex-row items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-0 sm:space-x-6">
                <p className="cta-text">{t('cta_texto1')} <br className="sm:block hidden" /> {t('cta_texto2')}</p>
                <Link to="/contact" className="btn-cta">{t('cta_botao')}</Link>
            </div>
        </section>
    )
}

export default CTA