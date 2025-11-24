import { useState } from 'react';
import Layout from '../components/Layout';
import { useActivitiesData } from '../hooks/useActivitiesData';
import { useTranslation } from '../hooks/useTranslation';

const Activities = () => {
  const { t } = useTranslation();
  const { activities: ACTIVITIES, loading } = useActivitiesData();
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // 打開照片瀏覽器
  const openPhotoViewer = (activity, index = 0) => {
    setSelectedActivity(activity);
    setCurrentPhotoIndex(index);
    document.body.style.overflow = 'hidden';
  };

  // 關閉照片瀏覽器
  const closePhotoViewer = () => {
    setSelectedActivity(null);
    setCurrentPhotoIndex(0);
    document.body.style.overflow = 'auto';
  };

  // 切換照片
  const navigatePhoto = (direction) => {
    if (!selectedActivity) return;
    
    const length = selectedActivity.photos.length;
    if (direction === 'next') {
      setCurrentPhotoIndex((prev) => (prev + 1) % length);
    } else {
      setCurrentPhotoIndex((prev) => (prev - 1 + length) % length);
    }
  };

  if (loading) {
    return (
      <Layout title={t('activities.title')}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p>{t('common.loading')}</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={t('activities.title')}>
      {/* 活動列表 */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACTIVITIES.map((activity) => (
            <div
              key={activity.date}
              className="bg-white/90 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className="relative aspect-[4/3] cursor-pointer group"
                onClick={() => openPhotoViewer(activity)}
              >
                <img
                  src={activity.photos[0].url}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">
                    {t('activities.viewMorePhotos', { count: activity.photos.length })}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{activity.date}</p>
                <p className="text-gray-700">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 照片瀏覽器 */}
      {selectedActivity && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={closePhotoViewer}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* 上一張按鈕 */}
          <button
            onClick={() => navigatePhoto('prev')}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-50"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* 下一張按鈕 */}
          <button
            onClick={() => navigatePhoto('next')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-50"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* 照片容器 */}
          <div className="w-full max-w-5xl px-4">
            <div className="relative aspect-[4/3]">
              <img
                src={selectedActivity.photos[currentPhotoIndex].url}
                alt={selectedActivity.photos[currentPhotoIndex].caption}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-4 text-center text-white">
              <p className="text-lg">
                {selectedActivity.photos[currentPhotoIndex].caption}
              </p>
              <p className="text-sm mt-2">
                {currentPhotoIndex + 1} / {selectedActivity.photos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Activities; 