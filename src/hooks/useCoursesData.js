import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getCoursesDataSync } from '../utils/dataLoader';

export const useCoursesData = () => {
  const { language } = useLanguage();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getCoursesDataSync(language)
      .then(data => {
        setCourses(data.COURSES || []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading courses data:', error);
        setLoading(false);
      });
  }, [language]);

  return { courses, loading };
};

