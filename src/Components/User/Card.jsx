import { useEffect } from "react";
import { useState } from "react";


function Card() {
  const [accountDetails, setAccountDetails] = useState()

useEffect(()=>{
  const AccountDetailsString = localStorage.getItem('accountDetails');
  if (AccountDetailsString) {
    const AccountData = JSON.parse(AccountDetailsString);
    setAccountDetails(AccountData);
    
  }
},[])
if (!accountDetails) {
  return <div>Loading...</div>; 
}

return (
    <>
      <div className="flex  flex-col items-center 2xl:mt-16">
        <div className=" w-72 sm:w-[400px] 2xl:w-[600px]  mx-5 my-7 p-6 rounded-md flex flex-col justify-around bg-orange-500 text-white">
          <h1 className="text-2xl font-bold mb-10 2xl:mb-28 2xl:text-[50px]">
            Softronics
          </h1>
          <div>
            <h1 className="2xl:text-[30px]">Account Number</h1>
            <h1 className="mb-6 2xl:mb-20 font-bold text-xl tracking-[7px] sm:tracking-[15px] 2xl:text-[40px]">
              { accountDetails.accountNumber}
            </h1>
          </div>
          <div className="flex justify-between  items-center">
            <div>
              <h1>Naseef</h1>
              <h1>Validy:06/09/2027</h1>
            </div>
            <h1 className="font-extrabold text-3xl">VISA</h1>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-center mt-16 2xl:text-7xl">
          Banking is necessary,<br></br> Banks are not..!
        </h1>
      </div>
    </>
  );
}

export default Card;
