import { useState, useMemo } from 'react';
import Layout from '../components/Layout';
import { useEquipmentData } from '../hooks/useEquipmentData';
import { useTranslation } from '../hooks/useTranslation';

const Equipment = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFeature, setSelectedFeature] = useState('');
  const { equipmentList, loading } = useEquipmentData();
  const { t } = useTranslation();

  // 收集所有唯一的 features
  const allFeatures = useMemo(() => {
    const featureSet = new Set();
    equipmentList.forEach(equipment => {
      equipment.features.forEach(feature => {
        featureSet.add(feature);
      });
    });
    return Array.from(featureSet).sort();
  }, [equipmentList]);

  const filteredEquipment = useMemo(() => {
    let filtered = equipmentList;

    // 先根據 feature 篩選
    if (selectedFeature) {
      filtered = filtered.filter((equipment) => 
        equipment.features.includes(selectedFeature)
      );
    }

    // 再根據搜尋關鍵字篩選
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((equipment) => {
        // 搜尋 name
        if (equipment.name.toLowerCase().includes(query)) {
          return true;
        }
        // 搜尋 purpose
        if (equipment.purpose.toLowerCase().includes(query)) {
          return true;
        }
        // 搜尋 features (陣列中的每個 feature)
        if (equipment.features.some(feature => feature.toLowerCase().includes(query))) {
          return true;
        }
        // 搜尋 spec
        if (equipment.spec && equipment.spec.toLowerCase().includes(query)) {
          return true;
        }
        return false;
      });
    }

    return filtered;
  }, [searchQuery, selectedFeature, equipmentList]);

  if (loading) {
    return (
      <Layout title={t('pages.equipment')}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{t('common.loading')}</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={t('pages.equipment')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 搜尋框和篩選器 */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row gap-4 max-w-4xl mx-auto items-center">
            {/* 搜尋框 */}
            <div className="relative flex-1 w-full sm:w-auto">
              <input
                type="text"
                placeholder={t('common.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            
            {/* Feature 篩選器 */}
            <div className="relative w-full sm:w-auto">
              <select
                value={selectedFeature}
                onChange={(e) => setSelectedFeature(e.target.value)}
                className="w-full sm:w-64 px-4 py-3 pr-10 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
              >
                <option value="">{t('equipment.allFeatures')}</option>
                {allFeatures.map((feature, index) => (
                  <option key={index} value={feature}>
                    {feature}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
          
          {(searchQuery || selectedFeature) && (
            <p className="text-center mt-2 text-sm text-gray-600">
              {t('common.foundItems', { count: filteredEquipment.length })}
            </p>
          )}
        </div>

        {/* 設備列表 */}
        {filteredEquipment.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEquipment.map((equipment, index) => (
            <div 
              key={index}
              className="bg-white/90 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={equipment.image}
                  alt={equipment.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {equipment.name}
                </h3>
                <div className="bg-blue-50 rounded-lg p-4 mb-2">
                  <h4 className="text-sm font-medium text-blue-900 mb-1">
                    {t('equipment.purpose')}
                  </h4>
                  <p className="text-gray-700 mb-4">
                    {equipment.purpose}
                  </p>
                  {
                    equipment.spec && (<>
                      <h4 className="text-sm font-medium text-blue-900 mb-1">
                        {t('equipment.spec')}
                      </h4>
                      <p className="text-gray-700 whitespace-pre-line">
                        {equipment.spec}
                      </p>
                    </>)
                  }
                </div>
                
                <div className="flex gap-2 flex-wrap mb-4 text-sm text-blue-600">
                  {equipment.features.map((feature, featureIndex) => (
                    <div className="bg-gray-100 rounded-lg p-2" key={featureIndex}>{feature}</div>
                  ))}
                </div>
                {
                  equipment.manager && (
                    <div className='mt-auto'>
                      <h4 className="text-sm font-medium text-blue-900">
                        {t('equipment.manager')}
                      </h4>
                      <p className="text-gray-700">
                        {equipment.manager} {equipment.contact && <span>({equipment.contact})</span>}
                      </p>
                    </div>
                  )
                }
              </div>
            </div>
          ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{t('common.noResults')}</p>
            <p className="text-gray-400 text-sm mt-2">{t('common.tryOtherKeywords')}</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Equipment; 