import Layout from '../components/Layout';
import { RESEARCH_OVERVIEW, RESEARCH_TOPICS } from '../data/research';

const Research = () => {
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
                  src={RESEARCH_OVERVIEW.image}
                  alt={RESEARCH_OVERVIEW.imageCaption}
                  className="rounded-lg shadow-md w-full h-full object-cover"
                />
                <p className="text-sm text-gray-600 mt-2 text-center">
                  {RESEARCH_OVERVIEW.imageCaption}
                </p>
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