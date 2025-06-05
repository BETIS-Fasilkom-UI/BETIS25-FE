import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  paginationClass?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  paginationClass = '',
}) => {
  const showEllipsis = totalPages > 7;

  const getPageNumbers = () => {
    if (!showEllipsis) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 2) {
      return [1, 2, 3, '...', totalPages];
    }

    if (currentPage >= totalPages - 1) {
      return [1, '...', totalPages - 2, totalPages - 1, totalPages];
    }

    return [
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages,
    ];
  };

  const pages = getPageNumbers();

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-full bg-gradient-to-b from-tosca-pagination to-tosca-pagination-darker py-2 px-4 md:px-5 lg:py-3 lg:px-6',
        paginationClass
      )}
    >
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={cn(
          'px-1 py-1 pr-4 md:pr-6 lg:pr-8 text-white hover:text-gray-300 disabled:opacity-50'
        )}
      >
        <span className="sr-only">Previous</span>
        <ChevronLeft strokeWidth={3} />
      </button>

      <div className="flex space-x-3 md:space-x-4 lg:space-x-5">
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() =>
              typeof page === 'number' ? onPageChange(page) : null
            }
            disabled={page === '...'}
            className={cn(
              'min-w-[0.241rem] px-2 py-1 lg:px-3 lg:py-2 rounded-full font-semibold font-openSans text-[0.5rem] md:text-[0.625rem] lg:text-xs',
              page === currentPage
                ? 'bg-tosca-foundation-darker text-white'
                : 'text-white hover:bg-teal-700/50',
              page === '...' && 'cursor-default'
            )}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={cn(
          'px-1 py-1 pl-4 md:pl-6 lg:pl-8 text-white hover:text-gray-300 disabled:opacity-50'
        )}
      >
        <span className="sr-only">Next</span>
        <ChevronRight strokeWidth={3} />
      </button>
    </div>
  );
};

export default Pagination;
