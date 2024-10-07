import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UserRouteWrapper = ({ children }) => {
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.loggedIn);

  useEffect(() => {
    if (!loggedIn) {
      navigate("/auth");
    }
  }, [loggedIn]);
  return <>{children}</>;
};

export default UserRouteWrapper;
