import { useEffect, useRef } from "react";
import "./ResultPopup.css";

function ResultPopup(props) {
  const ref = useRef();
  useOnClickOutside(ref, () => {
    props.setResultPopupEnabled(false);
    props.setBoxImage(1);
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
    // props.setResultPopupEnabled(false);
  };

  const handleClickNoButton = () => {
    // props.setResultPopupEnabled(false);
  };

  if (props.resultPopupEnabled) {
    return (
      <div className="Popup">
        <div className="window" ref={ref}>
          <div className="message">뽑기결과: 자고싶다</div>
          <div className="buttons">
            <div className="button" onClick={handleClickYesButton}>
              버튼1
            </div>
            <div className="space" />
            <div className="button" onClick={handleClickNoButton}>
              버튼2
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default ResultPopup;
