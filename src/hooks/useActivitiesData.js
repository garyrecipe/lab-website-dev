import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getActivitiesDataSync } from '../utils/dataLoader';

export const useActivitiesData = () => {
  const { language } = useLanguage();
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getActivitiesDataSync(language)
      .then(data => {
        setActivities(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading activities data:', error);
        setLoading(false);
      });
  }, [language]);

  return { activities, loading };
};

