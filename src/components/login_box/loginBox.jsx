import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './loginBox.module.css';

const LoginBox = ({ authService }) => {

    const history = useHistory();

    const goToMaker = (userId) => {
        history.push({
            pathname: '/maker',
            state: {id: userId},
        });
    };

    const onLogin = (event) => {
        authService.login(event.currentTarget.textContent)
    .then(data => goToMaker(data.user.uid));
    };

    useEffect(() => {
        authService
        .onAuthChange(user => {
            user && goToMaker(user.uid);
        });
    })

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