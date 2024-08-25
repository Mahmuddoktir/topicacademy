import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LaungageDetector from 'i18next-browser-languagedetector';
import uzTranslation from '../public/locales/uz.json';
import enTranslation from '../public/locales/en.json';
import ruTranslation from '../public/locales/ru.json';

i18n
.use(Backend)
// tilni aniqlab berish
.use(LaungageDetector)
// bog'lash
.use(initReactI18next)
.init({
    fallbackLng : 'en',
    lnh: 'uz',
    debug: true,
    resources:{
        uz:{translation: uzTranslation},
        en:{translation: enTranslation},
        ru:{translation: ruTranslation}
    }
})

export default i18n;