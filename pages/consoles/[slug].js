import React, { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../../styles/Console.module.css";
import SanitizerIcon from '@mui/icons-material/Sanitizer';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import Link from "next/link";

const Console = ({ console, addProductToCart, product, subTotal }) => {
    const router = useRouter();
    const { slug } = router.query;
    const [count, setcount] = useState(0);
    return (
        <div>
            <Navbar
                product={product}
                KYC={"KYC"}
                About={"About"}
                Contact={"Contact"}
                Login={"Login"}
                Signup={"Signup"}
                key={product}
                subTotal={subTotal}
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
