import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { RESEARCH_OVERVIEW, RESEARCH_TOPICS } from '../data/research';

const Research = () => {
  // 從研究主題列表中提取所有圖片（過濾掉佔位符圖片）
  const researchImages = [{image: RESEARCH_OVERVIEW.image, caption: RESEARCH_OVERVIEW.imageCaption}, ...RESEARCH_TOPICS
    .map(topic => ({
      image: topic.image,
      caption: topic.imageCaption || topic.title
    }))]
    .filter(item => !item.image.includes('placehold.co'));

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 自動輪播效果
  useEffect(() => {
    if (researchImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % researchImages.length
      );
    }, 3000); // 每3秒切換一次

    return () => clearInterval(interval);
  }, [researchImages.length]);

  // 如果沒有圖片，使用原來的圖片
  const displayImage = researchImages.length > 0 
    ? researchImages[currentImageIndex]
    : {
        image: RESEARCH_OVERVIEW.image,
        caption: RESEARCH_OVERVIEW.imageCaption
      };

  return (
    <Layout title="研究方向">
      {/* 研究大綱區塊 */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 rounded-xl shadow-lg overflow-hidden backdrop-blur-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                {RESEARCH_OVERVIEW.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {RESEARCH_OVERVIEW.description}
              </p>
            </div>
            <div className="lg:p-8 p-4">
              <div className="relative aspect-[2/1]">
                <img
                  src={displayImage.image}
                  alt={displayImage.caption}
                  className="rounded-lg shadow-md w-full h-full object-cover transition-opacity duration-500"
                  key={currentImageIndex}
                />
                <p className="text-sm text-gray-600 mt-2 text-center">
                  {displayImage.caption}
                </p>
                {/* 輪播指示點 */}
                {researchImages.length > 1 && (
                  <div className="flex justify-center mt-2 space-x-2">
                    {researchImages.map((_, index) => (
                      <span
                        key={index}
                        className={`inline-block w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 研究主題列表 */}
        <div className="space-y-16 pb-12">
          {RESEARCH_TOPICS.map((topic, index) => (
            <div
              key={topic.id}
              className="bg-white/90 rounded-xl shadow-lg overflow-hidden backdrop-blur-sm"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 ${
                index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
              }`}>
                <div className={`${
                  index % 2 === 0 ? '' : 'lg:col-start-2'
                }`}>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    {topic.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {topic.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">
                      研究重點：
                    </h4>
                    <ul className="space-y-2">
                      {topic.keyPoints.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start"
                        >
                          <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 mr-2" />
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`${
                  index % 2 === 0 ? '' : 'lg:col-start-1'
                }`}>
                  <div className="relative aspect-[4/3]">
                    <img
                      src={topic.image}
                      alt={topic.imageCaption}
                      className="rounded-lg shadow-md w-full h-full object-cover"
                    />
                    <p className="text-sm text-gray-600 mt-2 text-center">
                      {topic.imageCaption}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Research; 