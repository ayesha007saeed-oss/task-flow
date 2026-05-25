import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { ToggleLeft, ToggleRight, PlusCircle } from 'lucide-react';

const Integrations = () => {
  const [apps, setApps] = useState([
    { id: 1, name: 'Firebase Console', desc: 'Realtime Database & Web Hosting Sync', active: true },
    { id: 2, name: 'Slack Notifications', desc: 'Instant system updates inside channel', active: false }
  ]);

  const toggleApp = (id) => {
    setApps(apps.map(app => app.id === id ? { ...app, active: !app.active } : app));
  };

  return (
    <div style={{ padding: '30px', width: '100%', overflowY: 'auto' }}>
      <Navbar title="API Integrations" />
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <p style={{ color: 'var(--text-muted)' }}>Manage your connected workspace apps.</p>
        <button onClick={() => alert('New integration pipeline incoming...')} style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--accent)', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>
          <PlusCircle size={16} /> Add Custom Webhook
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {apps.map((app) => (
          <div key={app.id} style={{ backgroundColor: 'var(--bg-card)', padding: '20px', borderRadius: '14px', border: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>{app.name}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{app.desc}</p>
            </div>
            <div onClick={() => toggleApp(app.id)} style={{ cursor: 'pointer', color: app.active ? 'var(--accent)' : 'var(--text-muted)', transition: '0.2s' }}>
              {app.active ? <ToggleRight size={36} /> : <ToggleLeft size={36} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integrations;