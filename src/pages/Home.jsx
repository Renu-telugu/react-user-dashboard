import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-16">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <i className="fas fa-users text-white text-3xl"></i>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
              User Dashboard
              <span className="block text-blue-600">
                Management System
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              A modern, responsive user management system built with React, Vite, and Tailwind CSS. 
              Manage your users efficiently with a beautiful and intuitive interface.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Explore Dashboard
              </Link>
              <a
                href="https://github.com/Renu-telugu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <i className="fab fa-github mr-2"></i>
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to manage users efficiently and beautifully
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl border border-blue-100 dark:border-gray-600 hover:shadow-xl hover:scale-105 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 animate-fade-in-up group cursor-pointer" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <i className="fas fa-search text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                Smart Search
              </h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                Find users instantly with our intelligent search functionality that filters by name with real-time results.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl border border-green-100 dark:border-gray-600 hover:shadow-xl hover:scale-105 hover:border-green-300 dark:hover:border-green-500 transition-all duration-300 animate-fade-in-up group cursor-pointer" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <i className="fas fa-sort text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                Advanced Sorting
              </h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                Sort users alphabetically in ascending or descending order for better organization and management.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl border border-purple-100 dark:border-gray-600 hover:shadow-xl hover:scale-105 hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300 animate-fade-in-up group cursor-pointer" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <i className="fas fa-mobile-alt text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                Responsive Design
              </h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                Fully responsive design that works perfectly on mobile, tablet, and desktop devices.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl border border-orange-100 dark:border-gray-600 hover:shadow-xl hover:scale-105 hover:border-orange-300 dark:hover:border-orange-500 transition-all duration-300 animate-fade-in-up group cursor-pointer" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <i className="fas fa-palette text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                Dark Mode
              </h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                Toggle between light and dark themes for comfortable viewing in any environment.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl border border-teal-100 dark:border-gray-600 hover:shadow-xl hover:scale-105 hover:border-teal-300 dark:hover:border-teal-500 transition-all duration-300 animate-fade-in-up group cursor-pointer" style={{ animationDelay: '0.5s' }}>
              <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <i className="fas fa-pagination text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                Smart Pagination
              </h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                Navigate through users with our circular pagination system that never gets stuck.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl border border-pink-100 dark:border-gray-600 hover:shadow-xl hover:scale-105 hover:border-pink-300 dark:hover:border-pink-500 transition-all duration-300 animate-fade-in-up group cursor-pointer" style={{ animationDelay: '0.6s' }}>
              <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <i className="fas fa-bolt text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                Lightning Fast
              </h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                Built with Vite for instant hot reloads and optimized performance for the best user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Built With Modern Technology
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Leveraging the latest tools and frameworks for optimal performance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <i className="fab fa-react text-blue-600 dark:text-blue-400 text-3xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">React</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Frontend Framework</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <i className="fas fa-bolt text-green-600 dark:text-green-400 text-3xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Vite</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Build Tool</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-cyan-100 dark:bg-cyan-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <i className="fab fa-css3-alt text-cyan-600 dark:text-cyan-400 text-3xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Tailwind</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">CSS Framework</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <i className="fab fa-js-square text-yellow-600 dark:text-yellow-400 text-3xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">JavaScript</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Programming Language</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Explore?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the power of modern user management with our intuitive dashboard
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <i className="fas fa-arrow-right mr-2"></i>
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
