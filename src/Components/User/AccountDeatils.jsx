import { useContext, useState } from "react";
import axiosInstance from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {AccountContext} from '../../Context/AccountContext'

function AccountDeatils() {
  const navigate = useNavigate();
  const {saveAccountDetails}=useContext(AccountContext)
  const [accountNumber, setAccountNumber] = useState("");
  const [IFSC, setIFSC] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!accountNumber || !IFSC) {
      toast.error("Please add details");
    }
    try {
      await axiosInstance.post("/user/accountdetails", {
        accountNumber,
        IFSC,
      });
      saveAccountDetails({accountNumber,IFSC})
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Enter Bank Details
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Account Number
            </label>
            <input
              type="number"
              id="account-number"
              name="account-number"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">
              IFSC Code
            </label>
            <input
              type="text"
              id="ifsc-code"
              name="ifsc-code"
              value={IFSC}
              onChange={(e) => setIFSC(e.target.value)}
              className="w-full uppercase px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AccountDeatils;
