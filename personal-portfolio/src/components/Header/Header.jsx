import React, { useState, useSyncExternalStore } from 'react';
import './Header.css'
import '../../../src/App.css'

import { FaCcAmazonPay,FaRegUser,FaHome,FaBluetooth,FaRegTimesCircle,FaAppStore } from "react-icons/fa";

const Header = () => {
        //  =========toggle-menue===============
    const [Toggle, showMenue]= useState(false);
    return (
        <header className='header'>
            <nav className="nav container">
                <a href="">Shaidn</a>
                <div className={ Toggle ? "nav_menue show_menue" : "nav_menue"}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="" className='nav_link ative-link'>
                                <i className='uil uil-estate nav_icon'> <FaHome/> </i> Home
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="" className='nav_link'>
                                <i className='uil uil-user nav_icon'> <FaCcAmazonPay/> </i>About
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="" className='nav_link'>
                                <i className='uil uil-file-alt nav_icon'> <FaRegUser/> </i>Skills
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="" className='nav_link'>
                                <i className='uil uil- nav_icon'> <FaBluetooth/> </i> services
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="" className='nav_link'>
                                <i className='uil uil- nav_icon'> <FaBluetooth/> </i> portfolio
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="" className='nav_link'>
                                <i className='uil uil- nav_icon'> <FaBluetooth/> </i> contact
                            </a>
                        </li>
                    </ul>
                    <i  onClick={()=>showMenue(!Toggle)} className='nav_close'><FaRegTimesCircle/></i>
                </div>
                <div className="nav_toggle" onClick={()=>showMenue(!Toggle)} ><i> <FaAppStore/> </i></div>
            </nav>
        </header>
    );
};

export default Header;