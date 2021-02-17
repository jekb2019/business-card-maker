import React from 'react';
import styles from './header.module.css';

const Header = ({ onLogout }) => {


    return(
        <header className={styles.header}>
            {true && 
                <button onClick={onLogout} className={styles.logout_button}>Logout</button>
            }
            <img className={styles.logo} src={process.env.PUBLIC_URL + '/favicon.ico'}/>
            <h1>Business Card Maker</h1>
        </header>
    )
};

export default Header;