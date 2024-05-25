import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withDraw } from '../../Redux/AccountSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function WithdrawMoney() {
  const [amount, setAmount] = useState(null);
  const dispatch = useDispatch();

  const handleWithdraw = () => {
    dispatch(withDraw(Number(amount)));
    toast.success('Amount Withdrawed')

  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Withdraw</h2>
      <div className="flex items-center mb-4">
        <label htmlFor="amount" className="block text-gray-700 font-semibold mr-4">Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="text-center">
        <button
          onClick={handleWithdraw}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Withdraw
        </button>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default WithdrawMoney;
