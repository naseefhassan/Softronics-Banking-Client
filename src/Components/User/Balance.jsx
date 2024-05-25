import { useSelector } from 'react-redux';

const Balance = () => {
  const amount = useSelector((state) => state.account.amount);

  return (
    <div className="container w-96 mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-center mb-4">Current Balance</h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
        <h3 className="text-3xl font-bold">{amount}</h3>
      </div>
    </div>
  );
};

export default Balance;
