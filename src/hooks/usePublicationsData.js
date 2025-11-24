import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getPublicationsDataSync } from '../utils/dataLoader';

export const usePublicationsData = () => {
  const { language } = useLanguage();
  const [publicationsData, setPublicationsData] = useState({
    MOCK_PUBLICATIONS: [],
    LATEST_PUBLICATIONS: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getPublicationsDataSync(language)
      .then(data => {
        setPublicationsData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading publications data:', error);
        setLoading(false);
      });
  }, [language]);

  return { publicationsData, loading };
};

