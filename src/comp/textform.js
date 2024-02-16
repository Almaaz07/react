import React, { useState } from "react";

const Textform = (props) => {
  const up = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase" , "success")
   
  };

  const lp = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase" , "success")
  };
  const clear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared" , "success")
  };
  const ui = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="conatiner" style={{color : props.Mode === "light" ? "black":"white"}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <label htmlFor="my box" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={ui} style={{backgroundColor : props.Mode === "dark" ? "gray":"white",
            color : props.Mode === "light" ? "black":"white" }}
            id="exampleInputEmail1" 
            rows="8"
          />
        </div>

        <button type="submit" className="btn btn-primary mx-4   my-2" onClick={up}>
          Convert to UpperCase
        </button>
        <button type="submit" className="btn btn-success" onClick={lp}>
          Convert to LowerCase
        </button>
        <button type="submit" className="btn btn-danger  mx-4  my-2" onClick={clear}>
          clear text
        </button>
      </div>
      <div className="conatiner my-5  my-2" style={{color : props.Mode === "light" ? "black":"white"}} >
        <h1>your text summery</h1>
        <p>
          {text.split("").filter((Element)=>{return Element.length!==0}).length}words and {text.length}characters
        </p>
        <p>{0.008 * text.split("").length} minutes are required to read</p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>

   


    </>
  );
};

export default Textform;
