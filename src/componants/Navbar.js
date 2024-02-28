import React, { useState } from 'react'
import style from '../modules/Navbar.module.css'
import { Link } from 'react-scroll'

const Navbar = () => {

    let [isActive, setIsActive] = useState(false);

    function toggleActive() {
        setIsActive(!isActive);
    }

    return (
        <>
            <nav>
                <div className={style.navbar}>
                    <Link to="/" className={style.navTitle}><h3>AYUSH</h3></Link>


                    <div className={style.navItems}>
                        <ul className={style.navUL}>
                            <li className={style.navList}>
                                <Link to="home" spy={true} smooth={true} offset={-100} duration={100} className="nav-link">Home</Link>
                            </li>
                            <li className={style.navList}>
                                <Link to="about" spy={true} smooth={true} offset={-100} duration={100} className="nav-link">About</Link>
                            </li>
                            <li className={style.navList}>
                                <Link to="projects" spy={true} smooth={true} offset={-50} duration={100} className="nav-link">Projects</Link>
                            </li>
                            <li className={style.navList}>
                                <Link to="contact" spy={true} smooth={true} offset={50} duration={100} className="nav-link">Contact</Link>
                            </li>
                        </ul>
                        {/* hamburger button */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" onClick={toggleActive} className={`bi bi-list ${style.ham}`} viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                    </div>




        {/* to  display the menu on small screens */}
                    <div className={style.mobileNav} style={!isActive ? { display: "none" } : { display: "flex" }}>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="black" onClick={toggleActive} className={`bi bi-x-lg ${style.close}`} viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>

                        <ul>
                            <li>
                                <Link to="home" spy={true} smooth={true} offset={-100} duration={100} onClick={toggleActive} className="nav-link">Home</Link>
                            </li>
                            <li>
                                <Link to="about" spy={true} smooth={true} offset={-100} duration={100} onClick={toggleActive} className="nav-link">About</Link>
                            </li>
                            <li>
                                <Link to="projects" spy={true} smooth={true} offset={-50} duration={100} onClick={toggleActive} className="nav-link">Projects</Link>
                            </li>
                            <li>
                                <Link to="contact" spy={true} smooth={true} offset={50} duration={100} onClick={toggleActive} className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </div>

                </div>
              
            </nav>

        </>
    )
}

export default Navbar