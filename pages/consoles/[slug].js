import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Console.module.css";
import SanitizerIcon from '@mui/icons-material/Sanitizer';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

const Console = ({ console, addProductToCart, product }) => {
    const router = useRouter();
    const { slug } = router.query;
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
            />
            <div className={styles.landing}>
                <div className={styles.left}>
                    <img src={process.env.NEXT_PUBLIC_STRAPI_HOST + console.attributes.mainImage.data.attributes.url} alt="" />
                    <div className={styles.extraImage}>
                    <img src={process.env.NEXT_PUBLIC_STRAPI_HOST + console.attributes.extraImage1.data.attributes.url} alt="" />
                    <img src={process.env.NEXT_PUBLIC_STRAPI_HOST + console.attributes.extraImage2.data.attributes.url} alt="" />
                    <img src={process.env.NEXT_PUBLIC_STRAPI_HOST + console.attributes.extraImage3.data.attributes.url} alt="" />
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
                            <input type="radio" name="plan" id="plan" onClick={()=> {addProductToCart(slug,1,console.attributes.plan1,console.attributes.title)}}/>
                            <h3>{console.attributes.plan1}</h3>
                        </div>
                            <hr />
                        <div className={styles.plan_item}>
                            <input type="radio" name="plan" id="plan" />
                            <h3>{console.attributes.plan1}</h3>
                        </div>
                            <hr />
                        <div className={styles.plan_item}>
                            <input type="radio" name="plan" id="plan" />
                            <h3>{console.attributes.plan1}</h3>
                        </div>
                            <hr />
                        <div className={styles.plan_item}>
                            <input type="radio" name="plan" id="plan" />
                            <h3>{console.attributes.plan1}</h3>
                        </div>
                            <hr />
                            <button>Proceed to buy games</button>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export async function getServerSideProps(context) {
    let headers = {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_READ}`,
    };
    let url =
        process.env.NEXT_PUBLIC_STRAPI_HOST+"/api/consoles?filters[slug]=" +
        context.query.slug +
        "&populate=*";
    let data = await fetch(url, { headers: headers });
    let console = await data.json();
    return {
        props: { console: console.data[0] }, // will be passed to the page component as props
    };
}

export default Console;
