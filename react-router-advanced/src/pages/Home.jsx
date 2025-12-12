import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { login, logout, isAuthenticated } = useAuth();

  return (
    <div>
      <h1>Home Page</h1>

      {!isAuthenticated ? (
        <button onClick={login}>Login</button>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </div>
  );
}
