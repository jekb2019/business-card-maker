import React, { useState } from 'react';
import styles from './header.module.css';

const Header = (props) => {
    const [showLogout, setShowLogout] = useState(true);


    return(
        <div className={styles.header}>
            {showLogout && 
                <button className={styles.logout_button}>Logout</button>
            }
            <img className={styles.header_logo} src={process.env.PUBLIC_URL + '/favicon.ico'}/>
            <h1>Business Card Maker</h1>
        </div>
    )
};

export default Header;