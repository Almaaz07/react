import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";

const Not = () => {
  const [myStyle, setmyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });
  const [btnText, setbtnText] = useState("enable light mode");
console.log(btnText)
  let dark = () => {
    if (myStyle.color === "white") {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setbtnText("enable dark mode");
    } else {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setbtnText("enable light mode");
    }
  };
  return (
    <>

    <div className="container">
      <div class="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
        <div class="accordion-item" style={myStyle}>
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={myStyle} >
              Accordion Item #1
            </button>
          </h2>
          <div  style={myStyle}
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body"  style={myStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={myStyle}  >
              Accordion Item #2
            </button>
          </h2>
          <div  style={myStyle}
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body"  style={myStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              second item's accordion body. Let's imagine this being filled with
              some actual content.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={myStyle} >
              Accordion Item #3
            </button>
          </h2>
          <div  style={myStyle}
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body"  style={myStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              third item's accordion body. Nothing more exciting happening here
              in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>

<button  className = " btn btn-primary"  onClick={dark}>enable dark mode</button>

      </div>
    </>
  );
};

export default Not;
