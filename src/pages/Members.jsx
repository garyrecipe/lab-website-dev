import { useState } from 'react';
import Layout from '../components/Layout';
import { useMembersData } from '../hooks/useMembersData';
import { useTranslation } from '../hooks/useTranslation';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Members = () => {
  const [activeTab, setActiveTab] = useState('current');
  const { membersData, loading } = useMembersData();
  const { t } = useTranslation();

  const tabs = [
    { id: 'current', name: t('members.current') },
    { id: 'alumni', name: t('members.alumni') }
  ];

  const renderCurrentMembers = () => {
    if (!membersData.CURRENT_MEMBERS) return null;
    
    const memberCategories = [
      { title: t('members.mascots'), data: membersData.CURRENT_MEMBERS.mascots },
      { title: t('members.researchAssistants'), data: membersData.CURRENT_MEMBERS.researchAssistants },
      { title: t('members.phdStudents'), data: membersData.CURRENT_MEMBERS.phdStudents },
      { title: t('members.masterStudents'), data: membersData.CURRENT_MEMBERS.masterStudents },
    ];

    return (
      <div className="space-y-12">
        {memberCategories.map(category => (
          <div key={category.title} className="bg-white/90 rounded-xl shadow-lg p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">{category.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.data.map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                  <h4 className="mt-4 text-lg font-semibold text-gray-900">{member.name}</h4>
                  <p className="text-gray-600">
                    {member.title || member.year || member.project || member.department}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderAlumni = () => {
    if (!membersData.ALUMNI) return null;
    
    return (
    <div className="bg-white/90 rounded-xl shadow-lg p-8 backdrop-blur-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">{t('members.name')}</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">{t('members.graduationYear')}</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('members.currentPosition')}</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('members.position')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {membersData.ALUMNI.slice().sort((a, b) => b.graduationYear - a.graduationYear).map((alumni, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white/50' : 'bg-gray-50/50'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">{alumni.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{alumni.graduationYear}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {alumni.company}
                  {alumni.link && (
                    <a
                      href={alumni.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block ml-2 mb-1 text-blue-400 hover:text-blue-600 align-middle"
                      title="前往公司網站"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alumni.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
  };

  if (loading) {
    return (
      <Layout title={t('pages.members')}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{t('common.loading')}</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={t('pages.members')}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="border border-gray-200 rounded-lg bg-white/80 backdrop-blur-sm p-1 flex space-x-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  cursor-pointer px-6 py-2.5 text-sm font-medium rounded-md transition-colors duration-200
                  ${activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }
                `}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="mt-8">
          {activeTab === 'professor' && renderProfessor()}
          {activeTab === 'current' && renderCurrentMembers()}
          {activeTab === 'alumni' && renderAlumni()}
        </div>
      </div>
    </Layout>
  );
};

export default Members;
