/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { auth, db } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, email, password } = formData;

    try {
      if (isLogin) {
        // User Login
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        navigate("/profile"); // Redirect to profile page
      } else {
        // User Sign-Up
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save user details in Firestore
        await setDoc(doc(db, "users", user.uid), { name, email, phone });
        alert("Signup successful!");
        navigate("/profile"); // Redirect to profile page after successful signup
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#f0f8ff" }}>
      <div style={{ flex: "1", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "90%", maxWidth: "400px", background: "#ffffff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
          <h2 style={{ textAlign: "center", color: "#4dc2f8", marginBottom: "20px" }}>{isLogin ? "Login" : "Sign Up"}</h2>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <div style={{ marginBottom: "15px" }}>
                  <label style={{ display: "block", fontSize: "14px", color: "#333" }}>Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} style={inputStyle} placeholder="Enter your name" required />
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <label style={{ display: "block", fontSize: "14px", color: "#333" }}>Phone Number</label>
                  <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} style={inputStyle} placeholder="Enter your phone number" required />
                </div>
              </>
            )}
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", fontSize: "14px", color: "#333" }}>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} style={inputStyle} placeholder="Enter your email" required />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", fontSize: "14px", color: "#333" }}>Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleInputChange} style={inputStyle} placeholder="Enter your password" required />
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                background: "#4dc2f8",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: "bold",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <a
            onClick={() => setIsLogin(!isLogin)}
            style={{
              display: "block",
              textAlign: "center",
              marginTop: "15px",
              color: "#4dc2f8",
              fontSize: "14px",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
          </a>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  fontSize: "14px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

export default AuthPage;
