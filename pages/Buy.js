import React from 'react';
import styles from '../styles/Buy.module.css';
import Navbar from '../components/Navbar';


const Buy = ({product, subTotal}) => {
  return (
    <div>
      <Navbar product={product} KYC={'KYC'} About={'About'} Contact={'Contact'} Login={'Login'} Signup={'Signup'} subTotal={subTotal} />
      <div>
        
      </div>
    </div>
  )
}

export default Buy;