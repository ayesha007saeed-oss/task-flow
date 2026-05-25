import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Shield, Mail, Trash2, PlusCircle } from 'lucide-react';

const Team = () => {
  const [members, setMembers] = useState([
    { id: 1, name: 'Ayesha Khan', role: 'Project Manager', email: 'ayesha@taskflow.com', status: 'Active' },
    { id: 2, name: 'Zain Ahmed', role: 'Lead Developer', email: 'zain@taskflow.com', status: 'In Meeting' }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({ name: '', role: '', email: '', status: 'Active' });

  const handleDelete = (id) => setMembers(members.filter(m => m.id !== id));

  const handleSave = (e) => {
    e.preventDefault();
    setMembers([...members, { id: Date.now(), ...form }]);
    setIsModalOpen(false);
    setForm({ name: '', role: '', email: '', status: 'Active' });
  };

  return (
    <div style={{ padding: '30px', width: '100%', overflowY: 'auto' }}>
      <Navbar title="Team Directory" />
      
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <button onClick={() => setIsModalOpen(true)} style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--accent)', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>
          <PlusCircle size={16} /> Add Member
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {members.map((m) => (
          <div key={m.id} style={{ backgroundColor: 'var(--bg-card)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)', position: 'relative' }}>
            <button onClick={() => handleDelete(m.id)} style={{ position: 'absolute', top: '24px', right: '24px', background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}><Trash2 size={18} /></button>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', paddingRight: '20px' }}>{m.name}</h3>
            <span style={{ fontSize: '12px', padding: '4px 8px', borderRadius: '20px', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent)', display: 'inline-block', marginBottom: '10px' }}>{m.status}</span>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}><Shield size={14} /> {m.role}</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={14} /> {m.email}</p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <form onSubmit={handleSave} style={{ backgroundColor: 'var(--bg-sidebar)', padding: '24px', borderRadius: '16px', width: '350px', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '15px' }}>Add Team Member</h3>
            <input required type="text" placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={{ width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-main)', color: 'var(--text-main)' }} />
            <input required type="text" placeholder="Role" value={form.role} onChange={e => setForm({...form, role: e.target.value})} style={{ width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-main)', color: 'var(--text-main)' }} />
            <input required type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-main)', color: 'var(--text-main)' }} />
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button type="button" onClick={() => setIsModalOpen(false)} style={{ padding: '10px 16px', background: 'none', border: '1px solid var(--border)', color: 'var(--text-main)', borderRadius: '8px', cursor: 'pointer' }}>Cancel</button>
              <button type="submit" style={{ padding: '10px 16px', background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>Save</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Team;