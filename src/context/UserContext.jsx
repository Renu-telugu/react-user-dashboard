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

  // Fetch users from API
  const fetchUsers = async () => {
    try {
      dispatch({ type: ACTIONS.FETCH_START });
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: response.data });
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
