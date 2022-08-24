import React, {useState} from 'react';
import { useRouter } from 'next/router';
import Navbar from "../../components/Navbar";
import styles from '../../styles/Checkout.module.css';
import Link from 'next/link';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Footer from '../../components/Footer';

const Checkout = ({ product, subTotal, details }) => {
    const [code,setcode] = useState();
    const [total, settotal] = useState(0);
    const [delivery, setdelivery] = useState(0);
    const [yes, setyes] = useState("none");
    const [no, setno] = useState("none");
    const router = useRouter();
    const { slug } = router.query;
    const applyPromo= () =>{
        if(code.toLowerCase()==='welcome6969'){
            settotal(-500);
            setyes("flex");
            setno("none");
        }
        else{
            setno("block");
            setyes("none");
        }
    }
    return (
        <div>
            <Navbar product={product} KYC={'KYC'} About={'About'} Contact={'Contact'} Login={'Login'} Signup={'Signup'} subTotal={subTotal} />
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
                            <p style={{color:"var(--red)", display: `${no}`}}>This code isn't available right now</p>
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
                                <span>₹{subTotal}</span>
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
                                <h3>₹{delivery+subTotal+total}</h3>
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
                                    <h3>{product[k].name}</h3>
                                    <p>Quantity: {product[k].qty}</p>
                                    <span style={{ color: "var(--red)" }}>₹{`${product[k].price * product[k].qty}`}</span>
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