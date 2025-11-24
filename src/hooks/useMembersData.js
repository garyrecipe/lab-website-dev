import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getMembersDataSync } from '../utils/dataLoader';

export const useMembersData = () => {
  const { language } = useLanguage();
  const [membersData, setMembersData] = useState({
    PROFESSOR: null,
    CURRENT_MEMBERS: null,
    ALUMNI: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getMembersDataSync(language)
      .then(data => {
        setMembersData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading members data:', error);
        setLoading(false);
      });
  }, [language]);

  return { membersData, loading };
};

