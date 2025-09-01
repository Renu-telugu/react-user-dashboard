import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../context/UserContext';

export default function CreateUser() {
  const navigate = useNavigate();
  const { addUser } = useUsers();
  const [showSuccess, setShowSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    username: '',
    website: '',
    companyName: '',
    companyCatchPhrase: '',
    addressStreet: '',
    addressSuite: '',
    addressCity: '',
    addressZipcode: '',
    geoLat: '',
    geoLng: ''
  });

  const [errors, setErrors] = useState({});

  const requiredFields = ['name', 'email', 'phone', 'companyName'];

  const validateForm = () => {
    const newErrors = {};
    
    requiredFields.forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Generate unique ID
    const generateId = () => {
      if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
      }
      return Date.now().toString();
    };

    const newUser = {
      id: generateId(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      username: formData.username.trim() || undefined,
      website: formData.website.trim() || undefined,
      company: {
        name: formData.companyName.trim(),
        catchPhrase: formData.companyCatchPhrase.trim() || undefined
      },
      address: {
        street: formData.addressStreet.trim() || undefined,
        suite: formData.addressSuite.trim() || undefined,
        city: formData.addressCity.trim() || undefined,
        zipcode: formData.addressZipcode.trim() || undefined,
        geo: {
          lat: formData.geoLat.trim() || undefined,
          lng: formData.geoLng.trim() || undefined
        }
      }
    };

    // Remove undefined values
    Object.keys(newUser).forEach(key => {
      if (newUser[key] === undefined) {
        delete newUser[key];
      }
    });

    if (newUser.address) {
      Object.keys(newUser.address).forEach(key => {
        if (newUser.address[key] === undefined) {
          delete newUser.address[key];
        }
      });
      if (newUser.address.geo) {
        Object.keys(newUser.address.geo).forEach(key => {
          if (newUser.address.geo[key] === undefined) {
            delete newUser.address.geo[key];
          }
        });
        if (Object.keys(newUser.address.geo).length === 0) {
          delete newUser.address.geo;
        }
      }
      if (Object.keys(newUser.address).length === 0) {
        delete newUser.address;
      }
    }

    if (newUser.company) {
      Object.keys(newUser.company).forEach(key => {
        if (newUser.company[key] === undefined) {
          delete newUser.company[key];
        }
      });
    }

    addUser(newUser);
    setShowSuccess(true);
    
    // Redirect to user details page after a short delay
    setTimeout(() => {
      navigate(`/users/${newUser.id}`);
    }, 1500);
  };

  const isFormValid = requiredFields.every(field => formData[field].trim());

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Create New User
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Add a new user to the dashboard
        </p>
      </div>

      {showSuccess && (
        <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-green-800 dark:text-green-200">
              User created successfully! Redirecting to user details...
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Basic Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                placeholder="Enter full name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                placeholder="Enter email address"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                placeholder="Enter phone number"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter website URL"
              />
            </div>
          </div>
        </div>

        {/* Company Information */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Company Information
          </h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className={`input-field ${errors.companyName ? 'border-red-500' : ''}`}
                placeholder="Enter company name"
              />
              {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
            </div>

            <div>
              <label htmlFor="companyCatchPhrase" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Catch Phrase
              </label>
              <input
                type="text"
                id="companyCatchPhrase"
                name="companyCatchPhrase"
                value={formData.companyCatchPhrase}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter company catch phrase"
              />
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Address Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="addressStreet" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Street
              </label>
              <input
                type="text"
                id="addressStreet"
                name="addressStreet"
                value={formData.addressStreet}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter street address"
              />
            </div>

            <div>
              <label htmlFor="addressSuite" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Suite
              </label>
              <input
                type="text"
                id="addressSuite"
                name="addressSuite"
                value={formData.addressSuite}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter suite number"
              />
            </div>

            <div>
              <label htmlFor="addressCity" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                City
              </label>
              <input
                type="text"
                id="addressCity"
                name="addressCity"
                value={formData.addressCity}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter city"
              />
            </div>

            <div>
              <label htmlFor="addressZipcode" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Zipcode
              </label>
              <input
                type="text"
                id="addressZipcode"
                name="addressZipcode"
                value={formData.addressZipcode}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter zipcode"
              />
            </div>
          </div>
        </div>

        {/* Geolocation */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Geolocation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="geoLat" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Latitude
              </label>
              <input
                type="number"
                step="any"
                id="geoLat"
                name="geoLat"
                value={formData.geoLat}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter latitude"
              />
            </div>

            <div>
              <label htmlFor="geoLng" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Longitude
              </label>
              <input
                type="number"
                step="any"
                id="geoLng"
                name="geoLng"
                value={formData.geoLng}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter longitude"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="btn-secondary"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!isFormValid || showSuccess}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Create User
          </button>
        </div>
      </form>
    </div>
  );
}
