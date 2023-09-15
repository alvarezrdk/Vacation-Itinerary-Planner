import { useState } from 'react'
import './Header.css'
import bookIcon from './assets/Icons/book.svg';
import chevronIcon from './assets/Icons/chevron.svg'
import profileIcon from './assets/Icons/profile.svg'
import worldIcon from './assets/Icons/world.svg'
import mapIcon from './assets/Icons/map.svg'
import tripsIcon from './assets/Icons/trips.svg'
import cityIcon from './assets/Icons/city.svg'
import uvLogo from './assets/Icons/UV-Logo.png'

import { CSSTransition } from 'react-transition-group'



function Header() {
  return (
    <>
      <NavBar>
        <NavItem link='#' icon={bookIcon}></NavItem>
        <p className='navSubTitle'>Guides</p>
        <NavItem icon={worldIcon}>

          <DropdownMenu></DropdownMenu>

        </NavItem>
        <p className='navSubTitle'>Trips</p>
        <NavItem link="/profile" icon={profileIcon}></NavItem>
        <a href="/profile" className='navSubTitle'>Log In</a>

      </NavBar>
    </>
  );
}

function DropdownMenu() {

  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight
    setMenuHeight(height)
  }

  function DropdownItem(props) {
    if (props.title === "true") {
      return (
        <a href="#" className='menuItem' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className='iconButton dropdownTitle'>
            <img src={props.leftIcon}></img>
          </span>

          {props.children}
        </a>
      )
    }

    return (
      <a href="#" className='menuItem' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className='iconButton'>
          <img src={props.leftIcon}></img>
        </span>

        {props.children}

        <span className='iconRight'>
          <img src={props.rightIcon}></img>
        </span>

      </a>
    )
  }

  return (
    <div className='dropdown' style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >

        <div className='menu'>
          <DropdownItem
            leftIcon={mapIcon}>
            <p>Plan a Trip</p>
          </DropdownItem>

          <DropdownItem
            leftIcon={tripsIcon}
            goToMenu='settings'>
            <p>Saved Trips</p>
          </DropdownItem>
        </div>


      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >

        <div className='menu'>
          <DropdownItem
            leftIcon={chevronIcon}
            goToMenu='main'
            title="true">
            <h1>Saved Trips</h1>
          </DropdownItem>
          <DropdownItem
            leftIcon={cityIcon}>
            <p>New York City</p>
          </DropdownItem>
          <DropdownItem
            leftIcon={cityIcon}>
            <p>Miami</p>
          </DropdownItem>
          <DropdownItem
            leftIcon={cityIcon}>
            <p>San Francisco</p>
          </DropdownItem>
          <DropdownItem
            leftIcon={cityIcon}>
            <p>Chicago</p>
          </DropdownItem>
          <DropdownItem
            leftIcon={cityIcon}>
            <p>Atlanta</p>
          </DropdownItem>
        </div>


      </CSSTransition>
    </div>
  )
}

function NavBar(props) {
  return (
    <nav className='navBar'>
      <img className='whiteLogo' src={uvLogo}></img>
      <h1 className='navTitle'>Lifetimes</h1>
      <ul className='navBarNav'>{props.children}</ul>
    </nav>
  )
}

function NavItem(props) {

  const [open, setOpen] = useState(false);

  return (
    <li className='navItem'>
      <a href={props.link} className='iconButton' onClick={() => setOpen((prevState) => !prevState)}>
        <img src={props.icon}></img>
      </a>

      {open && props.children}
    </li>
  )
}

export default Header
