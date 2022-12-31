import React from 'react'
import './Navbar.css'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BiNews } from 'react-icons/bi'
import { BiDollarCircle } from 'react-icons/bi'
import { FaAward } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { BiQrScan } from 'react-icons/bi'
import ees from '../Navbar/ees.svg'
import udyam from '../Navbar/udyam.svg'
import { useState } from 'react'
import { useEffect } from 'react'

const Navbar = () => {

    const [slideEvent, setEvent] = useState('false');
    const [slideLeader, setLeader] = useState('false');
    const [slideNav, setNav] = useState('false');
    const [width, setWidth] = useState(window.innerWidth);
    const [activeNav, setActiveNav] = useState('#')
    // const hover= document.querySelector('hovered');

   

    const updateWidth = () => {
        setWidth(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    },[]);
    function slideIn(e) {
        setEvent(true);
        setLeader(true);
        const aevent=e.currentTarget.getAttribute('ind');
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

    return (
        <>
            {(!slideNav|| width>=800 ) && <div className='udyam-nav'>
                <div className="udyam-img">
                    <img className='udyam-logo' src={udyam} alt="hero" />
                </div>
                <div className="udyam-icon">
                    <div className="name hovered" ind='#name' onClick={slideIn} id={activeNav === '#name'?'active':''}>
                        <a href="#"><BiQrScan className='info'/></a>
                        <p>Name</p>
                    </div>
                    <div className="about hovered" ind='#about' onClick={slideIn} id={activeNav === '#about'?'active':''}>
                        <a href="#"><AiOutlineInfoCircle className='info' /></a>
                        <p>About Us</p>
                    </div>
                    <div className="events hovered" onClick={slideEvents} id={activeNav === '#event'?'active':''}>
                        <a href="#"><BiNews className='info' /></a>
                        <p>Events</p>
                    </div>
                    <div className="sponsors hovered" ind='#sponsors' onClick={slideIn} id={activeNav === '#sponsors'?'active':''}>
                        <a href="#"><BiDollarCircle className='info' /></a>
                        <p>Sponsors</p>
                    </div>
                    <div className="leaderboard hovered" onClick={slideLeaderboard} id={activeNav === '#leaderboard'?'active':''}>
                        <a href="#"><FaAward className='info' /></a>
                        <p>Leaderboard</p>
                    </div>
                </div>
                {/* <div className="udyam-ees">
                    <img className='ees-img' src={ees} alt="hreo" />
                </div> */}
            </div>}
            <div className="udyam-ees-mobile" onClick={showNav}>
                <img className='ees-img-mobile' src={ees} alt="hreo" />
            </div>
            {!slideEvent && <div className="token">
                <div className="token-event">
                    <div className="digism event-name"><a href="#"> Digism</a></div>
                    <div className="ichip event-name"><a href="#">I-chip</a></div>
                    <div className="devbits event-name"><a href="#">Devbits</a></div>
                    <div className="commnet event-name"><a href="#">Commnet</a></div>
                    <div className="xiota event-name"><a href="#">X-iota</a></div>
                    <div className="cassandra event-name"><a href="#">Cassandra</a></div>
                    <div className="mosaic event-name"><a href="#">Mosaic</a></div>
                    <div className="funckit event-name"><a href="#">Funckit</a></div>
                </div>
            </div>}
            {!slideLeader && <div className="leader">
                <div className="token-event">
                    <div className="digism event-name"><a href="#">Digism</a></div>
                    <div className="ichip event-name"><a href="#">I-chip</a></div>
                    <div className="devbits event-name"><a href="#">Devbits</a></div>
                    <div className="commnet event-name"><a href="#">Commnet</a></div>
                    <div className="xiota event-name"><a href="#">X-iota</a></div>
                    <div className="cassandra event-name"><a href="#">Cassandra</a></div>
                    <div className="mosaic event-name"><a href="#">Mosaic</a></div>
                    <div className="funckit event-name"><a href="#">Funckit</a></div>
                </div>
            </div>}
        </>
    )
}

export default Navbar
