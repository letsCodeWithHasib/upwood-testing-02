import { jwtDecode } from "jwt-decode";

// Function to decode JWT and get user info
const getUserInfoFromToken = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded; // This will return the decoded payload
  } catch (error) {
    console.error("Failed to decode token:", error);
    return null;
  }
};

export default getUserInfoFromToken;
