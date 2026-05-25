import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Settings = () => {
  const [settings, setSettings] = useState({
    adminName: 'Taskflow Controller',
    email: 'admin@taskflow.com',
    notifications: true
  });

  const handleSave = () => {
    alert(`Settings Saved Successfully!\nName: ${settings.adminName}\nAlerts: ${settings.notifications ? 'ON' : 'OFF'}`);
  };

  return (
    <div style={{ padding: '30px', width: '100%', overflowY: 'auto' }}>
      <Navbar title="Account Settings" />
      <div style={{ backgroundColor: 'var(--bg-card)', padding: '30px', borderRadius: '16px', border: '1px solid var(--border)', maxWidth: '600px' }}>
        
        <h3 style={{ marginBottom: '25px', fontSize: '18px', borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>Workspace Profile Configuration</h3>
        
        <div style={{ marginBottom: '18px' }}>
          <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px', color: 'var(--text-muted)' }}>Admin Name</label>
          <input 
            type="text" 
            value={settings.adminName} 
            onChange={(e) => setSettings({...settings, adminName: e.target.value})}
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '15px' }} 
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px', color: 'var(--text-muted)' }}>Primary Contact Email</label>
          <input 
            type="email" 
            value={settings.email} 
            onChange={(e) => setSettings({...settings, email: e.target.value})}
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '15px' }} 
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '30px' }}>
          <input 
            type="checkbox" 
            checked={settings.notifications}
            onChange={(e) => setSettings({...settings, notifications: e.target.checked})}
            style={{ width: '18px', height: '18px', accentColor: 'var(--accent)', cursor: 'pointer' }}
          />
          <label style={{ fontSize: '15px' }}>Enable System Push Notifications</label>
        </div>

        <button onClick={handleSave} style={{ backgroundColor: 'var(--accent)', color: '#fff', border: 'none', padding: '14px 24px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', width: '100%', fontSize: '15px', transition: '0.2s' }}>
          Save Preferences
        </button>
      </div>
    </div>
  );
};

export default Settings;