import "./App.css";
import Box from "./components/Box";
import Popup from "./components/Popup";
import { useEffect, useState } from "react";
import ResultPopup from "./components/ResultPopup";
import boxgif from "./images/box.gif";

function App() {
  const [popupEnabled, setPopupEnabled] = useState(false);
  const [resultPopupEnabled, setResultPopupEnabled] = useState(false);
  const [boxImage, setBoxImage] = useState(1);
  const [itemData, setItemData] = useState([]);
  const [randomItem, setRandomItem] = useState(null);
  const [boxgif1, setBoxgif1] = useState(boxgif);
  const [boxgif2, setBoxgif2] = useState(boxgif);

  useEffect(() => {
    getItemData();
  }, []);

  useEffect(() => {
    console.log(itemData);
  }, [itemData]);

  useEffect(() => {
    setBoxgif2("");
    setTimeout(() => {
      setBoxgif2(boxgif1);
    });
  }, [boxImage]);

  function getDefaultItemData() {
    const itemData = [
      { name: "r_bow", rarity: 3, remain: 14 },
      { name: "r_sword", rarity: 3, remain: 14 },
      { name: "r_wand", rarity: 3, remain: 14 },
      { name: "sr_bow", rarity: 2, remain: 12 },
      { name: "sr_sword", rarity: 2, remain: 12 },
      { name: "sr_wand", rarity: 2, remain: 12 },
      { name: "ssr_bow", rarity: 1, remain: 8 },
      { name: "ssr_sword", rarity: 1, remain: 8 },
      { name: "ssr_wand", rarity: 1, remain: 8 },
    ];

    return itemData;
  }

  function getItemData() {
    const data = localStorage.getItem("itemData");
    if (data === null) {
      setItemData(getDefaultItemData);
    } else {
      setItemData(JSON.parse(data));
    }
  }

  function getRandomItem() {
    let total = 0;
    for (let item of itemData) {
      total += item.remain;
    }
    if (total === 0) {
      return null;
    }

    let count = 0;
    let randNumber = Math.floor(Math.random() * total);
    let newItemData = JSON.parse(JSON.stringify(itemData));
    for (let item of newItemData) {
      count += item.remain;
      if (randNumber < count) {
        item.remain--;
        setItemData(newItemData);
        localStorage.setItem("itemData", JSON.stringify(newItemData));
        return item;
      }
    }

    return null;
  }

  return (
    <div className="App">
      <Popup
        popupEnabled={popupEnabled}
        setPopupEnabled={setPopupEnabled}
        setResultPopupEnabled={setResultPopupEnabled}
        setBoxImage={setBoxImage}
        itemData={itemData}
        getRandomItem={getRandomItem}
        setRandomItem={setRandomItem}
      />
      <ResultPopup
        resultPopupEnabled={resultPopupEnabled}
        setResultPopupEnabled={setResultPopupEnabled}
        setBoxImage={setBoxImage}
        randomItem={randomItem}
      />
      <Box
        boxImage={boxImage}
        setBoxImage={setBoxImage}
        setPopupEnabled={setPopupEnabled}
        boxgif={boxgif2}
      />
    </div>
  );
}

export default App;
