import { useEffect, useRef } from "react";
import "./Popup.css";

function Popup(props) {
  const ref = useRef();
  useOnClickOutside(ref, () => {
    props.setPopupEnabled(false);
  });

  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }

  const handleClickYesButton = () => {
    props.setPopupEnabled(false);
    props.setBoxImage(2);
    setTimeout(() => {
      props.setResultPopupEnabled(true);
    }, 3000);
  };

  const handleClickNoButton = () => {
    props.setPopupEnabled(false);
  };

  if (props.popupEnabled) {
    return (
      <div className="Popup">
        <div className="window" ref={ref}>
          <div className="message">오픈하시겠습니까?</div>
          <div className="buttons">
            <div className="button" onClick={handleClickYesButton}>
              YES
            </div>
            <div className="space" />
            <div className="button" onClick={handleClickNoButton}>
              NO
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Popup;
