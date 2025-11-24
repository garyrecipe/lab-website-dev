import { useTranslation as useI18nTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect } from 'react';
import i18n from '../i18n';

export const useTranslation = () => {
  const { language } = useLanguage();
  const { t } = useI18nTranslation();

  // 當語言改變時，更新 i18n 語言
  useEffect(() => {
    const i18nLang = language === 'en' ? 'en' : 'zhtc';
    if (i18n.language !== i18nLang) {
      i18n.changeLanguage(i18nLang);
    }
  }, [language]);

  return { t };
};

