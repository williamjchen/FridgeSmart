import arrow from "../images/fridge-closed.png";
import arrowHover from "../images/fridge-open.png";
import { useState } from "react";

function Fridge() {
    const [over, setOver] = useState(false);
    return (
      <div
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      >
           <img
            src={over ? arrowHover : arrow}
            alt="arrow"
            width="200"
            height="200"
          />
      </div>   
    )
  }
export default Fridge;