// src/components/NewsModal.jsx
import React from 'react';

const NewsModal = ({ show, onClose, newsItem }) => {
  if (!show) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <div
        className="relative mx-4 flex w-full max-w-4xl max-h-[80vh] flex-col overflow-hidden rounded-xl bg-white p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-4 top-4 cursor-pointer border-none bg-transparent text-2xl text-gray-700 hover:text-gray-900"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {newsItem && (
          <>
            <h2 className="mb-2 pr-8 text-xl font-bold text-gray-900">{newsItem.title}</h2>
            <p className="mb-4 text-sm text-gray-600">{newsItem.date}</p>
            {newsItem.image && (
              <div className="mb-4 h-[calc(80vh*0.5)] max-h-[50%] shrink-0 overflow-hidden rounded-lg">
                <img
                  src={newsItem.image}
                  alt={newsItem.title}
                  className="h-full w-full object-contain object-center"
                />
              </div>
            )}
            <p className="min-h-0 flex-1 overflow-y-auto text-gray-800 leading-relaxed whitespace-pre-line">
              {newsItem.content}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsModal;
