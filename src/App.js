import { useState } from "react";
import Navbar1 from "./Navbar1";
import Textform from "./comp/textform";
import Not from "./comp/Not";
import Lets from "./comp/lets";
import Cont from "./comp/Cont";
import { BrowserRouter } from "react-router-dom";
import Test from "./comp/Test";

import {
  // BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [col, setcol] = useState("");
  console.log(col);

  const changeCol = () => {
    if (Mode === "light") {
      setcol((document.body.style.backgroundColor = "maroon"));
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode enabled", "success");
      document.title = "textutiles- Dark mode";
    } else {
      setcol((document.body.style.backgroundColor = "white"));

      showAlert("light mode enabled", "success");
      document.title = "textutiles- light mode";
    }

    showAlert("red theme enabled", "success");
    document.title = "textutiles- custom mode";
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1700);
  };

  const enable = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "BLACK";
      showAlert("dark mode enabled", "success");
      document.title = "textutiles- Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode enabled", "success");
      document.title = "textutiles- light mode";
    }
  };

  return (
    <>
      <Navbar1
        title="Text Analyzer"
        Mode={Mode}
        enable={enable}
        changeCol={changeCol}
      />
      <Lets alert={alert} />

      <div className="container my-3">
    
      <Routes>
        <Route path="/" element={<Textform
          heading="enter text to analyze"
          Mode={Mode}
          enable={enable}
          showAlert={showAlert}
          changeCol={changeCol}
        />}>
          
        </Route>
        <Route path="/About" element={<Not showAlert={showAlert} />} />
        <Route path="/contactus" element={<Cont showAlert={showAlert} />} />
        <Route path="/Test" element={<Test  Mode={Mode}
        enable={enable}
        showAlert={showAlert}
        changeCol={changeCol} />} />
      </Routes>
    


      </div>

      
    </>
  );
}

export default App;
