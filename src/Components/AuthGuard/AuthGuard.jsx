import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";  // Ensure you're importing from "react-router-dom"
import { selectToken, setToken } from "../../Redux/Slice";

function AuthGuard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ReduxToken = useSelector(selectToken);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      dispatch(setToken(token));
      navigate('/')
    } else {
      navigate('/auth/login');
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    if (!ReduxToken) {
      navigate('/auth/login');
    }
  }, [navigate, ReduxToken]);

  return <><Outlet /></>;
}

export default AuthGuard;
