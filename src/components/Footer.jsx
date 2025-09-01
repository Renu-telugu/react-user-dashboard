export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-users text-white text-sm"></i>
              </div>
              <span className="text-xl font-bold">User Dashboard</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A modern, responsive user management system built with React, Vite, and Tailwind CSS. 
              Manage your users efficiently with a beautiful and intuitive interface.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <i className="fas fa-user text-blue-400 w-4 h-4"></i>
                <span className="text-gray-300">Telugu Renuka</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-blue-400 w-4 h-4"></i>
                <a 
                  href="mailto:telugurenuka40@gmail.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  telugurenuka40@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-code text-blue-400 w-4 h-4"></i>
                <span className="text-gray-300">Full Stack Developer</span>
              </div>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Built With</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs font-medium">
                React
              </span>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs font-medium">
                Vite
              </span>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs font-medium">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs font-medium">
                JavaScript
              </span>
            </div>
            <div className="pt-4">
              <p className="text-gray-400 text-xs">
                Responsive design optimized for mobile, tablet, and desktop devices.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Telugu Renuka. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="mailto:telugurenuka40@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                title="Email"
              >
                <i className="fas fa-envelope w-4 h-4"></i>
              </a>
              <a 
                href="https://github.com"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                title="GitHub"
              >
                <i className="fab fa-github w-4 h-4"></i>
              </a>
              <a 
                href="https://linkedin.com"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin w-4 h-4"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
