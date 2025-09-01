import { useState, useMemo } from 'react';
import UserCard from './UserCard';
import SearchBar from './SearchBar';
import SortSelect from './SortSelect';
import Pagination from './Pagination';

export default function UserGrid({ users }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name-asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter and sort users
  const filteredAndSortedUsers = useMemo(() => {
    let filtered = users;
    
    // Filter by search term
    if (searchTerm) {
      filtered = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Sort users
    filtered.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      
      if (sortBy === 'name-asc') {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
    
    return filtered;
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
        {paginatedUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
