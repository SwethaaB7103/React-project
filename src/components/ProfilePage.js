import React, { useState, useEffect } from "react";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc, collection, query, where, getDocs, updateDoc } from "firebase/firestore";
import { sendPasswordResetEmail, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";  // For navigation
import Footer from "./Footer"; // Import Footer component

const ProfilePage = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [pastBookings, setPastBookings] = useState([]);
  const [newPasswordEmail, setNewPasswordEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // To navigate after logout

  // Fetch user details and past bookings
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          // Fetch user details from Firestore
          const userRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userRef);

          if (userDoc.exists()) {
            setUserDetails(userDoc.data());
          }

          // Fetch past booking details
          const bookingsRef = collection(db, "bookings");
          const q = query(bookingsRef, where("userId", "==", user.uid));
          const querySnapshot = await getDocs(q);
          const bookings = querySnapshot.docs.map(doc => doc.data());
          setPastBookings(bookings);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false); // Set loading to false once data is fetched
    };

    fetchUserDetails();
  }, []);

  // Handle password reset
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, newPasswordEmail);
      alert("Password reset email sent!");
    } catch (error) {
      alert(error.message);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      const user = auth.currentUser; // Get the current logged-in user
      if (!user) {
        console.error("No user is logged in.");
        alert("No user is logged in.");
        return;
      }

      // Update user's status in Firestore
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        lastActive: new Date().toISOString(),
        status: "offline", // Set user status to offline
      });

      // Sign out the user
      await signOut(auth);
      console.log("User successfully logged out");

      // Redirect to the login page after logout
      navigate("/auth");

    } catch (error) {
      console.error("Error during logout:", error.message);
      alert("An error occurred while logging out. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Display loading message until data is fetched
  }

  return (
    <div style={{ backgroundColor: "#f0f8ff", minHeight: "100vh" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
        <div
          style={{
            width: "90%",
            maxWidth: "600px",
            background: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ textAlign: "center", color: "#4dc2f8", marginBottom: "20px" }}>User Profile</h2>
          
          {/* Personal Details Section */}
          <div style={sectionStyle}>
            <h3 style={{ color: "#4dc2f8" }}>Personal Details</h3>
            {userDetails ? (
              <>
                <p><strong>Name:</strong> {userDetails.name}</p>
                <p><strong>Email:</strong> {userDetails.email}</p>
                <p><strong>Phone:</strong> {userDetails.phone}</p>
              </>
            ) : (
              <p>Loading user details...</p>
            )}
          </div>

          {/* Past Bookings Section */}
          <div style={sectionStyle}>
            <h3 style={{ color: "#4dc2f8" }}>Past Bookings</h3>
            {pastBookings.length > 0 ? (
              pastBookings.map((booking, index) => (
                <div key={index} style={bookingStyle}>
                  <p><strong>From:</strong> {booking.from}</p>
                  <p><strong>To:</strong> {booking.to}</p>
                  <p><strong>Fare:</strong> ₹{booking.fare}</p>
                  <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
                  <p><strong>Time:</strong> {new Date(booking.date).toLocaleTimeString()}</p>
                </div>
              ))
            ) : (
              <p>No past bookings available.</p>
            )}
          </div>

          {/* Password Reset Section */}
          <div style={sectionStyle}>
            <h3 style={{ color: "#4dc2f8" }}>Reset Password</h3>
            <form onSubmit={handlePasswordReset}>
              <div style={inputContainerStyle}>
                <label style={labelStyle}>Enter your email for password reset:</label>
                <input
                  type="email"
                  value={newPasswordEmail}
                  onChange={(e) => setNewPasswordEmail(e.target.value)}
                  style={inputStyle}
                  required
                />
              </div>
              <button type="submit" style={buttonStyle}>Reset Password</button>
            </form>
          </div>

          {/* Logout Button */}
          <button onClick={handleLogout} style={logoutButtonStyle}>
            Logout
          </button>

        </div>
      </div>
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

// Styles
const sectionStyle = {
  marginBottom: "20px",
};

const inputContainerStyle = {
  marginBottom: "15px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  fontSize: "14px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const labelStyle = {
  display: "block",
  fontSize: "14px",
  color: "#333",
  marginBottom: "5px",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  background: "#4dc2f8",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "bold",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const logoutButtonStyle = {
  width: "100%",
  padding: "10px",
  background: "#f44336",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "bold",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "20px",
};

const bookingStyle = {
  marginBottom: "15px",
  padding: "10px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  backgroundColor: "#f9f9f9",
};

export default ProfilePage;
