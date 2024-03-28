import "./Button.css"
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { MdCall } from "react-icons/md";

const Button = (props) => {
    console.log(props)
  return (
    <div>
        <button className="primay-btn">
        {/* <BiSolidMessageAltDetail fontSize='20px'/> */}
        {/* {props.icon}
        {props.text} */}
        </button>
        <button className="primay-btn">
        {/* <MdCall fontSize='20px'/> Via Call */}
        {/* {props.icon}
        {props.text} */}
        </button>
        <button className="primay-btn">
        <BiSolidMessageAltDetail fontSize='20px'/>
        Via Email Form
        {/* {props.icon}
        {props.text} */}
        </button>
    </div>
  )
}

export default Button