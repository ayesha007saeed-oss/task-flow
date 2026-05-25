import React from 'react';

const StatsCard = ({ title, value, change, icon: Icon }) => {
  return (
    <div style={{ backgroundColor: 'var(--bg-card)', padding: '24px', borderRadius: '14px', border: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: '500', marginBottom: '6px' }}>{title}</p>
        <h3 style={{ fontSize: '28px', fontWeight: '700', color: 'var(--text-main)' }}>{value}</h3>
        {change && <span style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: '600' }}>{change} this month</span>}
      </div>
      {Icon && (
        <div style={{ backgroundColor: 'var(--hover)', padding: '12px', borderRadius: '10px', color: 'var(--accent)' }}>
          <Icon size={24} />
        </div>
      )}
    </div>
  );
};

export default StatsCard;