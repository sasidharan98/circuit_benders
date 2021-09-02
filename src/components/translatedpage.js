import React from 'react'
import {  Trans,useTranslation } from 'react-i18next'

const Translatedpage = () => {
    const {t} = useTranslation();
    const k = t('JsonData', { returnObjects: true})
    return (
        <div>
            <div>
            <Trans i18nKey="Introduction"> {k.Introduction}</Trans>
            <div>{t('Why.0')}</div>{t('Header.title')}
            </div>
        </div>
    )
}

export default Translatedpage
