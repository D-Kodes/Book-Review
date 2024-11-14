import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import AddBooksPage from "./Components/AddBooksPage";
import HomePage from "./Components/HomePage";
import BookDetailsPage from "./Components/BookDetails";
import SignUpForm from "./Components/SignUpForm";
import SignInForm from "./Components/SignInForm";
import AdminLoginForm from "./Components/AdminLoginForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUpForm/>} />
        <Route path="/sign-in" element={<SignInForm/>} />
        <Route path="/admin-login" element={<AdminLoginForm/>} />
        <Route path="/add-books" element={<AddBooksPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/book/:isbn" element={<BookDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
