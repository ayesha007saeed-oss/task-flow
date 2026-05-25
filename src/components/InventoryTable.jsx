import React, { useState } from 'react';
import { Edit2, Trash2, Plus } from 'lucide-react';

const InventoryTable = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Mechanical Keyboard', price: '$45.00', status: 'In Stock', color: '#10b981' },
    { id: 2, name: 'Gaming Mouse', price: '$25.00', status: 'Low Stock', color: '#f59e0b' },
    { id: 3, name: 'UltraWide Monitor', price: '$299.00', status: 'Out of Stock', color: '#ef4444' },
  ]);

  const [form, setForm] = useState({ id: null, name: '', price: '', status: 'In Stock' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const statusColors = { 'In Stock': '#10b981', 'Low Stock': '#f59e0b', 'Out of Stock': '#ef4444' };
    
    if (form.id) {
      setItems(items.map(i => i.id === form.id ? { ...form, color: statusColors[form.status] } : i));
    } else {
      setItems([...items, { id: Date.now(), ...form, color: statusColors[form.status] }]);
    }
    setIsModalOpen(false);
    setForm({ id: null, name: '', price: '', status: 'In Stock' });
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-card)', borderRadius: '14px', border: '1px solid var(--border)', padding: '24px', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Inventory Overview</h3>
        <button onClick={() => setIsModalOpen(true)} style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: 'var(--accent)', color: '#fff', border: 'none', padding: '8px 14px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>
          <Plus size={16} /> Add Product
        </button>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ color: 'var(--text-muted)', fontSize: '13px', textTransform: 'uppercase', borderBottom: '1px solid var(--border)' }}>
            <th style={{ padding: '12px 8px' }}>Product Name</th>
            <th style={{ padding: '12px 8px' }}>Price</th>
            <th style={{ padding: '12px 8px' }}>Status</th>
            <th style={{ padding: '12px 8px', textAlign: 'right' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id} style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: '16px 8px', fontWeight: '500' }}>{item.name}</td>
              <td style={{ padding: '16px 8px' }}>{item.price}</td>
              <td style={{ padding: '16px 8px', color: item.color, fontWeight: '600' }}>{item.status}</td>
              <td style={{ padding: '16px 8px', textAlign: 'right' }}>
                <button onClick={() => { setForm(item); setIsModalOpen(true); }} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', marginRight: '12px' }}><Edit2 size={16} /></button>
                <button onClick={() => handleDelete(item.id)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}><Trash2 size={16} /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 100 }}>
          <form onSubmit={handleSubmit} style={{ backgroundColor: 'var(--bg-card)', padding: '24px', borderRadius: '12px', width: '340px', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '15px' }}>{form.id ? 'Edit Product' : 'Add New Product'}</h3>
            <input required type="text" placeholder="Product Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={{ width: '100%', padding: '10px', marginBottom: '12px', borderRadius: '6px', border: '1px solid var(--border)', background: 'var(--bg-main)', color: 'var(--text-main)' }} />
            <input required type="text" placeholder="Price (e.g. $45.00)" value={form.price} onChange={e => setForm({...form, price: e.target.value})} style={{ width: '100%', padding: '10px', marginBottom: '12px', borderRadius: '6px', border: '1px solid var(--border)', background: 'var(--bg-main)', color: 'var(--text-main)' }} />
            <select value={form.status} onChange={e => setForm({...form, status: e.target.value})} style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '6px', border: '1px solid var(--border)', background: 'var(--bg-main)', color: 'var(--text-main)' }}>
              <option value="In Stock">In Stock</option>
              <option value="Low Stock">Low Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button type="button" onClick={() => { setIsModalOpen(false); setForm({ id: null, name: '', price: '', status: 'In Stock' }); }} style={{ padding: '8px 14px', background: 'none', border: '1px solid var(--border)', color: 'var(--text-main)', borderRadius: '6px', cursor: 'pointer' }}>Cancel</button>
              <button type="submit" style={{ padding: '8px 14px', background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>Save</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default InventoryTable;