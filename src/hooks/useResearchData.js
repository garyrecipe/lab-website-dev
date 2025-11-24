import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getResearchDataSync } from '../utils/dataLoader';

export const useResearchData = () => {
  const { language } = useLanguage();
  const [researchData, setResearchData] = useState({
    RESEARCH_OVERVIEW: null,
    RESEARCH_TOPICS: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getResearchDataSync(language)
      .then(data => {
        setResearchData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading research data:', error);
        setLoading(false);
      });
  }, [language]);

  return { researchData, loading };
};

