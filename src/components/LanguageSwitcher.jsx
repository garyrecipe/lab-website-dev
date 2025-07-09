import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="space-x-2 p-2">
      <button onClick={() => changeLanguage('zh')} className="px-2 py-1 border">繁中</button>
      <button onClick={() => changeLanguage('en')} className="px-2 py-1 border">EN</button>
    </div>
  );
}

export default LanguageSwitcher;
