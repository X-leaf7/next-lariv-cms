"use client";
import React from "react"; 

const SubmitButton = (props) => {
  if (props?.submit === false) {
    return (
      <button className="btn block" onClick={props?.onClick} type="submit">
        {props?.text}
      </button>
    );
  } else {
    return (
      <button
        disabled={true}
        className="btn flex gap-3 hover:bg-theme cursor-not-allowed"
      >
        Loading 
      </button>
    );
  }
};
export default SubmitButton;
