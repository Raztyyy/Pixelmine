import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null); // store decoded user

  // On mount: load token from localStorage and fetch user data
  useEffect(() => {
    const stored = localStorage.getItem("token");
    if (stored) {
      setToken(stored);
      fetchProfile(stored); // decode/verify token via backend
    }
  }, []);

  // Fetch user data from backend using token
  const fetchProfile = async (jwt) => {
    try {
      const res = await fetch("https://pixelmine.org:3001/api/profile", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      const data = await res.json();
      if (res.ok) {
        setUser(data.user); // store decoded user object
      } else {
        console.error("Failed to fetch profile:", data.error);
        logout(); // token might be expired/invalid
      }
    } catch (err) {
      console.error("Error fetching profile:", err);
      logout();
    }
  };

  // On login: save token and fetch profile
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

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated,
        user, // 👈 now available everywhere
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
