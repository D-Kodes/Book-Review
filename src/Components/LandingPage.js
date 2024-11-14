import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import AdminLoginForm from "./AdminLoginForm";

const LandingPage = () => {
  const navigate = useNavigate();
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  const handleSignUp = () => {
    setShowSignUp(true);
    setShowSignIn(false);
    setShowAdminLogin(false);
  };

  const handleSignIn = () => {
    setShowSignIn(true);
    setShowSignUp(false);
    setShowAdminLogin(false);
  };

  const handleAdminLogin = () => {
    setShowAdminLogin(true);
    setShowSignUp(false);
    setShowSignIn(false);
  };

  return (
    <div>
      <h1>Books Review App</h1>
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleAdminLogin}>Admin Login</button>

      {showSignUp && <SignUpForm />}
      {showSignIn && <SignInForm />}
      {showAdminLogin && <AdminLoginForm />}
    </div>
  );
};

export default LandingPage;
