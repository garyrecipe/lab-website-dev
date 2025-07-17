// src/components/NewsModal.jsx
import React from 'react';

const NewsModal = ({ show, onClose, newsItem }) => {
  if (!show) {
    return null; // Don't render if the modal is not visible
  }

  // Basic styling for the modal overlay and content.
  // You can enhance this with Tailwind CSS classes or a separate CSS file.
  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // Ensure it's on top of other content
  };

  const modalContentStyle = {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    maxWidth: '700px',
    maxHeight: '80vh', // Limit height for scrollability
    overflowY: 'auto', // Add scroll for long content
    position: 'relative',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#333',
  };

  return (
    <div style={modalOverlayStyle} onClick={onClose}> {/* Close modal when clicking outside */}
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}> {/* Prevent modal from closing when clicking inside */}
        <button style={closeButtonStyle} onClick={onClose}>
          &times; {/* HTML entity for 'x' */}
        </button>
        {newsItem && (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{newsItem.title}</h2>
            <p className="text-gray-600 mb-4 text-sm">{newsItem.date}</p>
            {newsItem.image && (
              <img src={newsItem.image} alt={newsItem.title} className="w-full h-auto object-cover mb-4 rounded-lg" />
            )}
            <p className="text-gray-800 leading-relaxed whitespace-pre-line">{newsItem.content}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsModal;