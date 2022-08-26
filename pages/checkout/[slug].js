import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import Navbar from "../../components/Navbar";
import styles from '../../styles/Checkout.module.css';
import Link from 'next/link';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Footer from '../../components/Footer';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Checkout = ({ product, subTotal, addProductToCart, removeProductFromCart, clearProduct, gameCart, gameTotal, comboCart, comboTotal, optCart, optTotal, addGameCartToCart, removeGameCartFromCart, clearGameCart, addOptCartToCart, removeOptCartFromCart, clearOptCart, addComboCartToCart, removeComboCartFromCart, clearComboCart, details }) => {
    const [code,setcode] = useState();
    const [total, settotal] = useState(0);
    const [delivery, setdelivery] = useState(0);
    const [yes, setyes] = useState("none");
    const [no, setno] = useState("none");
    const router = useRouter();
    let consoleOrder = "";
    let gameOrder = "";
    let comboOrder = "";
    let controllerOrder = "";
    // console.log(product(Object.keys(product)).name);
    for (let i = 0; i < Object.keys(product).length; i++) {
        consoleOrder = consoleOrder.concat(", ", Object.keys(product)[i].name, Object.keys(product)[i].qty);
    };
    for (let i = 0; i < Object.keys(gameCart).length; i++) {
        gameOrder = gameOrder.concat(", ", Object.keys(gameCart)[i]);
    };
    for (let i = 0; i < Object.keys(comboCart).length; i++) {
        comboOrder = comboOrder.concat(", ", Object.keys(comboCart)[i]);
    };
    for (let i = 0; i < Object.keys(optCart).length; i++) {
        controllerOrder = controllerOrder.concat(", ", Object.keys(optCart)[i]);
    };
    console.log(gameOrder, consoleOrder, comboOrder, controllerOrder);
    const { slug } = router.query;
    useEffect(() => {
      if(Object.keys(product).length + Object.keys(gameCart).length + Object.keys(comboCart).length + Object.keys(optCart).length === 0){
        router.push('/');
      }
    }, [product, gameCart, optCart, comboCart]);
    
    const applyPromo= () =>{
        if(code.toLowerCase()==='welcome6969'){
            settotal(-500);
            setyes("flex");
            setno("none");
        }
        else{
            setno("block");
            setyes("none");
            settotal(0);
        }
    }
    return (
        <div>
            <Navbar product={product} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart} clearProduct={clearProduct} subTotal={subTotal} gameCart={gameCart} gameTotal={gameTotal} comboCart={comboCart} comboTotal={comboTotal} optCart={optCart} optTotal={optTotal} addGameCartToCart={addGameCartToCart} removeGameCartFromCart={removeGameCartFromCart} clearGameCart={clearGameCart} addOptCartToCart={addOptCartToCart} removeOptCartFromCart={removeOptCartFromCart} clearOptCart={clearOptCart} addComboCartToCart={addComboCartToCart} removeComboCartFromCart={removeComboCartFromCart} clearComboCart={clearComboCart} KYC={'KYC'} About={'About'} Contact={'Contact'} Login={'Login'} Signup={'Signup'} />
            <div className={styles.checkout_container}>
                <div className={styles.topic}>
                    <h1>Review your order</h1>
                    <hr />
                    <span>
                        By placing your order, you agree to craving for gaming&apos;s <Link href="/Tnc">terms &#38; conditions.</Link>
                    </span>
                </div>
                <div className={styles.order_address}>
                    <div className={styles.address}>
                        <div className={styles.left}>
                            <h2>Shipping Address</h2>
                            <span>{details.data.attributes.house_no}, </span>
                            <span>{details.data.attributes.area_street}, </span>
                            <span>{details.data.attributes.city}, </span>
                            <span>{details.data.attributes.state}</span>
                            {details.data.attributes.landmark != null && <p>Landmark: {details.data.attributes.landmark}</p>}
                            <p style={{marginTop: "1rem"}}>Name: {details.data.attributes.user.data.attributes.username}</p>
                            <p style={{marginTop: "1rem"}}>Phone: {details.data.attributes.phone}</p>
                        </div>
                        <div className={styles.mid}>
                            <h2>Payment Method</h2>
                            <div className={styles.checkout_caution}>
                                <InfoOutlinedIcon style={{ color: "var(--red)", marginRight: "0.5rem" }} />
                                <p>Currently only pay on delivery is available</p>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <h2>Gift cards, Voucher &#38; Promotional codes</h2>
                            <div className={styles.checkout_caution}>
                                <InfoOutlinedIcon style={{ color: "var(--red)", marginRight: "0.5rem" }} />
                                <p>Use code <strong>Welcome6969</strong> to get flat ₹500 off on games</p>
                            </div>
                            <div style={{marginTop: "2rem"}}>
                            <p style={{color:"var(--red)", display: `${no}`}}>This code isn&apos;t available right now</p>
                            <p style={{color:"green", display: `${yes}`}}>Promo code applied ✅</p>
                            <input name='promo' id='promo' placeholder='Enter Code' value={code} onChange={(e)=>{setcode(e.target.value)}}/>
                            <button onClick={()=>applyPromo()}>Apply</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.order}>
                        <Link href = "/success">
                        <button>Place Order</button></Link>
                        <div className={styles.summary}>
                            <h3 style={{marginTop: "1rem"}}>Summary</h3>
                            <div className={styles.summary_items}>
                                <span>Items:</span>
                                <span>₹{subTotal+gameTotal+comboTotal+optTotal}</span>
                            </div>
                            <div className={styles.summary_items}>
                                <span>Delivery:</span>
                                <span>₹{delivery}</span>
                            </div>
                            <div className={styles.summary_items} style={{display: `${yes}`}}>
                                <span>Promo code:</span>
                                <span>₹{total}</span>
                            </div>
                            <div className={styles.summary_items} style={{color: "var(--red)"}}>
                                <h3>Order total:</h3>
                                <h3>₹{delivery+subTotal+gameTotal+comboTotal+optTotal+total}</h3>
                            </div>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className={styles.your_cart}>
                    <h2>Your Cart</h2>
                    {Object.keys(product).map((k) => {
                            return <div key={k} style={{ display: "flex", margin: "1rem 2rem" }}>
                                <img src={product[k].img} width={100} height={100}></img>
                                <div style={{ marginLeft: "1rem" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", width: "10rem"}}>
                                <Link href={`/consoles/${k}`} ><h3>{product[k].name}</h3></Link>
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
                                <Link href={`/games/${key}`} ><h3 style={{ display: "flex", justifyContent: "space-between", width: "10rem" }}>{gameCart[key].name}</h3></Link><DeleteForeverIcon style={{ color: 'var(--red)' }} onClick={() => clearGameCart()} /></div>
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
                                <Link href={`/combos/${key}`} ><h3 style={{ display: "flex", justifyContent: "space-between", width: "10rem" }}>{comboCart[key].name}</h3></Link><DeleteForeverIcon style={{ color: 'var(--red)' }} onClick={() => clearComboCart()} /></div>
                                    <p className={styles.cartQtyAmt}>Quantity: <span className={styles.qtyBtn} onClick={()=>{removeComboCartFromCart(key,1)}}>-</span>{comboCart[key].qty}<span className={styles.qtyBtn} onClick={()=>{addComboCartToCart(key,1,comboCart[key].price,comboCart[key].name,comboCart[key].img)}}>+</span></p>
                                    <span style={{ color: "var(--red)" }}>₹{`${comboCart[key].price * comboCart[key].qty}`}</span>
                                </div>
                            </div>
                        })}
                        {Object.keys(optCart).map((key) => {
                            return <div key={key} style={{ display: "flex", margin: "1rem 2rem" }}>
                                <img src={optCart[key].img} width={100} height={100}></img>
                                <div style={{ marginLeft: "1rem" }}>
                                    <h3 style={{ display: "flex", justifyContent: "space-between", width: "10rem" }}>{optCart[key].name}<DeleteForeverIcon style={{ color: 'var(--red)' }} onClick={() => clearOptCart()} /></h3>
                                    <p className={styles.cartQtyAmt}>Quantity: <span className={styles.qtyBtn} onClick={()=>{removeOptCartFromCart(key,1)}}>-</span>{optCart[key].qty}<span className={styles.qtyBtn} onClick={()=>{addOptCartToCart(key,1,optCart[key].price,optCart[key].name,optCart[key].img)}}>+</span></p>
                                    <span style={{ color: "var(--red)" }}>₹{`${optCart[key].price * optCart[key].qty}`}</span>
                                </div>
                            </div>
                        })}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export async function getServerSideProps(context) {
    let headers = {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_READ}`,
    };
    let url =
        process.env.NEXT_PUBLIC_STRAPI_HOST + "/api/kycs/" + context.query.slug + "?populate=*";
    let data = await fetch(url, { headers: headers });
    let details = await data.json();

    return {
        props: { details } // will be passed to the page component as props
    };
}

export default Checkout;