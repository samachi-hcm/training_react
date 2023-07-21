import React from 'react';
import { AuthProvider, useAuth } from './AuthProvider';
import 'tailwindcss/tailwind.css';

const LoginPage = () => {
  const { login } = useAuth();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="p-8 bg-white rounded shadow-md w-80">
        <h2 className="mb-6 text-3xl font-bold text-center">Login</h2>
        <input 
          value={username} 
          onChange={e => setUsername(e.target.value)} 
          placeholder="Username" 
          className="w-full px-3 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          placeholder="Password" 
          type="password" 
          className="w-full px-3 py-2 mb-6 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button 
          onClick={handleLogin} 
          className="w-full px-3 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none"
        >
          Login
        </button>
      </div>
    </div>
  );
};

const LogoutButton = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <button onClick={logout} className="px-3 py-2 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none">
      Logout
    </button>
  );
};

export function Chinpo() {
  return (
    <AuthProvider>
      <LoginPage />
      <LogoutButton />
      {/* 他のコンポーネント */}
    </AuthProvider>
  );
};
