import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';

import pt from '../translations/pt.json';

i18n.use(initReactI18next).init({
  lng: 'pt',
  compatibilityJSON: 'v3',
  resources: {pt: pt},
  react: {useSuspense: false},
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
