import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, User, Compass, ArrowRight } from 'lucide-react';

const Login = () => {
  const [isLoginView, setIsLoginView] = useState(true); // Toggle control state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || (!isLoginView && !name)) {
      alert("Kindly fill out all configuration parameters.");
      return;
    }
    
    // Auth pipeline authentication simulation
    login();
    navigate('/');
  };

  return (
    <div style={{
      height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'radial-gradient(circle at top right, #1e293b 0%, #0b0f19 100%)', padding: '20px'
    }}>
      <div style={{
        width: '100%', maxWidth: '440px', backgroundColor: '#111827', borderRadius: '24px',
        border: '1px solid #374151', padding: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        display: 'flex', flexDirection: 'column', gap: '28px'
      }}>
        
        {/* Logo / Branding */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Compass size={28} color="#10b981" />
            <h1 style={{ color: '#ffffff', fontSize: '26px', fontWeight: '800', letterSpacing: '1px' }}>TASKFLOW</h1>
          </div>
          <p style={{ color: '#9ca3af', fontSize: '14px', textAlign: 'center', marginTop: '4px' }}>
            {isLoginView ? 'Sign in to access your dashboard center node.' : 'Establish secure access terminal credentials.'}
          </p>
        </div>

        {/* Dynamic Form Structure */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          
          {/* Sign Up Mode Input Parameter */}
          {!isLoginView && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ color: '#9ca3af', fontSize: '13px', fontWeight: '500' }}>Full Name</label>
              <div style={{ position: 'relative' }}>
                <User size={16} color="#6b7280" style={{ position: 'absolute', left: '14px', top: '15px' }} />
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%', padding: '12px 16px 12px 42px', backgroundColor: '#1f2937', 
                    border: '1px solid #374151', borderRadius: '12px', color: '#ffffff', fontSize: '14px', outline: 'none'
                  }} 
                />
              </div>
            </div>
          )}

          {/* Email Address Node */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ color: '#9ca3af', fontSize: '13px', fontWeight: '500' }}>Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} color="#6b7280" style={{ position: 'absolute', left: '14px', top: '15px' }} />
              <input 
                type="email" 
                placeholder="admin@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%', padding: '12px 16px 12px 42px', backgroundColor: '#1f2937', 
                  border: '1px solid #374151', borderRadius: '12px', color: '#ffffff', fontSize: '14px', outline: 'none'
                }} 
              />
            </div>
          </div>

          {/* Password Security Token Field */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ color: '#9ca3af', fontSize: '13px', fontWeight: '500' }}>Security Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} color="#6b7280" style={{ position: 'absolute', left: '14px', top: '15px' }} />
              <input 
                type="password" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%', padding: '12px 16px 12px 42px', backgroundColor: '#1f2937', 
                  border: '1px solid #374151', borderRadius: '12px', color: '#ffffff', fontSize: '14px', outline: 'none'
                }} 
              />
            </div>
          </div>

          {/* Action Trigger Button */}
          <button type="submit" style={{
            backgroundColor: '#10b981', color: '#ffffff', border: 'none', padding: '14px',
            borderRadius: '12px', fontSize: '15px', fontWeight: '600', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            marginTop: '10px', boxShadow: '0 4px 12px rgba(16,185,129,0.2)', transition: '0.2s'
          }}>
            {isLoginView ? 'Authenticate Connection' : 'Register Terminal'}
            <ArrowRight size={16} />
          </button>
        </form>

        {/* View Toggle Pipeline Switch */}
        <div style={{ borderTop: '1px solid #374151', paddingTop: '20px', textAlign: 'center' }}>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>
            {isLoginView ? "Don't have a secure workspace?" : "Already managing data node?"}{' '}
            <span 
              onClick={() => {
                setIsLoginView(!isLoginView);
                // Switch karte hi form inputs flush control reset
                setEmail('');
                setPassword('');
                setName('');
              }}
              style={{ color: '#10b981', cursor: 'pointer', fontWeight: '600', textDecoration: 'underline' }}
            >
              {isLoginView ? 'Sign Up here' : 'Sign In here'}
            </span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;