// import Styles from './Navigation.css';
import "./Navigation.css"

const Navigation = () => {

  // console.log(Styles);

  return (

    // <nav className={Styles.Navigation}>
    <nav className="container">
    <div className="heading">
        <p>Napzy's Service</p>
    </div>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>

    </nav>
  )
}

export default Navigation