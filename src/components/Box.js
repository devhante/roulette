import "./Box.css";

import image1 from "../images/1.gif";
import image2 from "../images/2.gif";
import image3 from "../images/3.gif";

function Box(props) {
  const boxImages = [image1, image2, image3];

  const handleClickBox = () => {
    props.setPopupEnabled(true);
  };

  return (
    <div
      className="Box"
      onClick={handleClickBox}
      style={{ backgroundImage: `url(${boxImages[props.boxImage - 1]})` }}
    >
      상자
    </div>
  );
}

export default Box;
