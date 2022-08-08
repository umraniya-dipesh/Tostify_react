import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ToastifyDemo = () => {
  const showtoast = () => {
    // toast("Its Toasted Working");//default toast
    toast.success("This toast is about Success"); //succes toast for Successfull message
    toast.warn("This is Warning Toast");
    toast.error("This is Error Toast");
    toast.info("This is Information Toast");
  };
  return (
    <>
      <div className="container">
        <div className="content_wrapper text-center mt-5">
          <h3>
            This example is to demonstrate React Toastify on the click of below
            Button
          </h3>
          <button className="btn btn-success mt-4" onClick={showtoast}>
            Click to Show Toatify
          </button>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default ToastifyDemo;
