import React, { useRef } from 'react';
import styles from './card_add_form.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';

const CardAddForm = ({ onAdd }) => {
  const themeRef = useRef();
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: '',
      theme: themeRef.current.value,

    }
    formRef.current.reset();
    onAdd(card);
  };
  return (
    <form ref={formRef} className={styles.form}>
      <input 
        ref={nameRef}
       className={styles.input}
       type="text" 
       name="name" 
       placeholder="Name" />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        placeholder="Company"
      />
      <select 
        ref={themeRef}
        className={styles.select} name="theme" placeholder="Theme">
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </select>
      <input 
        ref={titleRef}
        className={styles.input} 
        type="text" 
        name="title" 
        placeholder="Title" />
      <input 
        ref={emailRef}
        className={styles.input} 
        type="text" 
        name="email" 
        placeholder="Email" />
      <textarea 
        ref={messageRef}
        className={styles.textarea} 
        name="message" 
        placeholder="Message" />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
