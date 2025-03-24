import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  
  const { login } = useAuth();
  

  const handleSubmit = (e) => {
    console.log("check");
    e.preventDefault();
    console.log("handleSubmit");
    login(email, password, rememberMe);
  };

  return (
    <div className="p-6 maw-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-2 w-full"
        />

        <input
          type="text"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <fieldset>
          <input
            type="checkbox"
            placeholder="Remember Me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.value)}
          />

          <label className="ps-2"> Remember Me</label>
        </fieldset>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
