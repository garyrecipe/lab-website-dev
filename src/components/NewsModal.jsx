// src/components/NewsModal.jsx
import React, { useState, useEffect } from 'react';

const NewsModal = ({ show, onClose, newsItem }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 切換不同新聞或關閉時，重置為第一張圖片
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [newsItem, show]);

  if (!show) {
    return null;
  }

  // 整理圖片來源：優先採用 images 陣列，若無則降級使用 image 單一字串
  const images = newsItem?.images && newsItem.images.length > 0
    ? newsItem.images
    : newsItem?.image
      ? [newsItem.image]
      : [];

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <div
        className="relative mx-4 flex w-full max-w-4xl max-h-[85vh] flex-col overflow-hidden rounded-xl bg-white p-6 sm:p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 關閉按鈕 */}
        <button
          className="absolute right-4 top-4 z-10 cursor-pointer border-none bg-transparent text-2xl text-gray-700 hover:text-gray-900 leading-none"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        {newsItem && (
          <>
            {/* 標題與日期 */}
            <h2 className="mb-2 pr-8 text-xl font-bold text-gray-900">{newsItem.title}</h2>
            <p className="mb-4 text-sm text-gray-600">{newsItem.date}</p>

            {/* 圖片展示與切換區 (改為白底 bg-white，或可刪除 bg-white 變成無底色) */}
            {images.length > 0 && (
              <div className="relative mb-4 h-[calc(80vh*0.5)] max-h-[50%] shrink-0 overflow-hidden rounded-lg bg-white flex items-center justify-center group">
                <img
                  src={images[currentImageIndex]}
                  alt={`${newsItem.title} - ${currentImageIndex + 1}`}
                  className="h-full w-full object-contain object-center select-none"
                />

                {/* 多張圖片時顯示：左右切換箭頭 */}
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white shadow-md transition-colors focus:outline-none"
                      aria-label="Previous Image"
                    >
                      &#10094;
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white shadow-md transition-colors focus:outline-none"
                      aria-label="Next Image"
                    >
                      &#10095;
                    </button>

                    {/* 頁碼提示 (如: 1 / 3) */}
                    <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full shadow pointer-events-none">
                      {currentImageIndex + 1} / {images.length}
                    </div>

                    {/* 底部指示點 (Dots) - 加上深色半透明膠囊背景，確保白底照片依然清楚 */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-xs shadow-sm">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(idx);
                          }}
                          className={`h-2 rounded-full transition-all focus:outline-none ${
                            idx === currentImageIndex
                              ? 'w-5 bg-white'
                              : 'w-2 bg-white/60 hover:bg-white'
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* 內文滾動區 */}
            <p className="min-h-0 flex-1 overflow-y-auto text-gray-800 leading-relaxed whitespace-pre-line text-sm sm:text-base">
              {newsItem.content}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsModal;