# User Dashboard

A modern and responsive **User Dashboard** built with **React + Vite + TailwindCSS**.  
This project demonstrates fetching and displaying user data from a public API in a structured and visually appealing way.  
It is designed to showcase **frontend development skills**, clean UI, and integration with external APIs.

---

## 🚀 Features

- 📋 **User Listing** – Fetches users dynamically from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users).  
- 🔍 **User Details Panel** – Displays name, email, phone, and address in a clean layout.  
- ⬅️➡️ **Navigation Controls** – Quickly move between users with previous/next buttons.  
- 🎨 **Responsive UI** – Optimized for desktops, tablets, and mobile screens.  
- 🌙 **Dark Mode** – Supports light and dark themes.  
- ⚡ **Fast Development Setup** – Powered by Vite for instant hot reloading.  

---

## 🛠️ Tech Stack

- **React 18** - Modern React with functional components and hooks
- **Vite** - Fast build tool and development server
- **React Router DOM v6** - Client-side routing
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Context API + useReducer** - Global state management (chosen over Redux for simplicity)

---

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

---