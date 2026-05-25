import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { FileText, Download, Trash2, PlusCircle } from 'lucide-react';

const Reports = () => {
  const [reportsList, setReportsList] = useState([
    { id: 1, title: 'Q2 Inventory Audit Report', date: 'May 2026', size: '2.4 MB' },
    { id: 2, title: 'Monthly Sales Revenue Log', date: 'April 2026', size: '1.8 MB' }
  ]);

  const generateReport = () => {
    const newReport = { id: Date.now(), title: `System Auto Log ${Math.floor(Math.random() * 1000)}`, date: 'Just Now', size: '1.1 MB' };
    setReportsList([newReport, ...reportsList]);
  };

  const deleteReport = (id) => setReportsList(reportsList.filter(r => r.id !== id));

  return (
    <div style={{ padding: '30px', width: '100%', overflowY: 'auto' }}>
      <Navbar title="Analytical Reports" />
      <div style={{ backgroundColor: 'var(--bg-card)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3>Available System Logs</h3>
          <button onClick={generateReport} style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--accent)', color: '#fff', border: 'none', padding: '8px 14px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>
            <PlusCircle size={16} /> Generate New
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {reportsList.map((rep) => (
            <div key={rep.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px', borderRadius: '10px', background: 'var(--bg-main)', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <FileText color="var(--accent)" />
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: '600' }}>{rep.title}</h4>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Generated: {rep.date} • Size: {rep.size}</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <button onClick={() => alert('Downloading...')} style={{ background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer' }}><Download size={18} /></button>
                <button onClick={() => deleteReport(rep.id)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}><Trash2 size={18} /></button>
              </div>
            </div>
          ))}
          {reportsList.length === 0 && <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '20px' }}>No reports available.</p>}
        </div>
      </div>
    </div>
  );
};

export default Reports;