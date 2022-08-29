import React, { useState } from 'react';
import styles from '../styles/Buy.module.css';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import Footer from '../components/Footer';
import StoreIcon from '@mui/icons-material/Store';
import { useRouter } from 'next/router';

const Buy = ({ product, subTotal, addProductToCart, removeProductFromCart, clearProduct, gameCart, gameTotal, comboCart, comboTotal, optCart, optTotal, addGameCartToCart, removeGameCartFromCart, clearGameCart, addOptCartToCart, removeOptCartFromCart, clearOptCart, addComboCartToCart, removeComboCartFromCart, clearComboCart }) => {
  const [name, setname] = useState("");
  const [number, setnumber] = useState();
  const [email, setemail] = useState("");
  const [model, setmodel] = useState("");
  const [prob, setprob] = useState("");
  const router = useRouter();
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
    else if (e.target.name === "model") {
      setmodel(e.target.value);
    }
  }
  const handleSubmit = async () => {
    e.preventDefault();
    const data = { name: name, number: number, email: email, model: model };
    let res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_HOST}/api/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_READ}`
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response);
    if (response.error) {
      console.log(response.error.message);
      setprob(response.error.message);
    }
    else
        {
            router.push(`/Submitted`);
        }
  }
  return (
    <div className={styles.buy}>
      <Navbar KYC={'KYC'} About={'About'} Contact={'Contact'} Login={'Login'} Signup={'Signup'} product={product} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart} clearProduct={clearProduct} subTotal={subTotal} gameCart={gameCart} gameTotal={gameTotal} comboCart={comboCart} comboTotal={comboTotal} optCart={optCart} optTotal={optTotal} addGameCartToCart={addGameCartToCart} removeGameCartFromCart={removeGameCartFromCart} clearGameCart={clearGameCart} addOptCartToCart={addOptCartToCart} removeOptCartFromCart={removeOptCartFromCart} clearOptCart={clearOptCart} addComboCartToCart={addComboCartToCart} removeComboCartFromCart={removeComboCartFromCart} clearComboCart={clearComboCart} />
      <div className={styles.buy_body}>
        <div className={styles.controllers}>
          <img src="https://media.giphy.com/media/C772CenNZT8zgb7yle/giphy.gif" style={{ transform: "translateX(9rem)", zIndex: "-3" }} />
          <img src="https://media.giphy.com/media/JHwADB1X8SNLol2qEq/giphy.gif" style={{ transform: "translateX(6rem)", zIndex: "-2" }} />
          <img src="https://media.giphy.com/media/VCM2Wp9VETRdvADr6z/giphy.gif" style={{ transform: "translateX(3rem)", zIndex: "-1" }} />
          <img src="https://media.giphy.com/media/gZtg9Mu6Q1vKT3VHQk/giphy.gif" />
          <img src="https://media.giphy.com/media/a9PboMus77ocbOiB2T/giphy.gif" style={{ transform: "translateX(-3rem)", zIndex: "-1" }} />
          <img src="https://media.giphy.com/media/PGUJ698JcuBXB8cIDL/giphy.gif" style={{ transform: "translateX(-6rem)", zIndex: "-2" }} />
          <img src="https://media.giphy.com/media/Wv1JZ9FEJs8LUdkBLs/giphy.gif" style={{ transform: "translateX(-9rem)", zIndex: "-3" }} />
        </div>
        <h1>Buy a Console</h1>
        <form onSubmit={handleSubmit} method="POST">
          <span key={prob} style={{ color: "var(--red)", textAlign: "center" }}>{prob}</span>
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
          <label htmlFor="model">Preferred console<strong style={{ color: "var(--red)" }}>*</strong></label>
          <input
            value={model}
            onChange={handleChange}
            placeholder="Enter preferred console"
            type="text"
            id="model"
            name="model"
            autoComplete="model"
            required
            style={{ padding: "0.5rem" }}
          />
          <button type="submit">Buy<StoreIcon style={{ marginLeft: "1rem" }} /></button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Buy;