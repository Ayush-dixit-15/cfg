import "../styles/globals.css";
import Footer from "../components/Footer";
import Head from "next/head";
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Script from "next/script";
import LoadingBar from 'react-top-loading-bar';
import WhatsApp from "@mui/icons-material/WhatsApp";
import Whatsapp from "../public/2.png";
import Image from 'next/image';
function MyApp({ Component, pageProps }) {
  const [product, setProduct] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [gameCart, setgameCart] = useState({});
  const [gameTotal, setgameTotal] = useState(0);
  const [comboCart, setcomboCart] = useState({});
  const [comboTotal, setcomboTotal] = useState(0);
  const [optCart, setoptCart] = useState({});
  const [optTotal, setoptTotal] = useState(0);
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  useEffect(() => {router.events.on('routeChangeStart', ()=>{
    setProgress(40)
  })
  router.events.on('routeChangeComplete', ()=>{
    setProgress(100)
  })
    try {
      if (localStorage.getItem("product")) {
        setProduct(JSON.parse(localStorage.getItem("product")));
        saveProduct(JSON.parse(localStorage.getItem("product")));
      }
      if (localStorage.getItem("gameCart")) {
        setgameCart(JSON.parse(localStorage.getItem("gameCart")));
        saveGameCart(JSON.parse(localStorage.getItem("gameCart")));
      }
      if (localStorage.getItem("comboCart")) {
        setcomboCart(JSON.parse(localStorage.getItem("comboCart")));
        saveComboCart(JSON.parse(localStorage.getItem("comboCart")));
      }
      if (localStorage.getItem("optCart")) {
        setoptCart(JSON.parse(localStorage.getItem("optCart")));
        saveOptCart(JSON.parse(localStorage.getItem("optCart")));
      }
    } catch (error) {
      console.error(error)
      localStorage.clear()
    }
  }, [])

  const saveProduct = (myProduct) => {
    localStorage.setItem("product", JSON.stringify(myProduct))
    let subt = 0;
    let keys = Object.keys(myProduct);
    for (let i = 0; i < keys.length; i++) {
      subt += myProduct[keys[i]]["price"] * myProduct[keys[i]].qty;
    }
    setSubTotal(subt);
  }
  const saveGameCart = (myGameCart) => {
    localStorage.setItem("gameCart", JSON.stringify(myGameCart))
    let subt = 0;
    let keys = Object.keys(myGameCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myGameCart[keys[i]]["price"] * myGameCart[keys[i]].qty;
    }
    setgameTotal(subt);
  }
  const saveComboCart = (myComboCart) => {
    localStorage.setItem("comboCart", JSON.stringify(myComboCart))
    let subt = 0;
    let keys = Object.keys(myComboCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myComboCart[keys[i]]["price"] * myComboCart[keys[i]].qty;
    }
    setcomboTotal(subt);
  }
  const saveOptCart = (myOptCart) => {
    localStorage.setItem("optCart", JSON.stringify(myOptCart))
    let subt = 0;
    let keys = Object.keys(myOptCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myOptCart[keys[i]]["price"] * myOptCart[keys[i]].qty;
    }
    setoptTotal(subt);
  }

  
  const addProductToCart = (productSlug, qty, price, name, img) => {
    let newProduct = product;
    if (productSlug in product) {
      newProduct[productSlug].qty = product[productSlug].qty + qty;
    }
    else {
      newProduct[productSlug] = { qty: 1, price, name, img }
    }
    router.push(`/Games`);
    setProduct(newProduct);
    saveProduct(newProduct);
  }
  const addGameCartToCart = (productSlug, qty, price, name, img) => {
    let newProduct = gameCart;
    if (productSlug in gameCart) {
      newProduct[productSlug].qty = gameCart[productSlug].qty + qty;
    }
    else {
      newProduct[productSlug] = { qty: 1, price, name, img }
    }
    setgameCart(newProduct);
    saveGameCart(newProduct);
  }
  const addComboCartToCart = (productSlug, qty, price, name, img) => {
    let newProduct = comboCart;
    if (productSlug in comboCart) {
      newProduct[productSlug].qty = comboCart[productSlug].qty + qty;
    }
    else {
      newProduct[productSlug] = { qty: 1, price, name, img }
    }
    router.push(`/KYC`);
    setcomboCart(newProduct);
    saveComboCart(newProduct);
  }
  const addOptCartToCart = (productSlug, qty, price, name, img) => {
    let newProduct = optCart;
    if (productSlug in optCart) {
      newProduct[productSlug].qty = optCart[productSlug].qty + qty;
    }
    else {
      newProduct[productSlug] = { qty: 1, price, name, img }
    }
    setoptCart(newProduct);
    saveOptCart(newProduct);
  }

  const clearProduct = (productSlug) => {
    delete product[productSlug]; 
    setProduct(product);
    saveProduct(product);
  }
  const clearGameCart = (productSlug) => {
    delete gameCart[productSlug]; 
    setgameCart(gameCart);
    saveGameCart(gameCart);
  }
  const clearComboCart = (productSlug) => {
    delete comboCart[productSlug];
    setcomboCart(comboCart);
    saveComboCart(comboCart);
  }
  const clearOptCart = (productSlug) => {
    delete optCart[productSlug];
    setoptCart(optCart);
    saveOptCart(optCart);
  }

  const removeProductFromCart = (productSlug, qty, price, name, img) => {
    let newProduct = JSON.parse(JSON.stringify(product));
    if (productSlug in product) {
      newProduct[productSlug].qty = product[productSlug].qty - qty;
    }
    if (newProduct[productSlug]["qty"] <= 0) {
      delete newProduct[productSlug]
    }
    setProduct(newProduct);
    saveProduct(newProduct);
  }
  const removeGameCartFromCart = (productSlug, qty, price, name, img) => {
    let newProduct = JSON.parse(JSON.stringify(gameCart));
    if (productSlug in gameCart) {
      newProduct[productSlug].qty = gameCart[productSlug].qty - qty;
    }
    if (newProduct[productSlug]["qty"] <= 0) {
      delete newProduct[productSlug]
    }
    setgameCart(newProduct);
    saveGameCart(newProduct);
  }
  const removeComboCartFromCart = (productSlug, qty, price, name, img) => {
    let newProduct = JSON.parse(JSON.stringify(comboCart));
    if (productSlug in comboCart) {
      newProduct[productSlug].qty = comboCart[productSlug].qty - qty;
    }
    if (newProduct[productSlug]["qty"] <= 0) {
      delete newProduct[productSlug]
    }
    setcomboCart(newProduct);
    saveComboCart(newProduct);
  }
  const removeOptCartFromCart = (productSlug, qty, price, name, img) => {
    let newProduct = JSON.parse(JSON.stringify(optCart));
    if (productSlug in optCart) {
      newProduct[productSlug].qty = optCart[productSlug].qty - qty;
    }
    if (newProduct[productSlug]["qty"] <= 0) {
      delete newProduct[productSlug]
    }
    setoptCart(newProduct);
    saveOptCart(newProduct);
  }
//   <script async src="https://www.googletagmanager.com/gtag/js?id=G-K48YYQ1Z1G"></script>
// <script>
  // window.dataLayer = window.dataLayer || [];
  // function gtag(){dataLayer.push(arguments);}
  // gtag('js', new Date());

  // gtag('config', 'G-K48YYQ1Z1G');
// </script>
  return (
    <>
      <Head>
        <script src="https://accounts.google.com/gsi/client" async defer></script>
      </Head>
      <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-K48YYQ1Z1G"/>
      <Script strategy="lazyOnload" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-K48YYQ1Z1G');
        `}
      </Script>
      <LoadingBar
      color='#FF0000'
      waitingTime={400}
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
      <Component product={product} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart} clearProduct={clearProduct} subTotal={subTotal} gameCart={gameCart} gameTotal={gameTotal} comboCart={comboCart} comboTotal={comboTotal} optCart={optCart} optTotal={optTotal} addGameCartToCart={addGameCartToCart} removeGameCartFromCart={removeGameCartFromCart} clearGameCart={clearGameCart} addOptCartToCart={addOptCartToCart} removeOptCartFromCart={removeOptCartFromCart} clearOptCart={clearOptCart} addComboCartToCart={addComboCartToCart} removeComboCartFromCart={removeComboCartFromCart} clearComboCart={clearComboCart} {...pageProps}/>
      <a href = "https://wa.me/918287702693" target="_blank">
      <Image src = {Whatsapp}
               style={{
                position:"fixed",
                bottom:"40px",
                right:"0px",
                // height:"5rem",
                // width:"10rem",
            }}
        className="cursor-pointer" />
      </a>
    </>
  );
}

export default MyApp;
