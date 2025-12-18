import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { useResearchData } from '../hooks/useResearchData';
import { usePublicationsData } from '../hooks/usePublicationsData';
import { useNewsData } from '../hooks/useNewsData';
import { useTranslation } from '../hooks/useTranslation';
import { HiOutlineOfficeBuilding, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import NewsModal from '../components/NewsModal'; // Import your new modal component

const Home = () => {
  const { t } = useTranslation();
  const { researchData, loading: researchLoading } = useResearchData();
  const { publicationsData, loading: publicationsLoading } = usePublicationsData();
  const { newsList, loading: newsLoading } = useNewsData();
  
  const RESEARCH_TOPICS = (researchData.RESEARCH_TOPICS || []).filter(topic => topic.description && topic.description.trim() !== '');
  const LATEST_PUBLICATIONS = publicationsData.LATEST_PUBLICATIONS || [];
  const NEWS_LIST = newsList || [];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  // --- BUG FIX: Declare these state variables ---
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [selectedNews, setSelectedNews] = useState(null); // State to hold the news item to display
  // ---------------------------------------------

  // 自動輪播
  useEffect(() => {
    if (RESEARCH_TOPICS.length > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % RESEARCH_TOPICS.length);
      }, 8000);
      return () => clearInterval(timer);
    }
  }, [RESEARCH_TOPICS.length]);

  // Sort NEWS_LIST by date in descending order and then take the first 6
  // This ensures the 6 most recent news items are displayed.
  const sortedAndSlicedNews = [...NEWS_LIST].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);

  // Function to open the modal
  const openNewsModal = (newsItem) => {
    setSelectedNews(newsItem);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeNewsModal = () => {
    setIsModalOpen(false);
    setSelectedNews(null); // Clear the selected news item when closing
  };

  return (
    <Layout>
{/* 研究內容輪播 */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* 修正 1: 調整總高度
            - 手機版 (預設): h-[650px]。增加高度以容納垂直排列的圖片+文字。
            - 電腦版 (md): h-[454px]。讓圖片剛好填滿畫面。
          */}
          <div className="relative h-[650px] sm:h-[650px] md:h-[454px] overflow-hidden rounded-xl shadow-sm">
            {RESEARCH_TOPICS.map((topic, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-all duration-500 transform ${index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                  }`}
              >
                {/* 修正 2: 佈局結構
                   - 手機版: flex flex-col (垂直排列)。
                   - 電腦版: md:grid md:grid-cols-2 (左右排列)。
                */}
                <div className="flex flex-col md:grid md:grid-cols-2 h-full">
                  
                  {/* 修正 3: 圖片容器
                     - 手機版: h-[45%]。
                       計算邏輯：若總高 650px，45% 約為 292px。
                       對於 4:3 的圖片，292px 的高度允許寬度達到約 390px。
                       這足以讓圖片在絕大多數手機上「撐滿寬度」且不留白。
                     - object-contain: 確保圖片不被裁切。
                  */}
                  <div className="relative h-[45%] md:h-full bg-gray-50 flex items-center justify-center w-full">
                    <img
                      src={topic.image}
                      alt={topic.title}
                      className="absolute inset-0 w-full h-full object-contain" 
                    />
                  </div>

                  {/* 修正 4: 文字容器
                     - flex-1: 讓文字區塊自動填滿剩下的空間 (約 55%)，解決文字消失的問題。
                     - overflow-y-auto: 若文字真的太多，允許區塊內捲動。
                  */}
                  <div className="flex-1 md:h-full bg-white backdrop-blur-sm p-6 md:p-12 flex flex-col justify-center overflow-y-auto">
                    <h3 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-3 md:mb-4">
                      {topic.title}
                    </h3>
                    
                    {/* 移除 line-clamp 限制，讓文字盡量顯示 */}
                    <p className="text-gray-700 mb-6 text-sm md:text-base">
                      {topic.description}
                    </p>
                    
                    <div className="mt-auto md:mt-0"> {/* 確保按鈕在手機版稍微往下推 */}
                      <Link
                        to="/research"
                        className="text-blue-600 hover:text-blue-900 font-medium inline-flex items-center text-sm md:text-base"
                      >
                        {t('home.learnMore')} →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* 輪播指示器 */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
              {RESEARCH_TOPICS.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all border border-white/50 shadow-sm ${index === currentSlide ? 'bg-blue-600 w-8' : 'hover:bg-blue-600 bg-gray-300'
                    }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 最新消息 */}
      <section className="py-16 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {t('home.latestNews')}
          </h2>
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            {sortedAndSlicedNews.map((news, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer" // Add cursor-pointer
                onClick={() => openNewsModal(news)} // Add onClick handler
              >
                <div className="flex h-full">
                  {news.image && (
                    <div className="w-1/3 relative">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 p-6">
                    <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-700 line-clamp-3">
                      {news.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 最新論文 */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {t('home.latestPublications')}
          </h2>
          {publicationsLoading ? (
            <div className="text-center py-8">
              <p className="text-gray-600">{t('common.loading')}</p>
            </div>
          ) : LATEST_PUBLICATIONS.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600">{t('home.noPublications')}</p>
            </div>
          ) : (
            <div className="space-y-6">
              {LATEST_PUBLICATIONS.slice(0, 3).map((pub, index) => (
                <div
                  key={pub.id || index}
                  className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {pub.title}
                  </h3>
                  <div className="flex flex-wrap items-center text-sm text-gray-600 gap-x-4">
                    <span className="inline-flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {pub.authors && pub.authors.length > 0 ? pub.authors.join(', ') : ''}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center text-sm text-gray-600 gap-x-4">
                    <span className="inline-flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z" />
                      </svg>
                      {pub.journal}
                      {pub.info && pub.info.length > 0 && pub.info.filter(item => item !== undefined && item !== null).length > 0 && (
                        <>, {pub.info.filter(item => item !== undefined && item !== null).join(', ')}</>
                      )}
                      {pub.publishDate && <>, {pub.publishDate}</>}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="text-center mt-8">
            <Link
              to="/publications"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800"
            >
              {t('home.viewMorePublications')}
            </Link>
          </div>
        </div>
      </section>

      {/* 聯絡方式 */}
      <section className="py-16 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {t('home.contactInfo')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <HiOutlineOfficeBuilding className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('home.address')}</h3>
              <p className="text-gray-700 text-center">
                {t('contact.officeAddress')}
                {t('contact.officeRoom') && (
                  <>
                    <br />
                    {t('contact.officeRoom')}
                  </>
                )}
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <HiOutlinePhone className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('home.phone')}</h3>
              <p className="text-gray-700">{t('contact.office')} 02-29089899 ext. 6316</p>
              <p className="text-gray-700">{t('contact.lab')} 02-29089899 ext. 7506</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <HiOutlineMail className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <a
                href="mailto:huang.tsungyu@mail.mcut.edu.tw"
                className="text-blue-600 hover:text-blue-800"
              >
                huang.tsungyu@mail.mcut.edu.tw
              </a>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800"
            >
              {t('home.moreContactInfo')}
            </Link>
          </div>
        </div>
      </section>
      {/* News Modal */}
      <NewsModal
        show={isModalOpen}
        onClose={closeNewsModal}
        newsItem={selectedNews}
      />
    </Layout>
  );
};

export default Home;