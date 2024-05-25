import { Route, Routes } from "react-router-dom"
import Admin from "../Components/Admin/Admin"

function AdminRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/addpage" element={<Admin/>}></Route>
      </Routes>
    </div>
  )
}

export default AdminRoutes