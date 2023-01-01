import React from 'react'
import './Navbar.css'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BiNews } from 'react-icons/bi'
import { BiDollarCircle } from 'react-icons/bi'
import { FaAward } from 'react-icons/fa'
import { IoIosArrowBack } from 'react-icons/io'
import { BiQrScan } from 'react-icons/bi'
import ees from '../Navbar/ees.svg'
import udyam from '../Navbar/udyam.svg'
import { useState } from 'react'
import { useEffect } from 'react'
import { TfiMenu } from 'react-icons/tfi'
import { AiOutlineClose } from 'react-icons/ai'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Navbar = () => {

    const [slideEvent, setEvent] = useState('false');
    const [slideLeader, setLeader] = useState('false');
    const [slideNav, setNav] = useState('false');
    const [width, setWidth] = useState(window.innerWidth);
    const [activeNav, setActiveNav] = useState('#')

    // const Token = document.getElementsByClassName('.token')
    // const UdyamNav = document.getElementsByClassName('.udyam-nav');

    function checkNav() {
        if (width > 800) {
            return;
        }
        else {
            if (slideLeader === false) {
                document.querySelector('.leader').style.display = 'none';
            }
            else {
                document.querySelector('.token').style.display = 'none';
            }

            // document.querySelector('.leader').style.display = 'none';
            // document.querySelector('.token').style.display = 'none';
            document.querySelector('.udyam-nav').style.display = 'none';
        }

    }
    function menuNav() {
        setNav(false);
        if (slideLeader === false) {
            document.querySelector('.leader').style.display = 'block';
        }
        else {
            document.querySelector('.token').style.display = 'block';
        }
        // document.querySelector('.token').style.display = 'block';
        // document.querySelector('.leader').style.display = 'block';
        document.querySelector('.udyam-nav').style.display = 'block';
        // setNav(!slideNav);
    }



    const updateWidth = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);
    function slideIn(e) {
        setEvent(true);
        setLeader(true);
        const aevent = e.currentTarget.getAttribute('ind');
        setActiveNav(aevent);
    }

    function slideEvents() {
        setEvent(!slideEvent);
        setLeader(true)
        setActiveNav('#event')
        // Events.style.backgroundColor = 'yellow'

    }
    function slideLeaderboard() {
        setLeader(!slideLeader);
        setEvent(true)
        setActiveNav('#leaderboard')
    }
    function showNav() {
        setNav(!slideNav);
        setEvent(true);
        setLeader(true);
    }
    function slidemobile() {
        setEvent(true);
        setLeader(true);
    }
    function helloNav() {
        setNav(true)
    }

    return (
        <>
            {(!slideNav || width > 800) && <div className='udyam-nav'>
                <div className="close" onClick={helloNav}>
                    <AiOutlineClose />
                </div>
                <div className="udyam-img">
                    <img className='udyam-logo' src={udyam} alt="hero" />
                </div>
                <div className="udyam-icon">
                    <div className="name hovered" ind='#name' onClick={slideIn} id={activeNav === '#name' ? 'active' : ''}>
                        <a href="#"><BiQrScan className='info' /></a>
                        <p>Name</p>
                    </div>
                    <div className="about hovered" ind='#about' onClick={slideIn} id={activeNav === '#about' ? 'active' : ''}>
                        <a href="#"><AiOutlineInfoCircle className='info' /></a>
                        <p>About Us</p>
                    </div>
                    <div className="events hovered" onClick={slideEvents} id={activeNav === '#event' ? 'active' : ''}>
                        <a href="#"><BiNews className='info' /></a>
                        <p>Events</p>
                    </div>
                    <div className="sponsors hovered" ind='#sponsors' onClick={slideIn} id={activeNav === '#sponsors' ? 'active' : ''}>
                        <a href="#"><BiDollarCircle className='info' /></a>
                        <p>Sponsors</p>
                    </div>
                    <div className="leaderboard hovered" onClick={slideLeaderboard} id={activeNav === '#leaderboard' ? 'active' : ''}>
                        <a href="#"><FaAward className='info' /></a>
                        <p>Leaderboard</p>
                    </div>

                </div>
                {/* <div className="udyam-ees">
                    <img className='ees-img' src={ees} alt="hreo" />
                </div> */}
            </div>}
            <div className="udyam-ees-mobile">
                <img className='ees-img-mobile' src={ees} alt="hreo" />
            </div>
            <div className="menu-icon" onClick={menuNav}>
                <TfiMenu />
            </div>
            {!slideEvent && <div className="token">
                <div className="back" onClick={slidemobile}>
                    <IoIosArrowBack />
                </div>
                <div className="token-event">

                    <div className="digism event-name" onClick={checkNav}><a href="#"> Digism</a></div>
                    <div className="ichip event-name" onClick={checkNav}><a href="#">I-chip</a></div>
                    <div className="devbits event-name" onClick={checkNav}><a href="#">Devbits</a></div>
                    <div className="commnet event-name" onClick={checkNav}><a href="#">Commnet</a></div>
                    <div className="xiota event-name" onClick={checkNav}><a href="#">X-iota</a></div>
                    <div className="cassandra event-name" onClick={checkNav}><a href="#">Cassandra</a></div>
                    <div className="mosaic event-name" onClick={checkNav}><a href="#">Mosaic</a></div>
                    <div className="funckit event-name" onClick={checkNav}><a href="#">Funckit</a></div>
                </div>
            </div>}
            {!slideLeader && <div className="leader">
                <div className="back" onClick={slidemobile}>
                    <IoIosArrowBack />
                </div>
                <div className="token-event">
                    <div className="digism event-name" onClick={checkNav}><a href="#"> Digism</a></div>
                    <div className="ichip event-name" onClick={checkNav}><a href="#">I-chip</a></div>
                    <div className="devbits event-name" onClick={checkNav}><a href="#">Devbits</a></div>
                    <div className="commnet event-name" onClick={checkNav}><a href="#">Commnet</a></div>
                    <div className="xiota event-name" onClick={checkNav}><a href="#">X-iota</a></div>
                    <div className="cassandra event-name" onClick={checkNav}><a href="#">Cassandra</a></div>
                    <div className="mosaic event-name" onClick={checkNav}><a href="#">Mosaic</a></div>
                    <div className="funckit event-name" onClick={checkNav}><a href="#">Funckit</a></div>
                </div>
            </div>}
        </>
    )
}

export default Navbar
