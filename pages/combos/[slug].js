import React, {useState} from 'react';
import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import styles from "../../styles/Console.module.css";
import SanitizerIcon from '@mui/icons-material/Sanitizer';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import Navbar from "../../components/Navbar";

const Combo = ({combo,product, subTotal, addProductToCart, removeProductFromCart, clearProduct, gameCart, gameTotal, comboCart, comboTotal, optCart, optTotal, addGameCartToCart, removeGameCartFromCart, clearGameCart, addOptCartToCart, removeOptCartFromCart, clearOptCart, addComboCartToCart, removeComboCartFromCart, clearComboCart}) => {
    let router = useRouter();
    const {slug} = router.query;
    // console.log(combo);
    const [count, setcount] = useState(0);
  return (
    
    <div>
        <Navbar
                product={product} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart} clearProduct={clearProduct} subTotal={subTotal} gameCart={gameCart} gameTotal={gameTotal} comboCart={comboCart} comboTotal={comboTotal} optCart={optCart} optTotal={optTotal} addGameCartToCart={addGameCartToCart} removeGameCartFromCart={removeGameCartFromCart} clearGameCart={clearGameCart} addOptCartToCart={addOptCartToCart} removeOptCartFromCart={removeOptCartFromCart} clearOptCart={clearOptCart} addComboCartToCart={addComboCartToCart} removeComboCartFromCart={removeComboCartFromCart} clearComboCart={clearComboCart}
                KYC={"KYC"}
                About={"About"}
                Contact={"Contact"}
                Login={"Login"}
                Signup={"Signup"}
                key={product}
            />
            <div className={styles.landing}>
            <div className={styles.left}>
                <img src={combo.attributes.mainImage.data.attributes.url} alt="" />
                <div className={styles.extraImage}>
                    <img src={combo.attributes.extraImage1.data.attributes.url} alt="" />
                    <img src={combo.attributes.extraImage2.data.attributes.url} alt="" />
                    <img src={combo.attributes.extraImage3.data.attributes.url} alt="" />
                </div>
                <div className={styles.qualities}>
                    <div className={styles.quality}>
                        <SanitizerIcon />
                        <span>Well Sanitized</span>
                    </div>
                    <div className={styles.quality}>
                        <VerifiedOutlinedIcon />
                        <span>Quality Assured</span>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <h2>{combo.attributes.title}</h2>
                <h4>Details</h4>
                <p>{combo.attributes.details}</p>
                <div className={styles.plan}>
                    <h2>Choose your plan</h2>
                    <form action="">
                        <div className={styles.plan_item}>
                            <input type="radio" name="plan" id="plan" onClick={() => { setcount(1) }} />
                            <h3>₹{combo.attributes.consolePrice}</h3>
                        </div>
                        <hr />
                        <div className={styles.plan_item}>
                            <input type="radio" name="plan" id="plan" onClick={() => { setcount(2) }} />
                            <h3>₹{combo.attributes.consolePrice}</h3>
                        </div>
                        <hr />
                        <div className={styles.plan_item}>
                            <input type="radio" name="plan" id="plan" onClick={() => { setcount(3) }} />
                            <h3>₹{combo.attributes.consolePrice}</h3>
                        </div>
                        <hr />
                        <div className={styles.plan_item}>
                            <input type="radio" name="plan" id="plan" onClick={() => { setcount(4) }} />
                            <h3>₹{combo.attributes.consolePrice}</h3>
                        </div>
                        <hr />
                        {count != 0 &&<div className={styles.gamesBtn}>
                             <p onClick={() => { addComboCartToCart(slug, 1,combo.attributes.consolePrice+combo.attributes.gamesPrice , combo.attributes.title, combo.attributes.mainImage.data.attributes.url) }}>Proceed to buy games</p>
                        </div>}
                    </form>
                </div>
            </div>
        </div>
        <Footer/></div>
  )
}

export async function getServerSideProps(context) {
    let headers = {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_READ}`,
    };
    let url =
        process.env.NEXT_PUBLIC_STRAPI_HOST + "/api/combos?filters[slug]=" +context.query.slug +"&populate=*";
    let data = await fetch(url, { headers: headers });
    let combo = await data.json();
    return {
        props: { combo: combo.data[0] }, // will be passed to the page component as props
    };
}

export default Combo;

