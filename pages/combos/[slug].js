import React, {useState} from 'react';
import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import styles from "../../styles/Console.module.css";
import SanitizerIcon from '@mui/icons-material/Sanitizer';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import Navbar from "../../components/Navbar";
import Carousel from 'react-elastic-carousel';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import controller from '../../public/controller.png';
import Image from "next/image";
import Accordion from "../../components/Accordion";

const Combo = ({combo,product, subTotal, addProductToCart, removeProductFromCart, clearProduct, gameCart, gameTotal, comboCart, comboTotal, optCart, optTotal, addGameCartToCart, removeGameCartFromCart, clearGameCart, addOptCartToCart, removeOptCartFromCart, clearOptCart, addComboCartToCart, removeComboCartFromCart, clearComboCart}) => {
    let router = useRouter();
    const {slug} = router.query;
    // combo.log(combo);
    const [count, setcount] = useState(0);
    const breakPoint = [
        { width: 1, itemsToShow: 1 },
        { width: 800, itemsToShow: 2 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 4 }
      ];
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
                Buy={'Buy'} Sell={'Sell'}
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
                            <h3>₹{combo.attributes.consolePrice1} + {combo.attributes.gamesPrice1}</h3>
                        </div>
                        <hr />
                        <div className={styles.plan_item}>
                            <input type="radio" name="plan" id="plan" onClick={() => { setcount(2) }} />
                            <h3>₹{combo.attributes.consolePrice2} + {combo.attributes.gamePrice2}</h3>
                        </div>
                        <hr />
                        <div className={styles.plan_item}>
                            <input type="radio" name="plan" id="plan" onClick={() => { setcount(3) }} />
                            <h3>₹{combo.attributes.consolePrice3} + {combo.attributes.gamePrice3}</h3>
                        </div>
                        <hr />
                        <div className={styles.plan_item}>
                            <input type="radio" name="plan" id="plan" onClick={() => { setcount(4) }} />
                            <h3>₹{combo.attributes.consolePrice4} + {combo.attributes.gamePrice4}</h3>
                        </div>
                        <hr />
                        {count != 0 &&<div className={styles.gamesBtn}>
                             <p onClick={() => { addComboCartToCart(slug, 1,(eval(`combo.attributes.consolePrice${count}`)+eval(`combo.attributes.gamePrice${count}`)) , combo.attributes.title, combo.attributes.mainImage.data.attributes.url) }}>Proceed to Games</p>
                        </div>}
                    </form>
                </div>
            </div>
        </div>
        <div className={styles.margining}>
            <div className={styles.topic}>
                    <h1>What&apos;s in the Box?</h1>
                    <hr />
                </div>
            <Carousel breakPoints={breakPoint}>
                <div className={styles.what}>
                    <img src={combo.attributes.whatsInTheBoxImage1.data.attributes.url}/>
                    <spn>{combo.attributes.whatsInTheBoxText1}</spn>
                </div>
                <div className={styles.what}>
                    <img src={combo.attributes.whatsInTheBoxImage2.data.attributes.url}/>
                    <spn>{combo.attributes.whatsInTheBoxText2}</spn>
                </div>
                <div className={styles.what}>
                    <img src={combo.attributes.whatsInTheBoxImage3.data.attributes.url}/>
                    <spn>{combo.attributes.whatsInTheBoxText3}</spn>
                </div>
                <div className={styles.what}>
                    <img src={combo.attributes.whatsInTheBoxImage4.data.attributes.url}/>
                    <spn>{combo.attributes.whatsInTheBoxText4}</spn>
                </div>
                <div className={styles.what}>
                    <img src={combo.attributes.whatsInTheBoxImage5.data.attributes.url}/>
                    <spn>{combo.attributes.whatsInTheBoxText5}</spn>
                </div>
                <div className={styles.what}>
                    <img src={combo.attributes.whatsInTheBoxImage6.data.attributes.url}/>
                    <spn>{combo.attributes.whatsInTheBoxText6}</spn>
                </div>
                <div className={styles.what}>
                    <img src={combo.attributes.whatsInTheBoxImage7.data.attributes.url}/>
                    <spn>{combo.attributes.whatsInTheBoxText7}</spn>
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
                        {(optCart.controller!= undefined || optCart.controller!=null) && <button style={{color: "var(--red)"}}><RemoveIcon onClick={()=>{
                            removeOptCartFromCart("controller",1,100,"PS4 controller", "https://mutterfly.imgix.net/flamingo/addons/Extra%20PS4%20Controller.jpg?w=338.8235294117647&auto=format,compress&q=60")
                        }}/></button>}
                        {(optCart.controller=== undefined || optCart.controller===null) && <button style={{color: "var(--red)"}}><RemoveIcon/></button>}
                        {(optCart.controller!= undefined || optCart.controller!=null) && <span>{`${optCart.controller.qty}`}</span>}
                        {(optCart.controller=== undefined || optCart.controller===null) && <span>0</span>}
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

