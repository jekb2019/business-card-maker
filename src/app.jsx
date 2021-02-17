import { useState } from 'react';
import styles from './app.module.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import LoginBox from './components/login_box/loginBox';

function App() {

  const [showLoginBox, setShowLoginBox] = useState(true);

  return (
    <div>
      {showLoginBox && 
        <div className={styles.login_box}>
          <LoginBox/>
        </div>
      }
    </div>
  );
}

export default App;
