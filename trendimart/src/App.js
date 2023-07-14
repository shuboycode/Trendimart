import "./App.scss";
import React, { createContext } from "react";

import AppRoutes from "./routes";
import { useDispatch, useSelector } from "react-redux";

export const MyContext = createContext();

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const sharedData = {
    username: "John Doe",
    age: 25,
    isAdmin: false,
  };

  return (
    <>
      <MyContext.Provider value={sharedData}>
        <AppRoutes />
      </MyContext.Provider>
    </>
  );
}

export default App;
