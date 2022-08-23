import React from 'react';
import Navbar from "../components/Navbar";
import styles from '../styles/Tnc.module.css';

const Tnc = ({subTotal,product}) => {
  return (
    <div><Navbar product={product} KYC={'KYC'} About={'About'} Contact={'Contact'} Login={'Login'} Signup={'Signup'} subTotal={subTotal} />
        </div>
  )
}

export default Tnc