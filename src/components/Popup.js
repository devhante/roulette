import "./Popup.css";
import background from "../images/popup.png";
import yesButton from "../images/yes.png";
import noButton from "../images/no.png";

function Popup(props) {
  const handleClickYesButton = () => {
    if (props.itemData.length != 0) {
      const item = props.getRandomItem();
      props.setRandomItem(item);
    }

    props.setPopupEnabled(false);
    props.setBoxImage(2);
    setTimeout(() => {
      props.setResultPopupEnabled(true);
    }, 2000);
  };

  const handleClickNoButton = () => {
    props.setPopupEnabled(false);
  };

  if (props.popupEnabled) {
    return (
      <div className="Popup">
        <div
          className="window"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="buttons">
            <div
              className="button1"
              onClick={handleClickYesButton}
              style={{ backgroundImage: `url(${yesButton})` }}
            />
            <div className="space" />
            <div
              className="button2"
              onClick={handleClickNoButton}
              style={{ backgroundImage: `url(${noButton})` }}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Popup;
