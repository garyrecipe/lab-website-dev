import { useState, useMemo } from 'react';
import Layout from '../components/Layout';
import { MOCK_PUBLICATIONS } from '../data/publications';

const ITEMS_PER_PAGE = 10;

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [sortBy, setSortBy] = useState('date'); // 'date' or 'title'
  const [currentPage, setCurrentPage] = useState(1);

  // 獲取所有獨特的標籤
  const allTags = useMemo(() => {
    const tags = new Set();
    MOCK_PUBLICATIONS.forEach(pub => {
      pub.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  // 過濾和排序論文
  const filteredPublications = useMemo(() => {
    return MOCK_PUBLICATIONS
      .filter(pub => {
        const matchesSearch = (
          pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pub.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
          pub.journal.toLowerCase().includes(searchTerm.toLowerCase())
        );
        const matchesTag = !selectedTag || pub.tags.includes(selectedTag);
        return matchesSearch && matchesTag;
      })
      .sort((a, b) => {
        if (sortBy === 'date') {
          return new Date(b.publishDate) - new Date(a.publishDate);
        }
        return a.title.localeCompare(b.title);
      });
  }, [searchTerm, selectedTag, sortBy]);

  // 分頁
  const totalPages = Math.ceil(filteredPublications.length / ITEMS_PER_PAGE);
  const paginatedPublications = filteredPublications.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // 重置分頁
  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleTagChange = (value) => {
    setSelectedTag(value);
    setCurrentPage(1);
  };

  return (
    <Layout title="發表論文">
      {/* 主要內容區域 */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
        {/* 搜尋和過濾區域 */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4 text-gray-900">
          <div className="flex-1">
            <input
              type="text"
              placeholder="搜尋論文標題、摘要、作者或期刊..."
              className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <div className="flex space-x-4">
            <select
              className="px-4 pr-8 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white bg-no-repeat bg-[length:16px] bg-[center_right_1rem] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0iIzZiNzI4MCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS4yOTMgNy4yOTNhMSAxIDAgMDExLjQxNCAwTDEwIDEwLjU4Nmw0LjI5My00LjI5M2ExIDEgMCAxMTEuNDE0IDEuNDE0bC01IDVhMSAxIDAgMDEtMS40MTQgMGwtNS01YTEgMSAwIDAxMC0xLjQxNHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=')]"
              value={selectedTag}
              onChange={(e) => handleTagChange(e.target.value)}
            >
              <option value="">所有類別</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
            <select
              className="px-4 pr-8 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white bg-no-repeat bg-[length:16px] bg-[center_right_1rem] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0iIzZiNzI4MCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS4yOTMgNy4yOTNhMSAxIDAgMDExLjQxNCAwTDEwIDEwLjU4Nmw0LjI5My00LjI5M2ExIDEgMCAxMTEuNDE0IDEuNDE0bC01IDVhMSAxIDAgMDEtMS40MTQgMGwtNS01YTEgMSAwIDAxMC0xLjQxNHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=')]"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="date">依日期排序</option>
              <option value="title">依標題排序</option>
            </select>
          </div>
        </div>

        {/* 論文列表 */}
        <div className="divide-y divide-gray-200">
          {paginatedPublications.map(publication => (
            <div
              key={publication.id}
              className="p-4 mb-4 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-150"
            >
              <div className="flex flex-col space-y-2">
                <h2 className="text-xl font-semibold text-gray-900 group">
                  {publication.url ? (
                    <a 
                      href={publication.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 inline-flex items-center gap-1 text-gray-900"
                    >
                      {publication.title}
                      <svg 
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  ) : (
                    <span className="text-gray-900">{publication.title}</span>
                  )}
                </h2>
                <p className="text-gray-600 line-clamp-2">
                  {publication.abstract}
                </p>
                <div className="flex flex-wrap gap-2">
                  {publication.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center text-sm text-gray-600 gap-x-4">
                  <span className="inline-flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {publication.authors.join(', ')}
                  </span>
                </div>
                <div className="flex flex-wrap items-center text-sm text-gray-600 gap-x-4">
                  <span className="inline-flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z" />
                    </svg>
                    {publication.journal}
                  </span>
                  <span className="inline-flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {publication.publishDate}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 分頁控制 */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                上一頁
              </button>
              <span className="px-4 py-2 text-gray-700 bg-white rounded-md shadow">
                第 {currentPage} 頁，共 {totalPages} 頁
              </span>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                下一頁
              </button>
            </nav>
          </div>
        )}

        {/* 無結果提示 */}
        {filteredPublications.length === 0 && (
          <div className="text-center py-12 text-gray-600">
            沒有找到符合條件的論文
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Publications;
