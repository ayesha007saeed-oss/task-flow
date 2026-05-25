import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Hook import kiya
import { LayoutDashboard, Package, Settings, Users, BarChart3, Radio, LogOut, Compass } from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth(); // Logout function nikaala

  const handleSignOut = () => {
    logout(); // Auth state clear karega
    navigate('/login'); // Login screen par le jayega
  };

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'Inventory', icon: Package, path: '/inventory' },
    { name: 'Team', icon: Users, path: '/team' },
    { name: 'Reports', icon: BarChart3, path: '/reports' },
    { name: 'Integrations', icon: Radio, path: '/integrations' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <div style={{ width: '260px', backgroundColor: 'var(--bg-sidebar)', borderRight: '1px solid var(--border)', height: '100vh', display: 'flex', flexDirection: 'column', padding: '24px', shrink: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '35px' }}>
        <Compass size={24} color="var(--accent)" />
        <h2 style={{ color: 'var(--text-main)', fontSize: '22px', fontWeight: '800', letterSpacing: '0.5px' }}>TASKFLOW</h2>
      </div>

      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {menuItems.map((item) => (
          <NavLink 
            key={item.name} 
            to={item.path}
            style={({ isActive }) => ({
              display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '10px',
              color: isActive ? '#ffffff' : 'var(--text-muted)',
              backgroundColor: isActive ? 'var(--accent)' : 'transparent',
              fontWeight: isActive ? '600' : '400',
              transition: 'all 0.2s ease'
            })}
          >
            <item.icon size={18} />
            {item.name}
          </NavLink>
        ))}
      </nav>

      <button onClick={handleSignOut} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', background: 'rgba(239, 68, 68, 0.1)', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '15px', fontWeight: '600', width: '100%', borderRadius: '10px', transition: '0.2s' }}>
        <LogOut size={18} />
        Sign Out
      </button>
    </div>
  );
};

export default Sidebar;