import { Route, Routes } from "react-router-dom";
import Login from "../Components/Auth/Login";
import Signup from "../Components/Auth/Signup";

function CommonRoutes() {
  return (
    <div>
      <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default CommonRoutes;
