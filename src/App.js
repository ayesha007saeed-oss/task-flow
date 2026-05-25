import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext'; // Theme missing wrap ko vapas add kiya!
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Settings from './pages/Settings';
import Team from './pages/Team';
import Reports from './pages/Reports';
import Integrations from './pages/Integrations';
import Login from './pages/Login';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Login Screen (Bina sidebar aur top context grids ke) */}
          <Route path="/login" element={<Login />} />

          {/* Main Application Inner Shell Layout */}
          <Route
            path="/*"
            element={
              <div className="main-layout">
                <Sidebar />
                <div className="content-area">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/integrations" element={<Integrations />} />
                    <Route path="/settings" element={<Settings />} />
                    {/* Fallback configuration redirection */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;