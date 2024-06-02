import { Route, Routes } from "react-router-dom";
import Home from "../Components/User/Home";
import AccountDeatils from "../Components/User/AccountDeatils";
import AuthGuard from "../Components/AuthGuard/AuthGuard";
import WithdrawMoney from "../Components/User/WithdrawMoney";
import Balance from "../Components/User/Balance";
import Deposit from "../Components/User/Deposit";
import Histroy from "../Components/User/Histroy";

function UserRoutes() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<AuthGuard />}> */}
          <Route path="/home" element={<Home />}></Route>
          <Route path="/accountDetails" element={<AccountDeatils />}></Route>\
          <Route path="/withdraw" element={<WithdrawMoney />}></Route>
          <Route path="/balance" element={<Balance />}></Route>
          <Route path="/deposit" element={<Deposit />}></Route>
          <Route path="/history" element={<Histroy />}></Route>
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default UserRoutes;
