// context/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("token");
    if (stored) {
      setToken(stored);
      fetchProfile(stored);
    }
  }, []);

  const fetchProfile = async (jwt) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/profile`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      const data = await res.json();
      if (res.ok) {
        setUser(data);
        return data;
      } else {
        console.error("Failed to fetch profile:", data.error);
        logout();
        return null;
      }
    } catch (err) {
      console.error("Error fetching profile:", err);
      logout();
      return null;
    }
  };

  const login = (jwt) => {
    localStorage.setItem("token", jwt);
    setToken(jwt);
    fetchProfile(jwt);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  const refreshProfile = async () => (token ? await fetchProfile(token) : null);

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        isAuthenticated: !!token,
        refreshProfile,
        setUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
