import React from 'react';

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  const login = (username, password) => {
    // ここで通常はバックエンドサーバーと通信してユーザー認証を行いますが、
    // 今回は簡単のため固定のユーザー名とパスワードでチェックします。
    if (username === 'user' && password === 'password') {
      setUser({ name: 'user' });
    } else {
      alert('Invalid username or password');
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
