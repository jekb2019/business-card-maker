import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './loginBox.module.css';

const LoginBox = ({ authService }) => {

    const onLogin = (event) => {
        authService.login(event.currentTarget.textContent)
    .then(console.log);
    };

    return (
        <section className={styles.login_box}>
            <Header/>
            <div className={styles.login_section}>
                <h1 className={styles.title}>Login</h1>
                <ul>
                    <li>
                        <button className={styles.option} onClick={onLogin}>Google</button>
                    </li>
                    <li>
                        <button className={styles.option} onClick={onLogin}>Github</button>
                    </li>
                </ul>
            </div>
            <Footer/>
        </section>
    )
};

export default LoginBox;