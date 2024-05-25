import { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/user/history");
        setHistory(response.data.history);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className=" w-96  mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Transaction History</h1>
      <div className="grid grid-cols-1 gap-4">
        {history.map((transaction, key) => (
          <div key={key} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Transaction Details</h2>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-gray-700">Account Number:</p>
                <p className="font-semibold">{transaction.accountNumber}</p>
              </div>
              <div>
                <p className="text-gray-700">Amount:</p>
                <p className="font-semibold">{transaction.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
