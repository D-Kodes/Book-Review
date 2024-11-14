import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const AdminLoginForm = () => {
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (adminUsername === "admin" && adminPassword === "admin123") {
      alert("Admin login successful!");
      // Navigate to the Admin page
      navigate('/add-books')
      
    } else {
      alert("Invalid Admin credentials!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Admin Username"
        value={adminUsername}
        onChange={(e) => setAdminUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Admin Password"
        value={adminPassword}
        onChange={(e) => setAdminPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default AdminLoginForm;
