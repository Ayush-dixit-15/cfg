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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import controller from '../public/controller.png';

const Navbar = ({ KYC, About, Contact, Login, Signup, product, subTotal, addProductToCart, removeProductFromCart, clearProduct, gameCart, gameTotal, comboCart, comboTotal, optCart, optTotal, addGameCartToCart, removeGameCartFromCart, clearGameCart, addOptCartToCart, removeOptCartFromCart, clearOptCart, addComboCartToCart, removeComboCartFromCart, clearComboCart }) => {
    const [showcart, setshowcart] = useState("translateX(100rem)");
    const [showmenu, setshowmenu] = useState("translateX(-100rem)");
    const toggleCart = () => {
        if (showcart === "translateX(0)") {
            setshowcart("translateX(100rem)");
        } else {
            setshowcart("translateX(0)");
        }
    }
    const toggleMenu = () => {
        if (showmenu === "translateX(0)") {
            setshowmenu("translateX(-100rem)");
            console.log(showmenu);
        } else {
            setshowmenu("translateX(0)");
            console.log(showmenu);
        }
    }
    const [email, setemail] = useState("");
    const [pic, setpic] = useState("");
    const [kycid, setkycid] = useState(0);
    const saveemail = (items) => {
        localStorage.setItem("email", JSON.stringify(items));
    };
    const savepic = (items) => {
        localStorage.setItem("pic", JSON.stringify(items));
    };
    const savekycid = (items) => {
        localStorage.setItem("kycid", JSON.stringify(items));
    };
    useEffect(() => {
        try {
            if (localStorage.getItem("email")) {
                setemail(JSON.parse(localStorage.getItem("email")));
                saveemail(JSON.parse(localStorage.getItem("email")));
            }
            if (localStorage.getItem("pic")) {
                setpic(JSON.parse(localStorage.getItem("pic")));
                savepic(JSON.parse(localStorage.getItem("pic")));
            }
            if (localStorage.getItem("kycid")) {
                setkycid(JSON.parse(localStorage.getItem("kycid")));
                savekycid(JSON.parse(localStorage.getItem("kycid")));
            }

        } catch (error) {
            console.log(error);
        }
    }, [pic, email]);
    return (
        <>
            <div className={styles.outerNav}>
                <div className={styles.navbar}>
                    <div className={styles.left}>
                        <Link href="/">
                            <Image src={logo} className="cursor-pointer" />
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
                        {
                            pic != "" && pic != "N/A" && <Link href="/Profile"><Image className={styles.pic} src={pic} style={{ height: "30px", borderRadius: "999px" }} height={30} width={30}></Image></Link>
                        }
                        {
                            pic != "" && pic == "N/A" && <Link href="/Profile"><AccountCircleIcon className={styles.pic} /></Link>
                        }
                        <div className={styles.cartSize}>
                            <ShoppingCartIcon
                                className={styles.cartIcon}
                                style={{ color: "white", marginLeft: "2rem" }}
                                onClick={() => toggleCart()}
                            />
                            <span className={styles.cartSizeInfo}>{Object.keys(product).length + Object.keys(gameCart).length + Object.keys(comboCart).length + Object.keys(optCart).length}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.cart} style={{ transform: `${showcart}` }}>
                    <div className={styles.cart_head}>
                        <ArrowBackIosIcon className={styles.cartIcon} onClick={() => toggleCart()} />
                        <span className={styles.cart_title}>Your Cart</span>
                        <span className={styles.cart_itemno}>({Object.keys(product).length + Object.keys(gameCart).length + Object.keys(comboCart).length + Object.keys(optCart).length} items)</span>
                        {Object.keys(product).map((k) => {
                            return <div key={k} style={{ display: "flex", margin: "1rem 2rem" }}>
                                <img src={product[k].img} width={100} height={100}></img>
                                <div style={{ marginLeft: "1rem" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", width: "10rem"}}>
                                <Link href={`/consoles/${k}`} ><h3 style={{fontWeight: "600", cursor: "pointer"}}>{product[k].name}</h3></Link>
                                <DeleteForeverIcon style={{ color: 'var(--red)' }} onClick={() => clearProduct()} />
                                </div>
                                    <p>Quantity: <span className={styles.qtyBtn} onClick={()=>{removeProductFromCart(k,1)}}>-</span>{product[k].qty}<span className={styles.qtyBtn} onClick={()=>{addProductToCart(k,1,product[k].price,product[k].name,product[k].img)}}>+</span></p>
                                    <span style={{ color: "var(--red)" }}>₹{`${product[k].price * product[k].qty}`}</span>
                                </div>
                            </div>
                        })}
                        {Object.keys(gameCart).map((key) => {
                            return <div key={key} style={{ display: "flex", margin: "1rem 2rem" }}>
                                <img src={gameCart[key].img} width={100} height={100}></img>
                                <div style={{ marginLeft: "1rem" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", width: "10rem"}}>
                                <Link href={`/games/${key}`} ><h3  style={{fontWeight: "600", cursor: "pointer"}}>{gameCart[key].name}</h3></Link><DeleteForeverIcon style={{ color: 'var(--red)' }} onClick={() => clearGameCart()} /></div>
                                    <p className={styles.cartQtyAmt}>Quantity: <span className={styles.qtyBtn} onClick={()=>{removeGameCartFromCart(key,1)}}>-</span>{gameCart[key].qty}<span className={styles.qtyBtn} onClick={()=>{addGameCartToCart(key,1,gameCart[key].price,gameCart[key].name,gameCart[key].img)}}>+</span></p>
                                    <span style={{ color: "var(--red)" }}>₹{`${gameCart[key].price * gameCart[key].qty}`}</span>
                                </div>
                            </div>
                        })}
                        {Object.keys(comboCart).map((key) => {
                            return <div key={key} style={{ display: "flex", margin: "1rem 2rem" }}>
                                <img src={comboCart[key].img} width={100} height={100}></img>

                                <div style={{ marginLeft: "1rem" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", width: "10rem"}}>
                                <Link href={`/combos/${key}`} ><h3  style={{fontWeight: "600", cursor: "pointer"}}>{comboCart[key].name}</h3></Link><DeleteForeverIcon style={{ color: 'var(--red)' }} onClick={() => clearComboCart()} /></div>
                                    <p className={styles.cartQtyAmt}>Quantity: <span className={styles.qtyBtn} onClick={()=>{removeComboCartFromCart(key,1)}}>-</span>{comboCart[key].qty}<span className={styles.qtyBtn} onClick={()=>{addComboCartToCart(key,1,comboCart[key].price,comboCart[key].name,comboCart[key].img)}}>+</span></p>
                                    <span style={{ color: "var(--red)" }}>₹{`${comboCart[key].price * comboCart[key].qty}`}</span>
                                </div>
                            </div>
                        })}
                        {Object.keys(optCart).map((key) => {
                            return <div key={key} style={{ display: "flex", margin: "1rem 2rem" }}>
                                <img src={optCart[key].img} width={100} height={100}></img>
                                <div style={{ marginLeft: "1rem" }}>
                                    <h3 style={{ display: "flex", justifyContent: "space-between", width: "10rem", fontWeight: "600", cursor: "pointer" }}>{optCart[key].name}<DeleteForeverIcon style={{ color: 'var(--red)' }} onClick={() => clearOptCart()} /></h3>
                                    <p className={styles.cartQtyAmt}>Quantity: <span className={styles.qtyBtn} onClick={()=>{removeOptCartFromCart(key,1)}}>-</span>{optCart[key].qty}<span className={styles.qtyBtn} onClick={()=>{addOptCartToCart(key,1,optCart[key].price,optCart[key].name,optCart[key].img)}}>+</span></p>
                                    <span style={{ color: "var(--red)" }}>₹{`${optCart[key].price * optCart[key].qty}`}</span>
                                </div>
                            </div>
                        })}
                    </div>
                    {Object.keys(product).length + Object.keys(gameCart).length + Object.keys(comboCart).length + Object.keys(optCart).length === 0 && <div className={styles.cartEmpty}>
                        <ProductionQuantityLimitsIcon style={{ fontSize: "8rem", color: "var(--red)" }} />
                        <span>Your cart is Empty</span>
                    </div>}
                    {(subTotal != 0 || comboTotal != 0) && <div className={styles.checkout}>
                        <hr />
                        <div className={styles.subtotal}>
                            <span>Subtotal: </span>
                            <span>₹{subTotal + gameTotal + comboTotal + optTotal}</span>
                        </div>
                        <Link href="/KYC"><button>Checkout</button></Link>
                    </div>}
                </div>
            </div>
            <div className={styles.phoneNav}>
                <MenuIcon onClick={() => toggleMenu()} />
                <Link href="/"><Image src={logo} /></Link>
                <div className={styles.cartSize}><ShoppingCartIcon onClick={() => toggleCart()} /><span className={styles.cartSizeInfo}>{Object.keys(product).length + Object.keys(gameCart).length + Object.keys(comboCart).length + Object.keys(optCart).length}</span></div>
                <div className={styles.phoneMenu} style={{ transform: `${showmenu}` }}>
                    <div className={styles.menuHeader} >
                        <Link href="/"><Image src={logo} /></Link>
                        <CloseIcon onClick={() => toggleMenu()} />
                    </div>
                    <div className={styles.menuLinks} >
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
                        {
                            email!="" && <ul>
                                <li><Link href="/Profile">Your Profile</Link></li>
                            </ul>
                        }
                    </div>
                </div>
                <div className={styles.phoneCart} style={{ transform: `${showcart}` }}>
                <div className={styles.cart_head}>
                        <ArrowBackIosIcon className={styles.cartIcon} onClick={() => toggleCart()} />
                        <span className={styles.cart_title}>Your Cart</span>
                        <span className={styles.cart_itemno}>({Object.keys(product).length + Object.keys(gameCart).length + Object.keys(comboCart).length + Object.keys(optCart).length} items)</span>
                        {Object.keys(product).map((k) => {
                            return <div key={k} style={{ display: "flex", margin: "1rem 2rem" }}>
                                <img src={product[k].img} width={100} height={100}></img>
                                <div style={{ marginLeft: "1rem" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", width: "10rem"}}>
                                <Link href={`/consoles/${k}`} ><h3 style={{fontWeight: "600"}}>{product[k].name}</h3></Link>
                                <DeleteForeverIcon style={{ color: 'var(--red)' }} onClick={() => clearProduct()} />
                                </div>
                                    <p>Quantity: <span className={styles.qtyBtn} onClick={()=>{removeProductFromCart(k,1)}}>-</span>{product[k].qty}<span className={styles.qtyBtn} onClick={()=>{addProductToCart(k,1,product[k].price,product[k].name,product[k].img)}}>+</span></p>
                                    <span style={{ color: "var(--red)" }}>₹{`${product[k].price * product[k].qty}`}</span>
                                </div>
                            </div>
                        })}
                        {Object.keys(gameCart).map((key) => {
                            return <div key={key} style={{ display: "flex", margin: "1rem 2rem" }}>
                                <img src={gameCart[key].img} width={100} height={100}></img>
                                <div style={{ marginLeft: "1rem" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", width: "10rem"}}>
                                <Link href={`/games/${key}`} ><h3  style={{fontWeight: "600"}}>{gameCart[key].name}</h3></Link><DeleteForeverIcon style={{ color: 'var(--red)' }} onClick={() => clearGameCart()} /></div>
                                    <p className={styles.cartQtyAmt}>Quantity: <span className={styles.qtyBtn} onClick={()=>{removeGameCartFromCart(key,1)}}>-</span>{gameCart[key].qty}<span className={styles.qtyBtn} onClick={()=>{addGameCartToCart(key,1,gameCart[key].price,gameCart[key].name,gameCart[key].img)}}>+</span></p>
                                    <span style={{ color: "var(--red)" }}>₹{`${gameCart[key].price * gameCart[key].qty}`}</span>
                                </div>
                            </div>
                        })}
                        {Object.keys(comboCart).map((key) => {
                            return <div key={key} style={{ display: "flex", margin: "1rem 2rem" }}>
                                <img src={comboCart[key].img} width={100} height={100}></img>

                                <div style={{ marginLeft: "1rem" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", width: "10rem"}}>
                                <Link href={`/combos/${key}`} ><h3  style={{fontWeight: "600"}}>{comboCart[key].name}</h3></Link><DeleteForeverIcon style={{ color: 'var(--red)' }} onClick={() => clearComboCart()} /></div>
                                    <p className={styles.cartQtyAmt}>Quantity: <span className={styles.qtyBtn} onClick={()=>{removeComboCartFromCart(key,1)}}>-</span>{comboCart[key].qty}<span className={styles.qtyBtn} onClick={()=>{addComboCartToCart(key,1,comboCart[key].price,comboCart[key].name,comboCart[key].img)}}>+</span></p>
                                    <span style={{ color: "var(--red)" }}>₹{`${comboCart[key].price * comboCart[key].qty}`}</span>
                                </div>
                            </div>
                        })}
                        {Object.keys(optCart).map((key) => {
                            return <div key={key} style={{ display: "flex", margin: "1rem 2rem" }}>
                                <img src={optCart[key].img} width={100} height={100}></img>
                                <div style={{ marginLeft: "1rem" }}>
                                    <h3 style={{ display: "flex", justifyContent: "space-between", width: "10rem", fontWeight: "600" }}>{optCart[key].name}<DeleteForeverIcon style={{ color: 'var(--red)' }} onClick={() => clearOptCart()} /></h3>
                                    <p className={styles.cartQtyAmt}>Quantity: <span className={styles.qtyBtn} onClick={()=>{removeOptCartFromCart(key,1)}}>-</span>{optCart[key].qty}<span className={styles.qtyBtn} onClick={()=>{addOptCartToCart(key,1,optCart[key].price,optCart[key].name,optCart[key].img)}}>+</span></p>
                                    <span style={{ color: "var(--red)" }}>₹{`${optCart[key].price * optCart[key].qty}`}</span>
                                </div>
                            </div>
                        })}
                    </div>
                    {Object.keys(product).length + Object.keys(gameCart).length + Object.keys(comboCart).length + Object.keys(optCart).length === 0 && <div className={styles.cartEmpty}>
                        <ProductionQuantityLimitsIcon style={{ fontSize: "8rem", color: "var(--red)" }} />
                        <span>Your cart is Empty</span>
                    </div>}
                    {(subTotal != 0 || comboTotal != 0) && <div className={styles.checkout}>
                        <hr />
                        <div className={styles.subtotal}>
                            <span>Subtotal: </span>
                            <span>₹{subTotal + gameTotal + comboTotal + optTotal}</span>
                        </div>
                        {kycid == 0 && <Link href="/KYC"><button>Checkout</button></Link>}
                        {kycid != 0 && <Link href={`/checkout/${kycid}`}><button>Checkout</button></Link>}
                    </div>}
                </div>
            </div>
        </>
    );
};

export default Navbar;
