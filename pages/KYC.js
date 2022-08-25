import React, { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Webcam from "react-webcam";
import Image from "next/image";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Link from "next/link";
import SendIcon from '@mui/icons-material/Send';
import styles from '../styles/KYC.module.css';
import Script from "next/script";
import Router, { useRouter } from "next/router";
import Footer from "../components/Footer";
// import { FormData } from 'formdata-node';
// import fetch, { blobFrom } from 'node-fetch';



const KYC = ({ product, subTotal, kycData, addProductToCart, removeProductFromCart, clearProduct, gameCart, gameTotal, comboCart, comboTotal, optCart, optTotal, addGameCartToCart, removeGameCartFromCart, clearGameCart, addOptCartToCart, removeOptCartFromCart, clearOptCart, addComboCartToCart, removeComboCartFromCart, clearComboCart }) => {
    const [bill, setbill] = useState(null);
    const router = useRouter();
    const webRef = useRef(null);
    const [selfie, setselfie] = useState("");
    const [camera, setcamera] = useState(false);

    const startCamera = () => {
        setcamera(true);
    }
    const capture = () => {
        setselfie(webRef.current.getScreenshot());
    }
    const [houseno, sethouseno] = useState("");
    const [area, setarea] = useState("");
    const [landmark, setlandmark] = useState("");
    const [city, setcity] = useState("");
    const [state, setstate] = useState("");
    const [pincode, setpincode] = useState("");
    const [phone, setphone] = useState();
    const [userid, setuserid] = useState();
    const [kycid, setkycid] = useState(0);

    const handleChange = (e) => {
        if (e.target.name === "houseno") {
            sethouseno(e.target.value);
        }
        else if (e.target.name === "landmark") {
            setlandmark(e.target.value);
        }
        else if (e.target.name === "area") {
            setarea(e.target.value);
        }
        else if (e.target.name === "city") {
            setcity(e.target.value);
        }
        else if (e.target.name === "state") {
            setstate(e.target.value);
        }
        else if (e.target.name === "pincode") {
            setpincode(e.target.value);
        }
        else if (e.target.name === "phone") {
            setphone(e.target.value);
        }
        else if (e.target.name === "bill") {
            console.log(e.target.files[0].name);
            setbill(e.target.files[0].name);
        }
    };
    const saveuserid = (items) => {
        localStorage.setItem("userid", JSON.stringify(items));
    };
    const savekycid = (items) => {
        localStorage.setItem("kycid", JSON.stringify(items));
    };

    useEffect(() => {
        try {
            if (localStorage.getItem("userid")) {
                setuserid(JSON.parse(localStorage.getItem("userid")));
                saveuserid(JSON.parse(localStorage.getItem("userid")));
                if (userid == 0) {
                    router.push('/Login');
                }
                var checkKyc = kycData.data.filter((item) => {
                    return item.attributes.user.data.id === userid;
                });
                if (checkKyc.length != 0) {
                    router.push(`/kyc/${checkKyc[0].id}`);
                    localStorage.setItem("kycid", JSON.stringify(checkKyc[0].id));
                }
            }
            if (localStorage.getItem("kycid")) {
                setkycid(JSON.parse(localStorage.getItem("kycid")));
                savekycid(JSON.parse(localStorage.getItem("kycid")));
            }
            else {
                localStorage.setItem("kycid", JSON.stringify(kycid));
            }
        } catch (error) {
            console.log(error);
        }
    }, [userid, kycid])


    const handleSubmit = async (e) => {
        e.preventDefault();
        // const file = await blobFrom(bill, 'image/png');
        // const form = new FormData();
        // form.append('proof', file, bill);
        const sentdata = { data: { house_no: houseno, area_street: area, city: city, state: state, pincode: pincode, landmark: landmark, phone: phone, user: userid, proof: bill} };
        let res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_HOST}/api/kycs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_READ}`
            },
            body: JSON.stringify(sentdata),
        });
        // const res2 = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_HOST}/api/kycs`, {
        //     method: 'post',
        //     body: form,
        // });

        let response = await res.json();
        console.log(response);
        console.log(res2);
        // console.log(bill);
        setkycid(response.data.id);
        savekycid(response.data.id);
    }
    return (
        <>
            <Script src="/script.js"></Script>
            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
                crossOrigin="anonymous"
            ></Script>
            <Head>

            </Head>
            <Navbar
                KYC={null}
                About={"About"}
                Contact={"Contact"}
                Login={"Login"}
                Signup={"Signup"}
                product={product} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart} clearProduct={clearProduct} subTotal={subTotal} gameCart={gameCart} gameTotal={gameTotal} comboCart={comboCart} comboTotal={comboTotal} optCart={optCart} optTotal={optTotal} addGameCartToCart={addGameCartToCart} removeGameCartFromCart={removeGameCartFromCart} clearGameCart={clearGameCart} addOptCartToCart={addOptCartToCart} removeOptCartFromCart={removeOptCartFromCart} clearOptCart={clearOptCart} addComboCartToCart={addComboCartToCart} removeComboCartFromCart={removeComboCartFromCart} clearComboCart={clearComboCart}
                key={kycid}
            />
            <div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "3rem 0" }}>
                    <h3 style={{ color: "var(--red)", margin: "1.5rem 0" }}>KYC</h3>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <hr style={{ borderTop: "4px solid var(--red)", width: "20vw", opacity: "100%", borderRadius: "99px" }} />
                        <SportsEsportsIcon style={{ color: "var(--red)", transform: "rotateZ(-45deg)", margin: "0rem 2rem", fontSize: "2.5rem" }} className={styles.consoleIcon} />
                        <hr style={{ borderTop: "4px solid var(--red)", width: "20vw", opacity: "100%", borderRadius: "99px" }} />
                    </div>
                    <p style={{ margin: "1.5rem 0" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan mauris lacinia erat eleifend fermentum. Morbi a convallis dui.</p>
                </div>
                <form onSubmit={handleSubmit} method="POST">
                    <div className={styles.phone_input}>
                        <label htmlFor="phone">Phone Number: <strong style={{ color: "var(--red)" }}>*</strong></label>
                        <input value={phone}
                            onChange={handleChange}
                            placeholder="Enter Phone Number"
                            type="number"
                            id="phone"
                            name="phone"
                            autoComplete="phone"
                            required
                            style={{ padding: "0 0.5rem" }} />
                    </div>
                    <div style={{ border: "0.5px solid var(--gray)", margin: "0 6rem", padding: "4rem", borderRadius: "20px" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem" }}>
                            <h2 style={{ fontSize: "1.65rem" }}>Address</h2>
                            <span style={{ color: "var(--red)" }}>* Required field</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", flexDirection: "column", width: "40%" }}>
                                <label htmlFor="houseno">Flat, House no., Building, Company, Apartment: <strong style={{ color: "var(--red)" }}>*</strong></label>
                                <input
                                    value={houseno}
                                    onChange={handleChange}
                                    placeholder="Enter Flat, House no., Building, Company, Apartment"
                                    type="text"
                                    id="houseno"
                                    name="houseno"
                                    autoComplete="houseno"
                                    required
                                    style={{ padding: "0 0.5rem" }}
                                />
                                <label htmlFor="landmark" style={{ marginTop: "1.5rem" }}>Landmark:</label>
                                <input
                                    value={landmark}
                                    onChange={handleChange}
                                    placeholder="Enter Landmark"
                                    type="text"
                                    id="landmark"
                                    name="landmark"
                                    autoComplete="landmark"
                                    style={{ padding: "0 0.5rem" }}
                                />
                                <label htmlFor="state" style={{ marginTop: "1.5rem" }}>State: <strong style={{ color: "var(--red)" }}>*</strong></label>
                                <input
                                    value={state}
                                    onChange={handleChange}
                                    placeholder="Enter State"
                                    type="text"
                                    id="state"
                                    name="state"
                                    autoComplete="state"
                                    required
                                    style={{ marginBottom: "1.5rem", padding: "0 0.5rem" }}
                                />
                                <label htmlFor="bill"><p style={{ margin: "0" }}>Address Proof: <strong style={{ color: "var(--red)" }}>*</strong></p><p>(Electricity Bill/ Water Bill/ Gas Bill)</p></label>
                                <input type="file" id="bill" name="bill" accept="image/*" onChange={handleChange}></input>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", width: "40%" }} className={styles.inputs}>
                                <label htmlFor="area">Area, Street, Sector, Village: <strong style={{ color: "var(--red)" }}>*</strong></label>
                                <input
                                    value={area}
                                    onChange={handleChange}
                                    placeholder="Enter Area, Street, Sector, Village"
                                    type="text"
                                    id="area"
                                    name="area"
                                    autoComplete="area"
                                    required
                                    style={{ padding: "0 0.5rem" }}
                                />
                                <label htmlFor="city" style={{ marginTop: "1.5rem" }}>Town/City: <strong style={{ color: "var(--red)" }}>*</strong></label>
                                <input
                                    value={city}
                                    onChange={handleChange}
                                    placeholder="Enter Town/City"
                                    type="text"
                                    id="city"
                                    name="city"
                                    autoComplete="city"
                                    required
                                    style={{ padding: "0 0.5rem" }}
                                />
                                <label htmlFor="pincode" style={{ marginTop: "1.5rem" }}>Pincode: <strong style={{ color: "var(--red)" }}>*</strong></label>
                                <input
                                    value={pincode}
                                    onChange={handleChange}
                                    placeholder="Enter Pincode"
                                    type="number"
                                    id="pincode"
                                    name="pincode"
                                    autoComplete="pincode"
                                    required
                                    style={{ padding: "0 0.5rem" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{ border: "0.5px solid var(--gray)", margin: "3rem 6rem", padding: "4rem", borderRadius: "20px" }}>
                        <p><span style={{ fontSize: "1.65rem" }}>Selfie</span><strong style={{ color: "var(--red)" }}> *</strong></p>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div>
                                {!camera && <div></div>}
                                {camera && <Webcam ref={webRef} width={400} height={400} />}
                            </div>
                            <div style={{ marginLeft: "2rem" }}>
                                {!camera && <p onClick={() => startCamera()} style={{ background: "var(--red)", padding: "0.5rem 1.5rem", color: "var(--white)", borderRadius: "10px", margin: "0" }} className={styles.captureBtn}>Start Capturing</p>}
                                {camera && <span onClick={() => capture()} style={{ background: "var(--red)", borderRadius: "999px", padding: "0.75rem" }}><CameraAltIcon style={{ color: "var(--white)" }} /></span>}
                                {/* <Image src={selfie} height={100} width={100} /> */}
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", marginTop: "3rem" }}>

                            <label htmlFor="sign">Signature: <strong style={{ color: "var(--red)" }}>*</strong></label>
                            <input type="file" id="sign" name="sign" accept="image/*" onChange={handleChange}></input>
                        </div>
                    </div>
                    <p style={{ margin: "0 6rem" }}>
                        <input type="checkbox" required />
                        I have read the <Link href="/Tnc">Terms & Conditions</Link> of Craving for Gaming
                    </p>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button type="submit" style={{ padding: "0.5rem 20rem", background: "var(--red)", border: "none", color: "white", borderRadius: "10px", margin: "3rem 0" }} className={styles.captureBtn}>Submit <SendIcon style={{ marginLeft: "1rem" }} /></button>
                    </div>
                </form>
                <Footer />
            </div>


        </>
    );
};

export async function getServerSideProps(context) {
    let headers = {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_READ}`
    };
    // console.log(process.env.NEXT_PUBLIC_STRAPI_URL);
    // let url =process.env.NEXT_PUBLIC_STRAPI_URL+"/api/products?populate=*";
    let data = await fetch(
        process.env.NEXT_PUBLIC_STRAPI_HOST + `/api/kycs?populate=*`,
        {
            headers: headers,
        }
    );
    let kycData = await data.json();
    return {
        props: { kycData }, // will be passed to the page component as props
    };
}

export default KYC;
