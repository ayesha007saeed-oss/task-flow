import React from 'react';

export const QuickActions = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-card)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)' }}>
      <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>Quick Actions</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button onClick={() => alert('Task setup initiated')} style={{ width: '100%', padding: '12px', background: 'var(--hover)', border: '1px solid var(--border)', borderRadius: '10px', color: 'var(--text-main)', fontWeight: '600', cursor: 'pointer', textAlign: 'left' }}>
          Create New Task
        </button>
        <button onClick={() => alert('Redirecting to Inventory...')} style={{ width: '100%', padding: '12px', background: 'var(--hover)', border: '1px solid var(--border)', borderRadius: '10px', color: 'var(--text-main)', fontWeight: '600', cursor: 'pointer', textAlign: 'left' }}>
          Add Inventory Item
        </button>
      </div>
    </div>
  );
};

export const RecentActivity = () => {
  const activities = [
    { text: 'Create new Task', time: '1 month ago' },
    { text: 'Feed list updated', time: '1 month ago' },
    { text: 'Add Inventory item', time: '1 month ago' },
    { text: 'Hock reard adjusted', time: '1 month ago' },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-card)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)' }}>
      <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>Recent Activity</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {activities.map((act, i) => (
          <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent)', marginTop: '6px', flexShrink: 0 }}></div>
            <div>
              <p style={{ fontSize: '14px', fontWeight: '500' }}>{act.text}</p>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{act.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};