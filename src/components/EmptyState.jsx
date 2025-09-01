export default function EmptyState({ searchTerm }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
        No users found
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        {searchTerm 
          ? `No users match "${searchTerm}". Try a different search term.`
          : 'No users available at the moment.'
        }
      </p>
    </div>
  );
}
