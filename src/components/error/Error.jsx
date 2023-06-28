import React from 'react';
import styles from './Error.module.css';
import Button from '../button/Button';
import Card from '../card/Card';

const Error = props => {
  return (<div>
    <div className={styles.back} onClick={props.onConfirm}/>
    <Card className={styles.modal}>
    <header className={styles.header }>
      <h2>{props.title}</h2>
    </header>
    <div className={styles.content}>
      <p>{props.message}</p>
    </div>
    <footer className={styles.actions}>
      <Button onClick={props.onConfirm}>OK</Button>
    </footer>
  </Card>
  </div>); 
}

export default Error;