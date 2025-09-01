import { useState, useEffect } from 'react';
import { useDebounce } from '../hooks/useDebounce';

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Trigger search when debounced value changes
  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm]); // Removed onSearch from dependencies to prevent infinite re-renders

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <i className="fas fa-search h-5 w-5 text-gray-400"></i>
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search users by name (starts with)..."
        className="input-field pl-10"
        aria-label="Search users"
      />
    </div>
  );
}
