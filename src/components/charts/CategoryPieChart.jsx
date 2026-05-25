import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Peripherals', value: 450 },
  { name: 'Components', value: 300 },
  { name: 'Monitors', value: 250 },
];
const COLORS = ['#10b981', '#3b82f6', '#f59e0b'];

const CategoryPieChart = () => (
  <div style={{ backgroundColor: 'var(--bg-card)', padding: '20px', borderRadius: '14px', border: '1px solid var(--border)' }}>
    <h3 style={{ marginBottom: '15px', fontSize: '16px' }}>Category Breakdown</h3>
    <div style={{ width: '100%', height: 220 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }} />
          <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default CategoryPieChart;