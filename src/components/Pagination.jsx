export default function Pagination({ currentPage, totalPages, onPageChange }) {
  // Safety checks
  if (!totalPages || totalPages <= 1) return null;
  
  const pages = [];
  const maxVisiblePages = 5;
  
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
  
  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }
  
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-center space-x-1 sm:space-x-2 lg:space-x-3 mt-4 sm:mt-6 p-2 sm:p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-700">
      <button
        onClick={() => {
          // Circular pagination: go to last page when on page 1
          const prevPage = currentPage === 1 ? totalPages : currentPage - 1;
          onPageChange(prevPage);
        }}
        className="px-2 sm:px-3 py-1 sm:py-1.5 lg:py-2 text-xs sm:text-sm font-medium text-gray-500 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md sm:rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
      >
        <span className="hidden sm:inline">Previous</span>
        <span className="sm:hidden">Prev</span>
      </button>
      
      {startPage > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            1
          </button>
          {startPage > 2 && (
            <span className="px-2 text-gray-500">...</span>
          )}
        </>
      )}
      
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 text-xs sm:text-sm font-medium rounded-md sm:rounded-lg transition-all duration-200 ${
            currentPage === page
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105'
              : 'text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-md hover:-translate-y-0.5'
          }`}
        >
          {page}
        </button>
      ))}
      
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <span className="px-2 text-gray-500">...</span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {totalPages}
          </button>
        </>
      )}
      
      <button
        onClick={() => {
          // Circular pagination: roll back to page 1 after last page
          const nextPage = currentPage === totalPages ? 1 : currentPage + 1;
          onPageChange(nextPage);
        }}
        className="px-2 sm:px-3 py-1 sm:py-1.5 lg:py-2 text-xs sm:text-sm font-medium text-gray-500 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md sm:rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
      >
        Next
      </button>
    </div>
  );
}
