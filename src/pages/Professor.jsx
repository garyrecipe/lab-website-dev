import Layout from '../components/Layout';
import { useMembersData } from '../hooks/useMembersData';
import { useTranslation } from '../hooks/useTranslation';

const Professor = () => {
  const { membersData, loading } = useMembersData();
  const { t } = useTranslation();

  if (loading || !membersData.PROFESSOR) {
    return (
      <Layout title={t('pages.professor')}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{t('common.loading')}</p>
          </div>
        </div>
      </Layout>
    );
  }

  const PROFESSOR = membersData.PROFESSOR;

  return (
    <Layout title={t('pages.professor')}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/90 rounded-xl shadow-lg p-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center">
              <img
                src={PROFESSOR.photo}
                alt={PROFESSOR.name}
                className="rounded-lg shadow-lg w-full max-w-md object-cover"
              />
              <h2 className="text-3xl font-bold text-gray-900 mt-6">{PROFESSOR.name}</h2>
            </div>
            <div className="space-y-8">
              {<div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">{t('professor.title')}</h3>
                <ul className="space-y-3">
                  <li
                    className="text-gray-700 flex items-start"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 mr-2" />
                    <span>{PROFESSOR.title}</span>
                  </li>
                </ul>
              </div>}
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">{t('professor.education')}</h3>
                <ul className="space-y-3">
                  {PROFESSOR.education.map((edu, index) => (
                    <li 
                      key={index} 
                      className="text-gray-700 flex items-start"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 mr-2" />
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">{t('professor.experience')}</h3>
                <ul className="space-y-3">
                  {PROFESSOR.experience.map((edu, index) => (
                    <li 
                      key={index} 
                      className="text-gray-700 flex items-start"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 mr-2" />
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">{t('professor.awards')}</h3>
                <ul className="space-y-3">
                  {PROFESSOR.awards.map((award, index) => (
                    <li 
                      key={index} 
                      className="text-gray-700 flex items-start"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 mr-2" />
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">{t('professor.researchInterests')}</h3>
                <ul className="space-y-3">
                  {PROFESSOR.researchInterests.map((interest, index) => (
                    <li 
                      key={index} 
                      className="text-gray-700 flex items-start"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 mr-2" />
                      <span>{interest}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {<div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">{t('professor.contactInfo')}</h3>
                <ul className="space-y-3">
                  <li
                    className="text-gray-700 flex items-start"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 mr-2" />
                    <span>{PROFESSOR.phone}</span>
                  </li>
                  <li
                    className="text-gray-700 flex items-start"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 mr-2" />
                    <span>{PROFESSOR.email}</span>
                  </li>
                </ul>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Professor; 