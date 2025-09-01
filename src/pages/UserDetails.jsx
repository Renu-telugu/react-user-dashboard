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

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-4"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          {user.name}
        </h1>
        {user.username && (
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">
            @{user.username}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Contact Information
          </h2>
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</label>
              <a 
                href={`mailto:${user.email}`}
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                {user.email}
              </a>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</label>
              <a 
                href={`tel:${user.phone}`}
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                {user.phone}
              </a>
            </div>
            {user.website && (
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Website</label>
                <a 
                  href={user.website.startsWith('http') ? user.website : `https://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {user.website}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Company Information */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Company
          </h2>
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Company Name</label>
              <p className="text-gray-900 dark:text-gray-100">{user.company?.name || 'Not provided'}</p>
            </div>
            {user.company?.catchPhrase && (
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Catch Phrase</label>
                <p className="text-gray-900 dark:text-gray-100 italic">"{user.company.catchPhrase}"</p>
              </div>
            )}
          </div>
        </div>

        {/* Address Information */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Address
          </h2>
          {hasAddress ? (
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Street</label>
                <p className="text-gray-900 dark:text-gray-100">{user.address.street}</p>
              </div>
              {user.address.suite && (
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Suite</label>
                  <p className="text-gray-900 dark:text-gray-100">{user.address.suite}</p>
                </div>
              )}
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">City</label>
                <p className="text-gray-900 dark:text-gray-100">{user.address.city}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Zipcode</label>
                <p className="text-gray-900 dark:text-gray-100">{user.address.zipcode}</p>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">Not provided</p>
          )}
        </div>

        {/* Geolocation */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Location
          </h2>
          {hasGeo ? (
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Latitude</label>
                <p className="text-gray-900 dark:text-gray-100">{user.address.geo.lat}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Longitude</label>
                <p className="text-gray-900 dark:text-gray-100">{user.address.geo.lng}</p>
              </div>
              <div className="pt-2">
                <a
                  href={`https://www.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  View on Map
                </a>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">Not provided</p>
          )}
        </div>
      </div>
    </div>
  );
}
