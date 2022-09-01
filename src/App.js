import React from "react";
import CleanupFun_useEffect from "./components/CleanupFun_useEffect";
import ToastifyDemo from "./components/ToastifyDemo";
import USeEffect_pratice from "./components/USeEffect_pratice";

const App = () => {
  return (
    <>
      {/* 1. USeEffect_pratice is change counter state as increment on click button and also change increment in taskbar increment eg. chat (2) z*/}
      <USeEffect_pratice/>

      {/* 2. Print dyanamic window screen size on resposive  */}
      <CleanupFun_useEffect/>

      {/* 3. Toastify Demo example */}
      <ToastifyDemo />
    </>
  );
};

export default App;
