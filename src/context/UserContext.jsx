import { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';

// Initial state
const initialState = {
  users: [],
  status: 'idle', // 'idle' | 'loading' | 'success' | 'error'
  error: null
};

// Action types
const ACTIONS = {
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
  ADD_USER: 'ADD_USER',
  RETRY_FETCH: 'RETRY_FETCH'
};

// Mock users with realistic Indian data
const mockUsers = [
  {
    id: 11,
    name: 'Priya Sharma',
    username: 'priya_sharma',
    email: 'priya.sharma@techcorp.in',
    phone: '+91-98765-43210',
    website: 'techcorp.in',
    company: {
      name: 'TechCorp Solutions',
      catchPhrase: 'Innovating for tomorrow, delivering today'
    },
    address: {
      street: 'MG Road',
      suite: 'Suite 501',
      city: 'Bangalore',
      zipcode: '560001',
      geo: {
        lat: '12.9716',
        lng: '77.5946'
      }
    }
  },
  {
    id: 12,
    name: 'Rajesh Kumar',
    username: 'rajesh_kumar',
    email: 'rajesh.kumar@infosys.com',
    phone: '+91-87654-32109',
    website: 'infosys.com',
    company: {
      name: 'Infosys Limited',
      catchPhrase: 'Building tomorrow\'s enterprise'
    },
    address: {
      street: 'Electronics City',
      suite: 'Phase 1',
      city: 'Bangalore',
      zipcode: '560100',
      geo: {
        lat: '12.8458',
        lng: '77.6658'
      }
    }
  },
  {
    id: 13,
    name: 'Anjali Patel',
    username: 'anjali_patel',
    email: 'anjali.patel@tcs.com',
    phone: '+91-76543-21098',
    website: 'tcs.com',
    company: {
      name: 'Tata Consultancy Services',
      catchPhrase: 'Building on Belief'
    },
    address: {
      street: 'Bandra Kurla Complex',
      suite: 'Tower 3',
      city: 'Mumbai',
      zipcode: '400051',
      geo: {
        lat: '19.0760',
        lng: '72.8777'
      }
    }
  },
  {
    id: 14,
    name: 'Vikram Singh',
    username: 'vikram_singh',
    email: 'vikram.singh@wipro.com',
    phone: '+91-65432-10987',
    website: 'wipro.com',
    company: {
      name: 'Wipro Limited',
      catchPhrase: 'Spirit of Wipro'
    },
    address: {
      street: 'Doddakannelli',
      suite: 'Sarjapur Road',
      city: 'Bangalore',
      zipcode: '560035',
      geo: {
        lat: '12.9349',
        lng: '77.6050'
      }
    }
  },
  {
    id: 15,
    name: 'Meera Reddy',
    username: 'meera_reddy',
    email: 'meera.reddy@hcl.com',
    phone: '+91-54321-09876',
    website: 'hcl.com',
    company: {
      name: 'HCL Technologies',
      catchPhrase: 'Ideapreneurship'
    },
    address: {
      street: 'Plot 3A',
      suite: 'Sector 126',
      city: 'Noida',
      zipcode: '201304',
      geo: {
        lat: '28.5355',
        lng: '77.3910'
      }
    }
  },
  {
    id: 16,
    name: 'Arun Gupta',
    username: 'arun_gupta',
    email: 'arun.gupta@mindtree.com',
    phone: '+91-43210-98765',
    website: 'mindtree.com',
    company: {
      name: 'Mindtree Limited',
      catchPhrase: 'Welcome to possible'
    },
    address: {
      street: 'Global Village',
      suite: 'Tech Park',
      city: 'Bangalore',
      zipcode: '560045',
      geo: {
        lat: '12.9716',
        lng: '77.5946'
      }
    }
  },
  {
    id: 17,
    name: 'Sneha Iyer',
    username: 'sneha_iyer',
    email: 'sneha.iyer@cognizant.com',
    phone: '+91-32109-87654',
    website: 'cognizant.com',
    company: {
      name: 'Cognizant Technology Solutions',
      catchPhrase: 'Engineering modern business'
    },
    address: {
      street: 'Phoenix MarketCity',
      suite: 'Whitefield',
      city: 'Bangalore',
      zipcode: '560066',
      geo: {
        lat: '12.9716',
        lng: '77.5946'
      }
    }
  },
  {
    id: 18,
    name: 'Rahul Verma',
    username: 'rahul_verma',
    email: 'rahul.verma@capgemini.com',
    phone: '+91-21098-76543',
    website: 'capgemini.com',
    company: {
      name: 'Capgemini India',
      catchPhrase: 'Get the future you want'
    },
    address: {
      street: 'Cyber City',
      suite: 'DLF Phase 2',
      city: 'Gurgaon',
      zipcode: '122002',
      geo: {
        lat: '28.4595',
        lng: '77.0266'
      }
    }
  },
  {
    id: 19,
    name: 'Kavita Joshi',
    username: 'kavita_joshi',
    email: 'kavita.joshi@accenture.com',
    phone: '+91-10987-65432',
    website: 'accenture.com',
    company: {
      name: 'Accenture Solutions',
      catchPhrase: 'Let there be change'
    },
    address: {
      street: 'Bandra East',
      suite: 'Mumbai Central',
      city: 'Mumbai',
      zipcode: '400051',
      geo: {
        lat: '19.0760',
        lng: '72.8777'
      }
    }
  },
  {
    id: 20,
    name: 'Amit Shah',
    username: 'amit_shah',
    email: 'amit.shah@oracle.com',
    phone: '+91-09876-54321',
    website: 'oracle.com',
    company: {
      name: 'Oracle India',
      catchPhrase: 'Can\'t break it, can\'t break in'
    },
    address: {
      street: 'DLF Cyber City',
      suite: 'Phase 3',
      city: 'Gurgaon',
      zipcode: '122002',
      geo: {
        lat: '28.4595',
        lng: '77.0266'
      }
    }
  }
];

// Reducer function
function userReducer(state, action) {
  switch (action.type) {
    case ACTIONS.FETCH_START:
      return {
        ...state,
        status: 'loading',
        error: null
      };
    
    case ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        status: 'success',
        users: action.payload,
        error: null
      };
    
    case ACTIONS.FETCH_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload
      };
    
    case ACTIONS.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    
    case ACTIONS.RETRY_FETCH:
      return {
        ...state,
        status: 'idle',
        error: null
      };
    
    default:
      return state;
  }
}

// Create context
const UserContext = createContext();

// Provider component
export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Fetch users from API and combine with mock users
  const fetchUsers = async () => {
    try {
      dispatch({ type: ACTIONS.FETCH_START });
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      
      // Combine API users with mock users
      const allUsers = [...response.data, ...mockUsers];
      
      dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: allUsers });
    } catch (error) {
      dispatch({ 
        type: ACTIONS.FETCH_ERROR, 
        payload: error.message || 'Failed to fetch users' 
      });
    }
  };

  // Retry fetch function
  const retryFetch = () => {
    dispatch({ type: ACTIONS.RETRY_FETCH });
    fetchUsers();
  };

  // Add new user function
  const addUser = (user) => {
    dispatch({ type: ACTIONS.ADD_USER, payload: user });
  };

  // Initial fetch on mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const value = {
    ...state,
    fetchUsers,
    retryFetch,
    addUser
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook to use the context
export function useUsers() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUsers must be used within a UserProvider');
  }
  return context;
}
