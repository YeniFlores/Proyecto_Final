import React, {useState} from "react"
import "./button.css"

function Button(props) {
  const [colorBtn] = useState ({
    backgroundcolor: "rgb(15, 31, 58)",
  });

  function handleClick(){
    if (props.onClick) props.onClick();
  }
  return (
    <button onClick= {handleClick} style={colorBtn} className="btn">
      {props.children}
    </button>
  ) 
}

export default Button;