import React, {createContext, useState} from 'react';
import LocalizedStrings from 'react-native-localization';
import en from './En.json';
import es from './Es.json';

const DEFAULT_LANGUAGE = 'en';

const languages = {en, es};

const translations = new LocalizedStrings(languages);

export const LocalizationContext = createContext({
  translations,
  // eslint-disable-next-line no-unused-vars
  setAppLanguage: (language: string) => {},
  appLanguage: DEFAULT_LANGUAGE,
  initializeAppLanguage: () => {},
});

export default ({children}: any) => {
  const currentLocale = translations.getInterfaceLanguage();

  const [appLanguage, setAppLanguage] = useState(
    currentLocale || DEFAULT_LANGUAGE,
  );

  const setLanguage = (language: string) => {
    translations.setLanguage(language);
    setAppLanguage(language);
  };

  const initializeAppLanguage = async () => {
    const localeCode = DEFAULT_LANGUAGE;

    setLanguage(localeCode);
  };

  return (
    <LocalizationContext.Provider
      value={{
        translations,
        setAppLanguage: setLanguage,
        appLanguage,
        initializeAppLanguage,
      }}>
      {children}
    </LocalizationContext.Provider>
  );
};
