// import React, { useState, useEffect } from "react";
// import { Navigate } from "react-router-dom";
// const RequireAuth = ({ children }) => {
//   const token = localStorage.getItem("token");
//   const [isValidToken, setIsValidToken] = useState(false);
//   const [isLoading, setIsLoading] = useState(true); // Add loading state

//   useEffect(() => {
//     const validateToken = async () => {
//       try {
//         console.log("Validating token...");
//         console.log("Token:", token);
//         const response = await fetch("http://localhost:5000/validateToken", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             "auth-token": token,
//           },
//         });
//         if (response.ok) {
//           setIsValidToken(true);
//           console.log("Token validation successful");
//         } else {
//           console.log("Token validation failed");
//         }
//       } catch (error) {
//         console.error("Error:", error.message);
//         setIsValidToken(false);
//       } finally {
//         setIsLoading(false); // Set loading state to false regardless of success or failure
//       }
//     };

//     if (token) {
//       validateToken();
//     } else {
//       setIsLoading(false); // Set loading state to false if there's no token
//     }
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>; // Render loading indicator
//   }

//   if (isValidToken) {
//     return <>{children}</>; // Render children if token is valid
//   } else {
//     return <Navigate to="/" />; // Redirect if token is invalid
//   }
// };

// export default RequireAuth;
