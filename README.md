# User Dashboard

A modern, responsive React application for managing and viewing user information. Built as a frontend internship assignment for Forty4 Consulting Services.

## 🚀 Features

### Core Requirements ✅
- **Dashboard Page**: Display users in a responsive card layout with search and filter functionality
- **User Details Page**: Comprehensive user information display with Google Maps integration
- **Create User Form**: Client-side form to add new users with validation
- **Global State Management**: Context API with useReducer for efficient state management
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Routing**: React Router DOM for seamless navigation

### Nice-to-Have Features ✅
- **Search & Filter**: Debounced search by name with real-time filtering
- **Sorting**: Sort users by name (A-Z / Z-A)
- **Pagination**: Client-side pagination with 6 users per page
- **Dark Mode**: Toggle between light and dark themes
- **Loading States**: Skeleton loaders and error handling
- **Accessibility**: Semantic HTML, keyboard navigation, focus states

## 🛠️ Tech Stack

- **React 18** - Modern React with functional components and hooks
- **Vite** - Fast build tool and development server
- **React Router DOM v6** - Client-side routing
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Context API + useReducer** - Global state management (chosen over Redux for simplicity)

## 📁 Project Structure

```
user-dashboard/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── UserCard.jsx
│   │   ├── UserGrid.jsx
│   │   ├── Loader.jsx
│   │   ├── ErrorState.jsx
│   │   ├── EmptyState.jsx
│   │   ├── Pagination.jsx
│   │   ├── SortSelect.jsx
│   │   └── ThemeToggle.jsx
│   ├── context/
│   │   └── UserContext.jsx
│   ├── hooks/
│   │   └── useDebounce.js
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── UserDetails.jsx
│   │   ├── CreateUser.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd user-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 📱 Screenshots

*Screenshots will be added here after deployment*

- `/screenshots/dashboard-light.png` - Dashboard in light mode
- `/screenshots/dashboard-dark.png` - Dashboard in dark mode
- `/screenshots/user-details.png` - User details page
- `/screenshots/create-user.png` - Create user form
- `/screenshots/mobile-view.png` - Mobile responsive view

## 🎯 Key Features Explained

### Global State Management
- **Context + useReducer**: Chosen over Redux for this project size
- **Actions**: FETCH_START, FETCH_SUCCESS, FETCH_ERROR, ADD_USER, RETRY_FETCH
- **Initial Fetch**: Automatically loads users from API on app mount

### Search & Filter
- **Debounced Search**: 300ms delay to prevent excessive API calls
- **Case-insensitive**: Search works regardless of case
- **Real-time**: Results update as you type

### Responsive Design
- **Mobile-first**: Designed for mobile devices first
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid System**: Responsive grid that adapts to screen size

### Form Validation
- **Required Fields**: Name, email, phone, company name
- **Email Validation**: Basic email format validation
- **Real-time Feedback**: Errors clear as user types
- **Disabled Submit**: Button disabled until form is valid

## 🔧 Technical Decisions

### Why Context + useReducer over Redux?
- **Simplicity**: No additional dependencies
- **Project Size**: Appropriate for this scale
- **Learning**: Demonstrates modern React patterns
- **Performance**: Sufficient for this use case

### Why Tailwind CSS?
- **Rapid Development**: Utility classes speed up development
- **Consistency**: Built-in design system
- **Responsive**: Easy responsive design
- **Dark Mode**: Built-in dark mode support

### API Integration
- **Data Source**: https://jsonplaceholder.typicode.com/users
- **Error Handling**: Graceful error states with retry functionality
- **Loading States**: Skeleton loaders for better UX

## 🧪 Testing Considerations

The app handles various edge cases:
- **Network Errors**: Retry functionality with user-friendly messages
- **Empty States**: Proper messaging when no users found
- **Invalid Routes**: 404 page for unknown URLs
- **Form Validation**: Comprehensive client-side validation
- **Missing Data**: Graceful handling of optional user fields

## 📝 Notes for Reviewers

### Code Quality
- **Modular Components**: Small, reusable components
- **Custom Hooks**: useDebounce for search optimization
- **Semantic HTML**: Proper accessibility markup
- **Comments**: Key sections documented

### Performance
- **Debounced Search**: Prevents excessive filtering
- **Memoization**: useMemo for expensive operations
- **Lazy Loading**: Could be added for larger datasets
- **Bundle Size**: Minimal dependencies

### Accessibility
- **Keyboard Navigation**: All interactive elements accessible
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators
- **Color Contrast**: Meets WCAG guidelines

### Future Enhancements
- **Local Storage**: Persist user preferences
- **Advanced Filtering**: Filter by company, location
- **Export Functionality**: Export user data
- **Real-time Updates**: WebSocket integration
- **Unit Tests**: Jest and React Testing Library

## 📄 License

This project is created for the Forty4 Consulting Services internship assignment.

## 🤝 Contributing

This is an assignment project, but feedback and suggestions are welcome!

---

**Built with ❤️ for Forty4 Consulting Services**
