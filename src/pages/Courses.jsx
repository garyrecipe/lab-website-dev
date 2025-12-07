import { useState } from 'react';
import Layout from '../components/Layout';
import { useCoursesData } from '../hooks/useCoursesData';
import { useTranslation } from '../hooks/useTranslation';

const Courses = () => {
  const { courses, loading } = useCoursesData();
  const { t } = useTranslation();
  const [expandedCourse, setExpandedCourse] = useState(null);

  const toggleCourse = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  // YouTube 內嵌 URL 生成函數
  const getYouTubeEmbedUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}`;
  };

  if (loading) {
    return (
      <Layout title={t('pages.courses')}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{t('common.loading')}</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={t('pages.courses')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {courses.length > 0 ? (
          <div className="space-y-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* 科目標題區域 */}
                <button
                  onClick={() => toggleCourse(course.id)}
                  className="w-full px-6 py-4 sm:px-8 sm:py-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                        {course.name}
                      </h2>
                      {course.description && (
                        <p className="text-sm sm:text-base text-gray-600">
                          {course.description}
                        </p>
                      )}
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <svg
                        className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${
                          expandedCourse === course.id ? 'transform rotate-180' : ''
                        }`}
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
                </button>

                {/* 影片列表區域 */}
                {expandedCourse === course.id && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 border-t border-gray-200">
                    {course.videos && course.videos.length > 0 ? (
                      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {course.videos.map((video) => (
                          <div
                            key={video.id}
                            className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                          >
                            {/* YouTube 影片內嵌 */}
                            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                              <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src={getYouTubeEmbedUrl(video.youtubeId)}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                            </div>
                            
                            {/* 影片資訊 */}
                            <div className="p-4 sm:p-5">
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {video.title}
                              </h3>
                              {video.description && (
                                <p className="text-sm text-gray-600 mb-3">
                                  {video.description}
                                </p>
                              )}
                              <div className="flex items-center text-xs text-gray-500">
                                <span>{t('courses.week', { week: video.week })}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="mt-6 text-center py-8">
                        <p className="text-gray-500">{t('courses.noVideos')}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{t('courses.noCourses')}</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Courses;

