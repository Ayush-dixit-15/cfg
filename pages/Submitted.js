import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import styles from '../styles/Submit.module.css';

const Submitted = () => {
  
  return (
    <div className={styles.submit}>
        <span>
        <CheckIcon/>
        </span>
        <h3>Submission Successful</h3>
        <p>Thank you for submitting your response</p>
    </div>
  )
}

export default Submitted