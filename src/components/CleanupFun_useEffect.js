import React, { useEffect, useState } from "react";

const CleanupFun_useEffect = () => {
  const [window_size, setWindow_size] = useState(window.screen.width);

  const size = () => {
    console.log("size working..");
    setWindow_size(window.screen.width);
  };
  useEffect(() => {
    window.addEventListener("resize", size);
    //cleanup function is used because in element evenlistener will store all size data so will use clean
    return () => {
      window.removeEventListener("resize", size);
    };
  });
  return (
    <div className="container">
      <div className="wrapper text-center">
        <h3>The size of screen window is :- </h3>
        <h2>
          <strong className="text-success">{window_size}</strong>
        </h2>
      </div>
    </div>
  );
};

export default CleanupFun_useEffect;
