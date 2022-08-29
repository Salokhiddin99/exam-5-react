import React, { useEffect, useState } from "react";
import get from "./API/GET/Get";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Main from "./Components/Main/Main";
import dataContext from "./Context/DataContext";
function App() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [userName, setUserName] = useState("Salokhiddin99");
  const [open, setOpen] = useState(false);
  const userData = async () => {
    setLoad(false);
    const user = await get.getUser(userName);
    const ans = user.data;
    setData(ans);
    setLoad(true);
  };
  useEffect(() => {
    userData();
  }, [userName]);
  console.log(data);
  return (
    <>
      {open ? (
        <>
          <Header
            setUserName={setUserName}
            setOpen={setOpen}
            userData={userData}
          />
          {load ? (
            <dataContext.Provider value={data}>
              <Main />
            </dataContext.Provider>
          ) : (
            "iltimos kutib turing"
          )}
        </>
      ) : (
        <Login setOpen={setOpen} />
      )}
    </>
  );
}

export default App;
