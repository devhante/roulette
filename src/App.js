import "./App.css";
import Box from "./components/Box";
import Popup from "./components/Popup";
import { useState } from "react";
import ResultPopup from "./components/ResultPopup";

function App() {
  const [popupEnabled, setPopupEnabled] = useState(false);
  const [resultPopupEnabled, setResultPopupEnabled] = useState(false);
  const [boxImage, setBoxImage] = useState(1);

  const handleClickBox = () => {
    console.log("hello");
    setPopupEnabled(true);
  };

  return (
    <div className="App">
      <Popup
        popupEnabled={popupEnabled}
        setPopupEnabled={setPopupEnabled}
        setResultPopupEnabled={setResultPopupEnabled}
        setBoxImage={setBoxImage}
      />
      <ResultPopup
        resultPopupEnabled={resultPopupEnabled}
        setResultPopupEnabled={setResultPopupEnabled}
        setBoxImage={setBoxImage}
      />
      <Box
        boxImage={boxImage}
        setBoxImage={setBoxImage}
        setPopupEnabled={setPopupEnabled}
      />
    </div>
  );
}

export default App;
