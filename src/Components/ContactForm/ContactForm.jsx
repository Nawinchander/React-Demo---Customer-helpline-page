import "./ContactForm.css"
import Button from "../Button/Button"
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { MdCall } from "react-icons/md";

const ContactForm = () => {
  return (
    <div className="contact-container">
    <section>
        <div>
            <Button text='Via support chat' icon={ <BiSolidMessageAltDetail fontSize='20px' /> }/>
            <Button text='Via Call' icon={ <MdCall fontSize='20px'/> }/>

            <form action="#" className="form_control">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="text">Text</label>
                    <textarea type="text" name="text" />
                </div>

            </form>
        </div>
        <div>
            <img src="./Images/contact.svg" alt="" />
        </div>

    </section>
    </div>

    )
}

export default ContactForm