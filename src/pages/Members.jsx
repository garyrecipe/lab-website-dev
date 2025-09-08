import { useState } from 'react';
import Layout from '../components/Layout';
import { CURRENT_MEMBERS, ALUMNI } from '../data/members';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Members = () => {
  const [activeTab, setActiveTab] = useState('current');

  const tabs = [
    { id: 'current', name: '現任成員' },
    { id: 'alumni', name: '歷任成員' }
  ];

  const renderCurrentMembers = () => {
    const memberCategories = [
      { title: '研究助理', data: CURRENT_MEMBERS.researchAssistants },
      { title: '博士班成員', data: CURRENT_MEMBERS.phdStudents },
      { title: '碩士班成員', data: CURRENT_MEMBERS.masterStudents },
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

  const renderAlumni = () => (
    <div className="bg-white/90 rounded-xl shadow-lg p-8 backdrop-blur-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">姓名</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">畢業年份</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">現職</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">職稱</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {ALUMNI.slice().sort((a, b) => b.graduationYear - a.graduationYear).map((alumni, index) => (
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

  return (
    <Layout title="實驗室成員">
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
