import "./ResultPopup.css";
import r_bow from "../images/r_bow.png";
import r_sword from "../images/r_sword.png";
import r_wand from "../images/r_wand.png";
import sr_bow from "../images/sr_bow.png";
import sr_sword from "../images/sr_sword.png";
import sr_wand from "../images/sr_wand.png";
import ssr_bow from "../images/ssr_bow.png";
import ssr_sword from "../images/ssr_sword.png";
import ssr_wand from "../images/ssr_wand.png";
import ok_button from "../images/ok.png";

function ResultPopup(props) {
  const handleClickYesButton = () => {
    props.setResultPopupEnabled(false);
    props.setBoxImage(1);
  };

  function getWindowImage() {
    switch (props.randomItem.name) {
      case "r_bow":
        return r_bow;
      case "r_sword":
        return r_sword;
      case "r_wand":
        return r_wand;
      case "sr_bow":
        return sr_bow;
      case "sr_sword":
        return sr_sword;
      case "sr_wand":
        return sr_wand;
      case "ssr_bow":
        return ssr_bow;
      case "ssr_sword":
        return ssr_sword;
      case "ssr_wand":
        return ssr_wand;
    }
  }

  if (props.resultPopupEnabled) {
    return (
      <div className="ResultPopup">
        <div
          className="window"
          style={{ backgroundImage: `url(${getWindowImage()})` }}
        >
          <div
            className="button"
            onClick={handleClickYesButton}
            style={{ backgroundImage: `url(${ok_button})` }}
          />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default ResultPopup;
