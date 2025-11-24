import { useState, useMemo, useEffect } from 'react';
import Layout from '../components/Layout';
import { useEquipmentData } from '../hooks/useEquipmentData';
import { useTranslation } from '../hooks/useTranslation';

const Equipment = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFeature, setSelectedFeature] = useState('');
  const [viewMode, setViewMode] = useState('equipment'); // 'equipment' or 'software'
  const { equipmentList, softwareList, loading } = useEquipmentData();
  const { t } = useTranslation();

  // 根據 viewMode 選擇當前列表
  const currentList = viewMode === 'equipment' ? equipmentList : softwareList;

  // 當切換模式時，重置搜尋和篩選
  useEffect(() => {
    setSearchQuery('');
    setSelectedFeature('');
  }, [viewMode]);

  // 收集所有唯一的 features
  const allFeatures = useMemo(() => {
    const featureSet = new Set();
    currentList.forEach(item => {
      if (item.features && Array.isArray(item.features)) {
        item.features.forEach(feature => {
          featureSet.add(feature);
        });
      }
    });
    return Array.from(featureSet).sort();
  }, [currentList]);

  const filteredEquipment = useMemo(() => {
    let filtered = currentList;

    // 先根據 feature 篩選
    if (selectedFeature) {
      filtered = filtered.filter((item) => 
        item.features && Array.isArray(item.features) && item.features.includes(selectedFeature)
      );
    }

    // 再根據搜尋關鍵字篩選
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((equipment) => {
        // 搜尋 name (設備名稱)
        if (equipment.name.toLowerCase().includes(query)) {
          return true;
        }
        // 搜尋 purpose (描述)
        if (equipment.purpose && equipment.purpose.toLowerCase().includes(query)) {
          return true;
        }
        // 搜尋 spec (規格)
        if (equipment.spec && equipment.spec.toLowerCase().includes(query)) {
          return true;
        }
        return false;
      });
    }

    return filtered;
  }, [searchQuery, selectedFeature, currentList]);

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
        {/* 切換器 */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex rounded-lg bg-gray-100 p-1 shadow-sm">
            <button
              onClick={() => setViewMode('equipment')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                viewMode === 'equipment'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('equipment.equipment')}
            </button>
            <button
              onClick={() => setViewMode('software')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                viewMode === 'software'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('equipment.software')}
            </button>
          </div>
        </div>

        {/* 搜尋框和篩選器 - 只在設備模式下顯示 */}
        {viewMode === 'equipment' && (
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
        )}

        {/* 設備/軟體列表 */}
        {filteredEquipment.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEquipment.map((item, index) => {
              const isSoftware = viewMode === 'software';
              return (
                <div 
                  key={index}
                  className={`rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm bg-white/90`}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col">
                    <h3 className={`text-xl font-semibold mb-2 text-gray-900`}>
                      {item.name}
                    </h3>
                    <div className={`rounded-lg p-4 mb-2 ${
                      isSoftware 
                        ? 'bg-blue-50' 
                        : 'bg-blue-50'
                    }`}>
                      <h4 className={`text-sm font-medium mb-1 text-blue-900`}>
                        {t('equipment.purpose')}
                      </h4>
                      <p className={`mb-4 text-gray-700`}>
                        {item.purpose}
                      </p>
                      {
                        item.spec && item.spec.trim() && (<>
                          <h4 className={`text-sm font-medium mb-1 ${
                            isSoftware ? 'text-blue-800' : 'text-blue-900'
                          }`}>
                            {t('equipment.spec')}
                          </h4>
                          <p className={`whitespace-pre-line ${
                            isSoftware ? 'text-gray-700' : 'text-gray-700'
                          }`}>
                            {item.spec}
                          </p>
                        </>)
                      }
                    </div>
                    
                    {item.features && item.features.length > 0 && (
                      <div className={`flex gap-2 flex-wrap mb-4 text-sm ${
                        isSoftware ? 'text-blue-600' : 'text-blue-600'
                      }`}>
                        {item.features.map((feature, featureIndex) => (
                          <div 
                            className={`rounded-lg p-2 ${
                              isSoftware 
                                ? 'bg-gray-100' 
                                : 'bg-gray-100'
                            }`} 
                            key={featureIndex}
                          >
                            {feature}
                          </div>
                        ))}
                      </div>
                    )}
                    {
                      item.manager && item.manager.trim() && (
                        <div className='mt-auto'>
                          <h4 className={`text-sm font-medium ${
                            isSoftware ? 'text-purple-800' : 'text-blue-900'
                          }`}>
                            {t('equipment.manager')}
                          </h4>
                          <p className={isSoftware ? 'text-purple-700' : 'text-gray-700'}>
                            {item.manager} {item.contact && <span>({item.contact})</span>}
                          </p>
                        </div>
                      )
                    }
                  </div>
                </div>
              );
            })}
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