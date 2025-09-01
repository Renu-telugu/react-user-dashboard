import { Link } from 'react-router-dom';

export default function UserCard({ user }) {
  return (
    <div className="card p-3 sm:p-4 lg:p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl sm:rounded-2xl">
      <div className="space-y-2 sm:space-y-3 lg:space-y-4">
        <div>
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-1">
            {user.name}
          </h3>
          {user.username && (
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
              @{user.username}
            </p>
          )}
        </div>
        
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center space-x-2">
            <i className="fas fa-envelope w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0"></i>
            <a 
              href={`mailto:${user.email}`}
              className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 truncate"
              title={user.email}
            >
              {user.email}
            </a>
          </div>
          
          <div className="flex items-center space-x-2">
            <i className="fas fa-phone w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0"></i>
            <a 
              href={`tel:${user.phone}`}
              className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 truncate"
            >
              {user.phone}
            </a>
          </div>
          
          {user.company && (
            <div className="flex items-center space-x-2">
              <i className="fas fa-building w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0"></i>
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 truncate" title={user.company.name}>
                {user.company.name}
              </span>
            </div>
          )}
        </div>
        
        <div className="pt-1 sm:pt-2 lg:pt-3">
          <Link
            to={`/users/${user.id}`}
            className="w-full bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium py-1.5 sm:py-2 lg:py-2.5 px-2 sm:px-3 lg:px-4 rounded-md sm:rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 inline-flex items-center justify-center group-hover:shadow-md text-xs sm:text-sm lg:text-base"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
