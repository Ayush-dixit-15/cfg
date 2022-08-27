import React, { useState } from 'react';
import styles from '../styles/Sell.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import redconsole from '../public/redconsole.png';
import whiteconsole from '../public/whiteconsole.png';
import Image from 'next/image';
import SellIcon from '@mui/icons-material/Sell';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SupportIcon from '@mui/icons-material/Support';

const Sell = ({ product, subTotal, addProductToCart, removeProductFromCart, clearProduct, gameCart, gameTotal, comboCart, comboTotal, optCart, optTotal, addGameCartToCart, removeGameCartFromCart, clearGameCart, addOptCartToCart, removeOptCartFromCart, clearOptCart, addComboCartToCart, removeComboCartFromCart, clearComboCart }) => {
  const [name, setname] = useState("");
  const [number, setnumber] = useState();
  const [email, setemail] = useState("");
  const [year, setyear] = useState();
  const [model, setmodel] = useState("");
  const handleChange = (e) => {
    if (e.target.name === "name") {
      setname(e.target.value);
    }
    else if (e.target.name === "number") {
      setnumber(e.target.value);
    }
    else if (e.target.name === "email") {
      setemail(e.target.value);
    }
    else if (e.target.name === "year") {
      setyear(e.target.value);
    }
    else if (e.target.name === "model") {
      setmodel(e.target.value);
    }
  }
  return (
    <div className={styles.sell}>
      <Navbar KYC={'KYC'} About={'About'} Contact={'Contact'} Login={'Login'} Signup={'Signup'} product={product} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart} clearProduct={clearProduct} subTotal={subTotal} gameCart={gameCart} gameTotal={gameTotal} comboCart={comboCart} comboTotal={comboTotal} optCart={optCart} optTotal={optTotal} addGameCartToCart={addGameCartToCart} removeGameCartFromCart={removeGameCartFromCart} clearGameCart={clearGameCart} addOptCartToCart={addOptCartToCart} removeOptCartFromCart={removeOptCartFromCart} clearOptCart={clearOptCart} addComboCartToCart={addComboCartToCart} removeComboCartFromCart={removeComboCartFromCart} clearComboCart={clearComboCart} />
      <div className={styles.red}>
        <Image src={redconsole} />
      </div>
      <div className={styles.white}>
        <Image src={whiteconsole} />
      </div>
      <form>
        <h1>Sell your console</h1>
        <label htmlFor="name">Full Name<strong style={{ color: "var(--red)" }}>*</strong></label>
        <input
          value={name}
          onChange={handleChange}
          placeholder="Enter your Name"
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          required
          style={{ padding: "0.5rem" }}
        />
        <label htmlFor="number">Mobile Number<strong style={{ color: "var(--red)" }}>*</strong></label>
        <input
          value={number}
          onChange={handleChange}
          placeholder="Enter your Mobile Number"
          type="number"
          id="number"
          name="number"
          autoComplete="number"
          required
          style={{ padding: "0.5rem" }}
        />
        <label htmlFor="email">E-mail<strong style={{ color: "var(--red)" }}>*</strong></label>
        <input
          value={email}
          onChange={handleChange}
          placeholder="Enter your E-mail"
          type="text"
          id="email"
          name="email"
          autoComplete="email"
          required
          style={{ padding: "0.5rem" }}
        />
        <label htmlFor="year">Year of Purchase<strong style={{ color: "var(--red)" }}>*</strong></label>
        <input
          value={year}
          onChange={handleChange}
          placeholder="Enter Year of Purchase"
          type="number"
          id="year"
          name="year"
          autoComplete="year"
          required
          style={{ padding: "0.5rem" }}
        />
        <label htmlFor="model">Console's Model Number<strong style={{ color: "var(--red)" }}>*</strong></label>
        <input
          value={model}
          onChange={handleChange}
          placeholder="Enter Console's Model Number"
          type="text"
          id="model"
          name="model"
          autoComplete="model"
          required
          style={{ padding: "0.5rem" }}
        />
        <button type="submit">Request Selling<SellIcon style={{marginLeft: "1rem"}}/></button>
      </form>
      <div className={styles.why}>
        <h1>Why sell on Craving For Gaming?</h1>
        <div className={styles.whyBenefits}>
          <div className={styles.benefitsItem}>
            <span><LocalShippingIcon style={{fontSize: "4rem", color: "var(--red)"}}/></span>
            <h3>Sell Across India</h3>
            <p>Reach over 50 crore+ customers across 27000+ pincodes</p>
          </div>
          <div className={styles.benefitsItem}>
            <span><AutoGraphIcon style={{fontSize: "4rem", color: "var(--red)"}}/></span>
            <h3>Higher Profits</h3>
            <p>Reach over 50 crore+ customers across 27000+ pincodes</p>
          </div>
          <div className={styles.benefitsItem}>
            <span><SupportIcon style={{fontSize: "4rem", color: "var(--red)"}}/></span>
            <h3>24x7 Seller Support</h3>
            <p>Reach over 50 crore+ customers across 27000+ pincodes</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Sell