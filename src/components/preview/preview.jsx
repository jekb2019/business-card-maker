import React, { memo } from 'react';
import Card from '../card/card';
import styles from './preview.module.css';

const Preview = memo(({ cards }) => {

  return(
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
        {
          Object.keys(cards).map(key => (<Card card={cards[key]}/>))
        }
      </ul>
    </section>
  )
});

export default Preview;