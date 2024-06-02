import { Route, Routes } from "react-router-dom";
import UserRoutes from "./Routes/UserRoutes";
import AdminRoutes from "./Routes/AdminRoutes";
import CommonRoutes from "./Routes/CommonRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<CommonRoutes/>}></Route>
        <Route path="/user*" element={<UserRoutes />}></Route>
        <Route path="/admin/*" element={<AdminRoutes />}></Route>
      </Routes>
    </>
  );
}

export default App;
