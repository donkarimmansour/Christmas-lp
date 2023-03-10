import Image from "next/image"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher"

 
const Header = () => {
  const { t } = useTranslation('header')

  const [isOpen, setIsOpen] = useState("none");

const HnadleNavToggle = e => {
  e.target.parentElement.previousSibling.classList.add('show-menu')
}

const HnadleNavClose = e => {
   e.target.closest("#nav-menu").classList.remove('show-menu')
}
 
const HnadleNavLinks = e => {
   e.target.closest("#nav-menu").classList.remove('show-menu')
}

const ToggleMenu = () => {
  setIsOpen((prevState) => prevState === "none" ? "block" : "none")
}


  return (
    <header className="header" id="header">
      <div className="container">
        <nav className="nav">
          <a href="#" className="nav__logo">
            <Image width={200} height={200} src="/imgs/logo.png" alt="" /> Christmas
          </a>



          <div className="nav__menu" id="nav-menu" >

              
              <ul className="nav__list">
  
                 <li className="nav__item" onClick={ToggleMenu}>
                   <LanguageSwitcher isOpen={isOpen} setIsOpen={setIsOpen} />
                </li>
 
                <li className="nav__item">
                  <a href="#home" className="nav__link" onClick={(e) => { HnadleNavLinks(e) }}>{t(`text1`)}</a>
                </li>
                <li className="nav__item">
                  <a href="#celebrate" className="nav__link" onClick={(e) => { HnadleNavLinks(e) }}>{t(`text2`)}</a>
                </li>
                <li className="nav__item">
                  <a href="#gift" className="nav__link" onClick={(e) => { HnadleNavLinks(e) }}>{t(`text3`)}</a>
                </li>
                <li className="nav__item">
                  <a href="#new" className="nav__link" onClick={(e) => { HnadleNavLinks(e) }}>{t(`text4`)}</a>
                </li>
              </ul>



           <div className="nav__close" id="nav-close" onClick={(e) => { HnadleNavClose(e) }}>
              <i className="bx bx-x" />
            </div>
            <Image width={200} height={200} src="/imgs/nav-light.png" alt="" className="nav__corner" />
          </div>

          <div onClick={(e) => { HnadleNavToggle(e) }} className="nav__toggle" id="nav-toggle">
            <i className="bx bx-menu-alt-right" />
          </div>

        </nav>
      </div>
    </header>

  )
}

export default Header