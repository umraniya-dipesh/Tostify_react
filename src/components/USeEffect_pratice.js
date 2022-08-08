// In this code change counter state as increment on click button with the help of useState() hook and also change the outerside of fuction (taskbar title counter eg. chat(1)) with the help of useEffects hook
import React, { useEffect, useState } from "react";

const USeEffect_pratice = () => {
  const [count_number, setCountNumber] = useState(0);

  useEffect(() => {
    // console.log("Hey useEffect ");
    //using dom to change also counter in taskbar title with increment like chat(2)
    if (count_number < 1) {
      document.title = `chat`;
    } else {
      document.title = `chat (${count_number})`;
    }
  });
  console.log("Outside of useEffect");

  const increment_count = () => {
    setCountNumber(count_number + 1);
  };
  return (
    <>
      <div className="container">
        <div className="text-center mt-5">
          <h3>{count_number}</h3>
          <button className="btn btn-success" onClick={increment_count}>
            Click here for increment
          </button>
        </div>
      </div>
    </>
  );
};

export default USeEffect_pratice;
