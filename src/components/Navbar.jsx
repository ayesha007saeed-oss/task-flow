import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Bell, Search } from 'lucide-react';

const Navbar = ({ title }) => {
  // Theme state aur function ko import kiya
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-main)' }}>{title}</h1>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        
        {/* Search Bar */}
        <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-card)', padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--border)' }}>
          <Search size={18} color="var(--text-muted)" style={{ marginRight: '8px' }} />
          <input type="text" placeholder="Search..." style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', outline: 'none', width: '200px' }} />
        </div>
        
        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme} 
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', padding: '10px', borderRadius: '50%', cursor: 'pointer', color: 'var(--text-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.3s' }}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        {/* Notifications Button */}
        <button style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', padding: '10px', borderRadius: '50%', cursor: 'pointer', color: 'var(--text-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.3s' }}>
          <Bell size={20} />
        </button>
        
      </div>
    </div>
  );
};

export default Navbar;