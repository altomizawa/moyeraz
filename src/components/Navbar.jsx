import './Navbar.css'
import logo from '../assets/moyer-logo_white.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} className='navbar__logo' alt="moyer logo" />
      <ul className='navbar__list'>
        <li className='navbar__list-item'><a href="/">Home</a></li>
        <li className='navbar__list-item'><a href="/">Buyers</a></li>
        <li className='navbar__list-item'><a href="/">Sellers</a></li>
        <li className='navbar__list-item'><a href="/">Articles</a></li>
        <li className='navbar__list-item'><a href="/">About Us</a></li>
      </ul>
      <a className='navbar__contact'>
        <div className='navbar__dot'></div>
        <p>CONTACT US</p>
      </a>
    </div>
  )
}

export default Navbar
