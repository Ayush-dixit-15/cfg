import React, { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../../styles/Console.module.css";
import SanitizerIcon from '@mui/icons-material/Sanitizer';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import Link from "next/link";
import Footer from '../../components/Footer';
import Carousel from 'react-elastic-carousel';
import { CommentBankOutlined } from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import controller from '../../public/controller.png';
import Image from "next/image";
import Accordion from "../../components/Accordion";

const Console = ({ console, product, subTotal, addProductToCart, removeProductFromCart, clearProduct, gameCart, gameTotal, comboCart, comboTotal, optCart, optTotal, addGameCartToCart, removeGameCartFromCart, clearGameCart, addOptCartToCart, removeOptCartFromCart, clearOptCart, addComboCartToCart, removeComboCartFromCart, clearComboCart }) => {
    const breakPoint = [
        { width: 1, itemsToShow: 1 },
        { width: 800, itemsToShow: 2 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 4 }
      ];
    const router = useRouter();
    const { slug } = router.query;
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
                    <img src={console.attributes.mainImage.data.attributes.url} alt="" />
                    <div className={styles.extraImage}>
                        <img src={console.attributes.extraImage1.data.attributes.url} alt="" />
                        <img src={console.attributes.extraImage2.data.attributes.url} alt="" />
                        <img src={console.attributes.extraImage3.data.attributes.url} alt="" />
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
                    <h2>{console.attributes.title}</h2>
                    <h4>Details</h4>
                    <p>{console.attributes.description}</p>
                    <div className={styles.plan}>
                        <h2>Choose your plan</h2>
                        <form action="">
                            <div className={styles.plan_item}>
                                <input type="radio" name="plan" id="plan" onClick={() => { setcount(1) }} />
                                <h3>₹{console.attributes.plan1}</h3>
                            </div>
                            <hr />
                            <div className={styles.plan_item}>
                                <input type="radio" name="plan" id="plan" onClick={() => { setcount(2) }} />
                                <h3>₹{console.attributes.plan2}</h3>
                            </div>
                            <hr />
                            <div className={styles.plan_item}>
                                <input type="radio" name="plan" id="plan" onClick={() => { setcount(3) }} />
                                <h3>₹{console.attributes.plan3}</h3>
                            </div>
                            <hr />
                            <div className={styles.plan_item}>
                                <input type="radio" name="plan" id="plan" onClick={() => { setcount(4) }} />
                                <h3>₹{console.attributes.plan4}</h3>
                            </div>
                            <hr />
                            {count != 0 &&<div className={styles.gamesBtn}>
                                 <p onClick={() => { addProductToCart(slug, 1, eval(`console.attributes.plan${count}`), console.attributes.title, console.attributes.mainImage.data.attributes.url) }}>Proceed to buy games</p>
                            </div>}
                        </form>
                    </div>
                </div>
            </div>
            <div className={styles.margining}>
            <div className={styles.topic}>
                    <h1>What's in the Box?</h1>
                    <hr />
                </div>
            <Carousel breakPoints={breakPoint}>
                <div className={styles.what}>
                    <img src={console.attributes.whatsInTheBoxImage1.data.attributes.url}/>
                    <spn>{console.attributes.whatsInTheBoxText1}</spn>
                </div>
                <div className={styles.what}>
                    <img src={console.attributes.whatsInTheBoxImage2.data.attributes.url}/>
                    <spn>{console.attributes.whatsInTheBoxText2}</spn>
                </div>
                <div className={styles.what}>
                    <img src={console.attributes.whatsInTheBoxImage3.data.attributes.url}/>
                    <spn>{console.attributes.whatsInTheBoxText3}</spn>
                </div>
                <div className={styles.what}>
                    <img src={console.attributes.whatsInTheBoxImage4.data.attributes.url}/>
                    <spn>{console.attributes.whatsInTheBoxText4}</spn>
                </div>
                <div className={styles.what}>
                    <img src={console.attributes.whatsInTheBoxImage5.data.attributes.url}/>
                    <spn>{console.attributes.whatsInTheBoxText5}</spn>
                </div>
            </Carousel>
            <div className={styles.topic}>
                    <h1>Add these: (Optional)</h1>
                    <hr />
                </div>
            <div className={styles.optional}>
                <div className={styles.left}>
                    <Image src={controller}></Image>
                </div>
                <div className={styles.right}>
                    <h2>Extra PS4 Controller</h2>
                    <p style={{color: "var(--red)"}}>₹ 100</p>
                    <div className={styles.add_sub}>
                        <button style={{color: "var(--red)"}}><RemoveIcon onClick={()=>{
                            removeOptCartFromCart("controller",1,100,"PS4 controller", "https://mutterfly.imgix.net/flamingo/addons/Extra%20PS4%20Controller.jpg?w=338.8235294117647&auto=format,compress&q=60")
                        }}/></button>
                        <span>0</span>
                        <button style={{color: "var(--red)"}} onClick={()=>{
                            addOptCartToCart("controller",1,100,"PS4 controller", "https://mutterfly.imgix.net/flamingo/addons/Extra%20PS4%20Controller.jpg?w=338.8235294117647&auto=format,compress&q=60")
                        }}><AddIcon/></button>
                    </div>
                </div>
            </div>
            <div className={styles.topic}>
                    <h1>Frequently Asked Questions</h1>
                    <hr />
                </div>
            <Accordion/>
            </div>
            <Footer/>
        </div>
    );
};

export async function getServerSideProps(context) {
    let headers = {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_READ}`,
    };
    let url =
        process.env.NEXT_PUBLIC_STRAPI_HOST + "/api/consoles?filters[slug]=" +
        context.query.slug +
        "&populate=*";
    let data = await fetch(url, { headers: headers });
    let console = await data.json();
    return {
        props: { console: console.data[0] }, // will be passed to the page component as props
    };
}

export default Console;
