import React, { createContext, useState, useContext } from 'react';

// Context create kiya
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Shuru mein user ko state mein dummy data de dete hain
  const [user, setUser] = useState({ name: 'Admin User' });

  const login = () => setUser({ name: 'Admin User' });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Yeh wo custom hook hai jo Login.jsx ko chahiye!
export const useAuth = () => {
  return useContext(AuthContext);
};