import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getNewsDataSync } from '../utils/dataLoader';

export const useNewsData = () => {
  const { language } = useLanguage();
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getNewsDataSync(language)
      .then(data => {
        setNewsList(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading news data:', error);
        setLoading(false);
      });
  }, [language]);

  return { newsList, loading };
};

