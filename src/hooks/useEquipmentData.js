import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getEquipmentDataSync } from '../utils/dataLoader';

export const useEquipmentData = () => {
  const { language } = useLanguage();
  const [equipmentList, setEquipmentList] = useState([]);
  const [softwareList, setSoftwareList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getEquipmentDataSync(language)
      .then(data => {
        setEquipmentList(data.EQUIPMENT_LIST || []);
        setSoftwareList(data.SOFTWARE_LIST || []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading equipment data:', error);
        setLoading(false);
      });
  }, [language]);

  return { equipmentList, softwareList, loading };
};

