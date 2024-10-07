import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AuthRouteWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { authStatus } = useSelector((state) => state.auth);

  useEffect(() => {
    if (authStatus === "SignedIn") {
      navigate("/user");
    }
  }, [authStatus]);

  return <>{children}</>;
};

export default AuthRouteWrapper;
