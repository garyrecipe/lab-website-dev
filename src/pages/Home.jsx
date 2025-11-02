import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { RESEARCH_TOPICS } from '../data/research';
import { LATEST_PUBLICATIONS } from '../data/publications';
import { NEWS_LIST } from '../data/news';
import { HiOutlineOfficeBuilding, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import NewsModal from '../components/NewsModal'; // Import your new modal component

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // --- BUG FIX: Declare these state variables ---
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [selectedNews, setSelectedNews] = useState(null); // State to hold the news item to display
  // ---------------------------------------------

  // 自動輪播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % RESEARCH_TOPICS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

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
          <div className="relative h-[600px] sm:h-[600px] md:h-[400px] lg:h-[400px] overflow-hidden">
            {RESEARCH_TOPICS.map((topic, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-all duration-500 transform ${index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                  }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 h-5/4">
                  <div className="relative">
                    <img
                      src={topic.image}
                      alt={topic.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-white backdrop-blur-sm p-12 flex flex-col">
                    <h3 className="text-3xl font-semibold text-blue-900 mb-4">
                      {topic.title}
                    </h3>
                    <p className="text-gray-700 mb-6">{topic.description}</p>
                    <Link
                      to="/research"
                      className="text-blue-600 hover:text-blue-900 font-medium inline-flex items-center"
                    >
                      了解更多 →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            {/* 輪播指示器 */}
            <div className="absolute bottom-8 md:bottom-4 lg:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {RESEARCH_TOPICS.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-blue-600 w-8' : ' hover:bg-blue-600 bg-gray-300'
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
            最新消息
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
            最新發表論文
          </h2>
          <div className="space-y-6">
            {LATEST_PUBLICATIONS.slice(0, 3).map((pub, index) => (
              <div
                key={index}
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
                    {pub.authors.join(', ')}
                  </span>
                </div>
                <div className="flex flex-wrap items-center text-sm text-gray-600 gap-x-4">
                  <span className="inline-flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z" />
                    </svg>
                    {pub.journal}, {pub.info.join(', ')}, {pub.publishDate}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/publications"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800"
            >
              查看更多論文
            </Link>
          </div>
        </div>
      </section>

      {/* 聯絡方式 */}
      <section className="py-16 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            聯絡方式
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <HiOutlineOfficeBuilding className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">地址</h3>
              <p className="text-gray-700 text-center">
                明志科技大學 材料工程系
                <br />
                綜合大樓 308-2室
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <HiOutlinePhone className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">電話</h3>
              <p className="text-gray-700">辦公室 02-29089899 ext. 6316</p>
              <p className="text-gray-700">實驗室 02-29089899 ext. 7506</p>
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
              更多聯絡資訊
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