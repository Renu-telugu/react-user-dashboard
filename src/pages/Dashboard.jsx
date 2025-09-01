import { useUsers } from '../context/UserContext';
import UserGrid from '../components/UserGrid';
import Loader from '../components/Loader';
import ErrorState from '../components/ErrorState';
import EmptyState from '../components/EmptyState';

export default function Dashboard() {
  const { users, status, error, retryFetch } = useUsers();

  if (status === 'loading') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Users
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage and view all users
          </p>
        </div>
        <Loader />
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ErrorState error={error} onRetry={retryFetch} />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Users
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {users.length} user{users.length !== 1 ? 's' : ''} found
        </p>
      </div>

      {users.length === 0 ? (
        <EmptyState />
      ) : (
        <UserGrid users={users} />
      )}
    </div>
  );
}
