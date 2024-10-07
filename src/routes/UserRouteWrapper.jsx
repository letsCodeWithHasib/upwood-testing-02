import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import getUserInfoFromToken from "../utils/jwtUtils";
import { setInfo } from "../redux/features/userSlice";

const UserRouteWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authStatus, sessionInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (authStatus !== "SignedIn") {
      navigate("/auth");
    } else if (sessionInfo && sessionInfo.idToken) {
      const { given_name: firstName, family_name: lastName } =
        getUserInfoFromToken(sessionInfo.idToken);
      if (firstName && lastName) {
        dispatch(setInfo({ firstName, lastName }));
      }
    }
  }, [authStatus, navigate, sessionInfo, dispatch]);

  return <>{children}</>;
};

export default UserRouteWrapper;
