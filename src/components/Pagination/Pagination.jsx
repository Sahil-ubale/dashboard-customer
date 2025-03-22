import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Generate page numbers
  const getPageNumbers = () => {
    const pages = [];

    // Always show first page
    pages.push(1);

    // Add current page and surrounding pages
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (pages[pages.length - 1] !== i - 1) {
        pages.push('...');
      }
      pages.push(i);
    }

    // Add last page if not already included
    if (totalPages > 1 && pages[pages.length - 1] !== totalPages) {
      if (pages[pages.length - 1] !== totalPages - 1) {
        pages.push('...');
      }
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="pagination">
      <button
        className="pagination-arrow"
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <span className="material-icons-outlined">chevron_left</span>
      </button>

      <div className="pagination-numbers">
        {getPageNumbers().map((page, index) => (
          page === '...' ? (
            <span key={`ellipsis-${index}`} className="pagination-ellipsis">...</span>
          ) : (
            <button
              key={page}
              className={`pagination-number ${currentPage === page ? 'active' : ''}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          )
        ))}
      </div>

      <button
        className="pagination-arrow"
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <span className="material-icons-outlined">chevron_right</span>
      </button>
    </div>
  );
};

export default Pagination;