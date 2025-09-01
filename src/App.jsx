import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import UserDetails from './pages/UserDetails';
import CreateUser from './pages/CreateUser';
import NotFound from './pages/NotFound';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users/:id" element={<UserDetails />} />
              <Route path="/create" element={<CreateUser />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
