import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './loginBox.module.css';

const LoginBox = (props) => {
    return (
        <div className={styles.login_box}>
            <Header/>
            <div className={styles.login_section}>
                <h1 className={styles.title}>Login</h1>
                <ul>
                    <li className={styles.option}>
                        <a>Google</a>
                    </li>
                    <li className={styles.option}>
                        <a>Github</a>
                    </li>
                </ul>
            </div>
            <Footer/>
        </div>
    )
};

export default LoginBox;