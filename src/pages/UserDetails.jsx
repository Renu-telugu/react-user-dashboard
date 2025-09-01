import { useParams, Link, Navigate } from 'react-router-dom';
import { useUsers } from '../context/UserContext';

export default function UserDetails() {
  const { id } = useParams();
  const { users } = useUsers();
  
  const user = users.find(u => u.id.toString() === id);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  const hasAddress = user.address && user.address.street;
  const hasGeo = user.address?.geo && user.address.geo.lat && user.address.geo.lng;

  // Function to validate coordinates and provide fallback
  const getMapUrl = () => {
    if (hasGeo) {
      const lat = parseFloat(user.address.geo.lat);
      const lng = parseFloat(user.address.geo.lng);
      
      // Check if coordinates are realistic (not in the middle of the ocean)
      if (lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
        // Additional check for reasonable coordinates (not extreme values)
        if (Math.abs(lat) < 85 && Math.abs(lng) < 175) {
          return `https://www.google.com/maps?q=${lat},${lng}`;
        }
      }
    }
    
    // Fallback to New Delhi, India
    return 'https://www.google.com/maps?q=28.6139,77.2090';
  };

  const getLocationText = () => {
    if (hasGeo) {
      const lat = parseFloat(user.address.geo.lat);
      const lng = parseFloat(user.address.geo.lng);
      
      if (lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180 && Math.abs(lat) < 85 && Math.abs(lng) < 175) {
        return `${lat}, ${lng}`;
      }
    }
    return 'New Delhi, India (default location)';
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-4 transition-colors duration-200"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {user.name}
          </h1>
          {user.username && (
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">
              @{user.username}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="card p-6 hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Contact Information
            </h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</label>
                <a 
                  href={`mailto:${user.email}`}
                  className="block text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  {user.email}
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</label>
                <a 
                  href={`tel:${user.phone}`}
                  className="block text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  {user.phone}
                </a>
              </div>
            </div>
            {user.website && (
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Website</label>
                  <a 
                    href={user.website.startsWith('http') ? user.website : `https://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    {user.website}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Company Information */}
        <div className="card p-6 hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Company
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Company Name</label>
              <p className="text-gray-900 dark:text-gray-100 font-medium mt-1">
                {user.company?.name || 'Not provided'}
              </p>
            </div>
            {user.company?.catchPhrase && (
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Catch Phrase</label>
                <p className="text-gray-900 dark:text-gray-100 italic mt-1">
                  "{user.company.catchPhrase}"
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Address Information */}
        <div className="card p-6 hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Address
            </h2>
          </div>
          {hasAddress ? (
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Street</label>
                  <p className="text-gray-900 dark:text-gray-100 font-medium">{user.address.street}</p>
                </div>
              </div>
              {user.address.suite && (
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <div>
                    <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Suite</label>
                    <p className="text-gray-900 dark:text-gray-100 font-medium">{user.address.suite}</p>
                  </div>
                </div>
              )}
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">City</label>
                  <p className="text-gray-900 dark:text-gray-100 font-medium">{user.address.city}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Zipcode</label>
                  <p className="text-gray-900 dark:text-gray-100 font-medium">{user.address.zipcode}</p>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">Not provided</p>
          )}
        </div>

        {/* Geolocation */}
        <div className="card p-6 hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Location
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Coordinates</label>
              <p className="text-gray-900 dark:text-gray-100 font-medium mt-1">
                {getLocationText()}
              </p>
            </div>
            <div className="pt-2">
              <a
                href={getMapUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center w-full justify-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                View on Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
