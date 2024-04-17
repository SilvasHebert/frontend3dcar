import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import ptBr from '../translations/ptBr.json';

i18n.use(initReactI18next).init({
  lng: 'ptBr',
  resources: {ptBr: ptBr},
  react: {useSuspense: false},
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
