import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) { setError('Please fill in all fields.'); return; }
    setLoading(true);
    setError('');
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/signin`,
        { username, password },
        { headers: { 'Content-Type': 'application/json' } }
      );
      localStorage.setItem('jwtToken', response.data.token);
      navigate('/dashboard');
    } catch {
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => { if (e.key === 'Enter') handleLogin(); };

  return (
    <div style={{ minHeight: '100vh', background: '#05080f', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      {/* grid bg */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', opacity: 0.04,
        backgroundImage: 'linear-gradient(#334155 1px,transparent 1px),linear-gradient(90deg,#334155 1px,transparent 1px)',
        backgroundSize: '48px 48px'
      }} />

      <div style={{ width: '100%', maxWidth: '420px', position: 'relative', zIndex: 1 }}>
        {/* logo */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => navigate('/')}>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '16px' }}>E</div>
            <span style={{ color: '#f1f5f9', fontWeight: '700', fontSize: '18px' }}>E-School</span>
          </div>
        </div>

        {/* card */}
        <div style={{ background: '#0d1424', border: '1px solid #1e3a5f', borderRadius: '20px', padding: '36px', boxShadow: '0 25px 50px rgba(0,0,0,0.5)' }}>
          <h1 style={{ color: '#f1f5f9', fontWeight: '800', fontSize: '26px', marginBottom: '6px' }}>Welcome back</h1>
          <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '28px' }}>Sign in to continue learning</p>

          {error && (
            <div style={{ background: 'rgba(127,29,29,0.3)', border: '1px solid rgba(185,28,28,0.5)', color: '#f87171', fontSize: '13px', padding: '12px 16px', borderRadius: '10px', marginBottom: '20px' }}>
              {error}
            </div>
          )}

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', color: '#cbd5e1', fontSize: '13px', fontWeight: '500', marginBottom: '6px' }}>Email address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{ width: '100%', padding: '12px 16px', background: '#05080f', border: '1px solid #1e3a5f', borderRadius: '10px', color: '#f1f5f9', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', color: '#cbd5e1', fontSize: '13px', fontWeight: '500', marginBottom: '6px' }}>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{ width: '100%', padding: '12px 16px', background: '#05080f', border: '1px solid #1e3a5f', borderRadius: '10px', color: '#f1f5f9', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            style={{ width: '100%', background: loading ? '#1d4ed8' : '#2563eb', color: 'white', fontWeight: '600', fontSize: '15px', padding: '13px', borderRadius: '10px', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, transition: 'background 0.2s' }}
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>

          <p style={{ marginTop: '24px', textAlign: 'center', color: '#94a3b8', fontSize: '13px' }}>
            Don't have an account?{' '}
            <span onClick={() => navigate('/signup')} style={{ color: '#60a5fa', cursor: 'pointer', textDecoration: 'underline' }}>
              Create one
            </span>
          </p>
        </div>

        {/* demo hint */}
        <div style={{ marginTop: '16px', background: 'rgba(13,20,36,0.8)', border: '1px solid #1e3a5f', borderRadius: '14px', padding: '16px', textAlign: 'center' }}>
          <p style={{ color: '#94a3b8', fontSize: '12px', marginBottom: '4px' }}>Demo credentials</p>
          <p style={{ color: '#cbd5e1', fontSize: '13px', fontFamily: 'monospace' }}>demo@eschool.com / demo1234</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
