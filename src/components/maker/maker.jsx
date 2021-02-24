import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Jason',
      Company: 'Google',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'jason@gmail.com',
      message: 'Go for it',
      fileName: 'jason',
      fileURL: null
    },
    {
      id: '2',
      name: 'Jason2',
      Company: 'Google',
      theme: 'light',
      title: 'Software Engineer',
      email: 'jason@gmail.com',
      message: 'Go for it',
      fileName: 'jason',
      fileURL: null
    },
    {
      id: '3',
      name: 'Jason3',
      Company: 'Google',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'jason@gmail.com',
      message: 'Go for it',
      fileName: 'jason',
      fileURL: null
    }
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push('/');
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards}/>
        <Preview cards={cards}/>
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
