import { useState } from 'react';
import styles from './app.module.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import LoginBox from './components/login_box/loginBox';

function App({authService}) {

  return (
      <div className={styles.app}>
        <LoginBox authService={authService}/>
      </div>
  );
}

export default App;
