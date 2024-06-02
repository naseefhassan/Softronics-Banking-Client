import { useState } from "react";
import axiosInstance from "../../api/axios";
import { useDispatch } from "react-redux";
import { transfer } from "../../Redux/AccountSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Deposit = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const [accountNumber, setAccountNumber] = useState("");
  const [IFSC, setIFSC] = useState("");

  const handleDeposit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/user/deposit", {
        amount,
        accountNumber,
        IFSC,
      });
      if (response.status === 200) {
        dispatch(transfer(Number(amount)));
        toast.success('Transaction sucess')
      }
    } catch (error) {
        toast.error('Deposition failed')
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Transfer</h2>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="account-number"
            className="block text-gray-700 font-semibold mb-2"
          >
            Account Number
          </label>
          <input
            type="number"
            id="account-number"
            name="account-number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="ifsc-code"
            className="block text-gray-700 font-semibold mb-2"
          >
            IFSC Code
          </label>
          <input
            type="text"
            id="ifsc-code"
            name="ifsc-code"
            value={IFSC}
            onChange={(e) => setIFSC(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded uppercase focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="amount"
            className="block text-gray-700 font-semibold mb-2"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            onClick={handleDeposit}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Transfer
          </button>
        </div>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Deposit;
