import Layout from '../components/Layout';
import { useTranslation } from '../hooks/useTranslation';
import { HiOutlineOfficeBuilding, HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';

const Contact = () => {
  const { t } = useTranslation();
  
  return (
    <Layout title={t('pages.contact')}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* 教授聯絡資訊 */}
          <div className="bg-white/90 rounded-xl shadow-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              {t('contact.professorContact')}
            </h2>
            <div className="flex justify-between items-start sm:flex-row flex-col">
              <div className="space-y-4">
                <div className="flex items-start">
                  <HiOutlineOfficeBuilding className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{t('contact.officeLocation')}</h3>
                    <p className="mt-1 text-gray-700">
                      明志科技大學 材料工程學系<br />
                      綜合大樓 308-2室
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <HiOutlinePhone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{t('contact.officePhone')}</h3>
                    <p className="mt-1 text-gray-700">02-29089899 ext. 6316</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <HiOutlineMail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{t('contact.email')}</h3>
                    <a 
                      href="mailto:huang.tsungyu@mail.mcut.edu.tw" 
                      className="mt-1 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      huang.tsungyu@mail.mcut.edu.tw
                    </a>
                  </div>
                </div>
              </div>
              {/* Google 地圖嵌入 */}
              <div className="bg-white/90 rounded-xl shadow-lg overflow-hidden backdrop-blur-sm sm:w-1/2 w-full sm:mt-0 mt-4">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps?q=25.04106269651244,121.42228942266351&z=16&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="辦公室位置"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
            
          </div>

          {/* 實驗室聯絡資訊 */}
          <div className="bg-white/90 rounded-xl shadow-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              {t('contact.labContact')}
            </h2>
            <div className="flex justify-between sm:flex-row flex-col">
              <div className='space-y-4'>
                <div className="flex items-start">
                  <HiOutlineLocationMarker className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{t('contact.labLocation')}</h3>
                    <p className="mt-1 text-gray-700">
                      明志科技大學 電漿與薄膜科技中心<br />
                      電2-202
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <HiOutlinePhone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{t('contact.labPhone')}</h3>
                    <p className="mt-1 text-gray-700">02-29089899 ext. 7506 </p>
                  </div>
                </div>
              </div>
              {/* Google 地圖嵌入 */}
              <div className="bg-white/90 rounded-xl shadow-lg overflow-hidden backdrop-blur-sm sm:w-1/2 w-full sm:mt-0 mt-4">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps?q=25.038190001446043,121.41799355434648&z=16&output=embed"
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
        </div>
      </div>
    </Layout>
  );
};

export default Contact; 