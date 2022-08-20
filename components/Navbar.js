import React from "react";
import styles from "../styles/Navbar.module.css";
import logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Script from "next/script";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useEffect } from "react";
import { useState } from "react";

const Navbar = ({ KYC, About, Contact, Login, Signup, product, subTotal }) => {
    const [email, setemail] = useState("");
    const saveemail = (items) => {
        localStorage.setItem("email", JSON.stringify(items));
    };
    useEffect(() => {
        try {
            if (localStorage.getItem("email")) {
                setemail(JSON.parse(localStorage.getItem("email")));
                saveemail(JSON.parse(localStorage.getItem("email")));
            }
        } catch (error) {
            console.log(error);
        }
    }, []);
    return (
        <>
            <Script src="/script.js"></Script>
            <div className={styles.outerNav}>
                <div className={styles.navbar}>
                    <div className={styles.left}>
                        <Link href="/">
                            <Image src={logo} />
                        </Link>
                        <ul>
                            {KYC != null && (
                                <li>
                                    <Link href={`/${KYC}`}>{KYC}</Link>
                                </li>
                            )}
                            {About != null && (
                                <li>
                                    <Link href={`/${About}`}>{About}</Link>
                                </li>
                            )}
                            {Contact != null && (
                                <li>
                                    <Link href={`/${Contact}`}>{Contact}</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className={styles.right}>
                        {email == "" && <ul>
                            {Login != null && (
                                <li>
                                    <Link href={`/${Login}`}>{Login}</Link>
                                </li>
                            )}
                            {Signup != null && (
                                <li>
                                    <Link href={`/${Signup}`}>{Signup}</Link>
                                </li>
                            )}
                        </ul>}
                        <ShoppingCartIcon
                            id="cartBtn"
                            style={{ color: "white" }}
                        />
                    </div>
                </div>
                <div id="cart" className={styles.cart}>
                    <div className={styles.cart_head}>
                        <ArrowBackIosIcon id="closeBtn" />
                        <span className={styles.cart_title}>Your Cart</span>
                        <span className={styles.cart_itemno}>(0 items)</span>
                        {Object.keys(product).map((k) => {
                            return <div key={k} style={{ display: "flex", margin: "1rem 2rem" }}>
                                {/* <span>qty: {product[k].qty}</span>
                  <span>name: {product[k].name}</span>
                  <span>price: {product[k].price}</span> */}
                                <img src={product[k].img} width={100} height={100}></img>
                                <div style={{ marginLeft: "1rem" }}>
                                    <h3>{product[k].name}</h3>
                                    <p>Quantity: {product[k].qty}</p>
                                    <span style={{ color: "var(--red)" }}>₹{`${product[k].price * product[k].qty}`}</span>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className={styles.checkout}>
                        <hr />
                        <div className={styles.subtotal}>
                            <span>Subtotal: </span>
                            <span>₹{subTotal}</span>
                        </div>
                        <button>Checkout</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
