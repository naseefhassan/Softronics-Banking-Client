// src/contexts/AccountContext.js
import React, { createContext, useEffect, useState } from "react";

export const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [accountDetails, setAccountDetails] = useState({
    accountNumber: "",
    IFSC: "",
  });

  const saveAccountDetails = (details) => {
    setAccountDetails(details);
    localStorage.setItem("accountDetails", JSON.stringify(details));

  };

  return (
    <AccountContext.Provider value={{ accountDetails, saveAccountDetails }}>
      {children}
    </AccountContext.Provider>
  );
};
