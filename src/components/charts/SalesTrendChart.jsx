import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { name: 'Jan', Sales: 4000 }, { name: 'Feb', Sales: 3000 },
  { name: 'Mar', Sales: 5000 }, { name: 'Apr', Sales: 4500 },
  { name: 'May', Sales: 6000 }, { name: 'Jun', Sales: 5500 },
];

const SalesTrendChart = () => (
  <div style={{ backgroundColor: 'var(--bg-card)', padding: '20px', borderRadius: '14px', border: '1px solid var(--border)' }}>
    <h3 style={{ marginBottom: '15px', fontSize: '16px' }}>Monthly Sales Revenue Trend</h3>
    <div style={{ width: '100%', height: 220 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} />
          <YAxis stroke="var(--text-muted)" fontSize={12} />
          <Tooltip contentStyle={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-main)' }} />
          <Area type="monotone" dataKey="Sales" stroke="var(--accent)" fill="var(--accent)" fillOpacity={0.1} strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default SalesTrendChart;