import "../styles/globals.css";
import Footer from "../components/Footer";
import Head from "next/head";
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
    const [product, setProduct] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    try {
        if (localStorage.getItem("product")) {
          setProduct(JSON.parse(localStorage.getItem("product")));
          saveProduct(JSON.parse(localStorage.getItem("product")));
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

  const addProductToCart = (productSlug, qty, price, name) => {
    let newProduct = product;
    if (productSlug in product) {
      newProduct[productSlug].qty = product[productSlug].qty + qty;
    }
    else {
      newProduct[productSlug] = { qty: 1, price, name}
    }
    setProduct(newProduct);
    saveProduct(newProduct);
  }

  const clearProduct = () => {
    setProduct({});
    saveProduct({});
  }

  const removeProductFromCart = (productSlug, qty, price, name) => {
    let newProduct = JSON.parse(JSON.stringify(product));
    if (productSlug in product) {
      newProduct[productSlug].qty = product[productSlug].qty - qty;
    }
    if (newProduct[productSlug]["qty"] <= 0) {
      delete newProduct[productSlug]
    }
    setCart(newProduct);
    saveCart(newProduct);
  }
    return (
        <>
            <Head>
            <script src="https://accounts.google.com/gsi/client" async defer></script>
            </Head>
            <Component product={product} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart} clearProduct={clearProduct} subTotal={subTotal} {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
