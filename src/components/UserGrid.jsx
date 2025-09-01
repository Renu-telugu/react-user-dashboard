import { useState, useMemo, useEffect } from 'react';
import UserCard from './UserCard';
import SearchBar from './SearchBar';
import SortSelect from './SortSelect';
import Pagination from './Pagination';

export default function UserGrid({ users }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name-asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Change this to filteredAndSortedUsers.length to show all users on one page

  // Filter and sort users - FIXED: Create copies to avoid mutating original array
  const filteredAndSortedUsers = useMemo(() => {
    // Create a copy of users array first
    let filtered = [...users];
    
    // Filter by search term - only show users whose names START with the search term
    if (searchTerm) {
      filtered = filtered.filter(user =>
        user.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
    }
    
    // Sort users - create a new sorted array instead of mutating
    const sorted = [...filtered].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      
      if (sortBy === 'name-asc') {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
    
    return sorted;
  }, [users, searchTerm, sortBy]);

  // Paginate users
  const totalPages = Math.ceil(filteredAndSortedUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = filteredAndSortedUsers.slice(startIndex, startIndex + itemsPerPage);

  // Reset to first page when search or sort changes
  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleSort = (value) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    // Validate page is within valid range
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Reset to page 1 if current page is beyond total pages - FIXED: Only reset when totalPages changes, not currentPage
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [totalPages]); // Removed currentPage from dependencies to prevent reset loop

  return (
    <div className="space-y-6">
      {/* Search and Sort Controls */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="w-full sm:w-80">
          <SearchBar onSearch={handleSearch} />
        </div>
        <SortSelect value={sortBy} onChange={handleSort} />
      </div>

      {/* User Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedUsers.map((user, index) => (
          <div 
            key={user.id} 
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <UserCard user={user} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
