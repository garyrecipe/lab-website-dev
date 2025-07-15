import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { RESEARCH_TOPICS } from '../data/research';
import { LATEST_PUBLICATIONS } from '../data/publications';
import { NEWS_LIST } from '../data/news';
import { HiOutlineOfficeBuilding, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 自動輪播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % RESEARCH_TOPICS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* 研究內容輪播 */}
      <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[500px] overflow-hidden rounded-xl shadow-xl">
            {RESEARCH_TOPICS.map((topic, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-all duration-500 transform ${
                  index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  <div className="bg-white/90 backdrop-blur-sm p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
                      {topic.title}
                    </h3>
                    <p className="text-gray-700 mb-6">{topic.description}</p>
                    <Link
                      to="/research"
                      className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center"
                    >
                      了解更多 →
                    </Link>
                  </div>
                  <div className="relative">
                    <img
                      src={topic.image}
                      alt={topic.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
            {/* 輪播指示器 */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {RESEARCH_TOPICS.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? 'bg-indigo-600 w-4' : 'bg-gray-400'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 最新消息 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            最新消息
          </h2>
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            {NEWS_LIST.slice(0, 10).map((news, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
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
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50">
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
                <p className="text-gray-600 mb-4">{pub.authors}</p>
                <div className="flex items-center justify-between">
                  <span className="text-indigo-600 font-medium">
                    {pub.journal}, {pub.year}
                  </span>
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      DOI →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/publications"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              查看更多論文
            </Link>
          </div>
        </div>
      </section>

      {/* 聯絡方式 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            聯絡方式
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <HiOutlineOfficeBuilding className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">地址</h3>
              <p className="text-gray-700 text-center">
                明志科技大學 材料工程系
                <br />
                綜合大樓 308-2室
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <HiOutlinePhone className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">電話</h3>
              <p className="text-gray-700">02-29089899 ext. 6316</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <HiOutlineMail className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <a
                href="mailto:professor@mail.nsysu.edu.tw"
                className="text-indigo-600 hover:text-indigo-800"
              >
                professor@mail.nsysu.edu.tw
              </a>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-50 hover:bg-indigo-100"
            >
              更多聯絡資訊
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home; 