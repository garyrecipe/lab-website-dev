import Layout from '../components/Layout';
import { HiOutlineOfficeBuilding, HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';

const Contact = () => {
  return (
    <Layout title="聯絡我們">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* 教授聯絡資訊 */}
          <div className="bg-white/90 rounded-xl shadow-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              指導教授聯絡方式
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <HiOutlineOfficeBuilding className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">辦公室位置</h3>
                  <p className="mt-1 text-gray-700">
                    明志科技大學 材料工程學系<br />
                    綜合大樓 308-2室
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <HiOutlinePhone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">辦公室電話</h3>
                  <p className="mt-1 text-gray-700">02-29089899 ext. 6316</p>
                </div>
              </div>
              <div className="flex items-start">
                <HiOutlineMail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">電子郵件</h3>
                  <a 
                    href="mailto:professor@mail.nsysu.edu.tw" 
                    className="mt-1 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    huang.tsungyu@mail.mcut.edu.tw
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 實驗室聯絡資訊 */}
          <div className="bg-white/90 rounded-xl shadow-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              實驗室聯絡方式
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <HiOutlineLocationMarker className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">實驗室位置</h3>
                  <p className="mt-1 text-gray-700">
                    明志科技大學 電漿與薄膜科技中心<br />
                    電2-202
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <HiOutlinePhone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">實驗室電話</h3>
                  <p className="mt-1 text-gray-700">02-29089899 ext. 7506 </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google 地圖嵌入 */}
          <div className="bg-white/90 rounded-xl shadow-lg overflow-hidden backdrop-blur-sm">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps?q=25.04108754356325,121.42229525515422&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="實驗室位置"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact; 