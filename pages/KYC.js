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
    const router = useRouter();
    const webRef = useRef(null);
    const [selfie, setselfie] = useState("");
    const [camera, setcamera] = useState(false);
    const [prob, setprob] = useState("");
    // console.log(kycData);
    const startCamera = () => {
        setcamera(true);
    }
    const capture = () => {
        setselfie(webRef.current.getScreenshot());
        setcamera(false);
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
    const [proof, setproof] = useState(null);
    const [front, setfront] = useState(null);
    const [back, setback] = useState(null);
    const [sign, setsign] = useState(null);

    const saveuserid = (items) => {
        localStorage.setItem("userid", JSON.stringify(items));
    };
    const savekycid = (items) => {
        localStorage.setItem("kycid", JSON.stringify(items));
    };
    const savehouseno = (items) => {
        sessionStorage.setItem("houseno", JSON.stringify(items));
    };
    const savearea = (items) => {
        sessionStorage.setItem("area", JSON.stringify(items));
    };
    const savelandmark = (items) => {
        sessionStorage.setItem("landmark", JSON.stringify(items));
    };
    const savecity = (items) => {
        sessionStorage.setItem("city", JSON.stringify(items));
    };
    const savestate = (items) => {
        sessionStorage.setItem("state", JSON.stringify(items));
    };
    const savepincode = (items) => {
        sessionStorage.setItem("pincode", JSON.stringify(items));
    };
    const savephone = (items) => {
        sessionStorage.setItem("phone", JSON.stringify(items));
    };
    const saveselfie = (items) => {
        sessionStorage.setItem("selfie", JSON.stringify(items));
    };

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

    useEffect(() => {
        try {
            if (localStorage.getItem("userid")) {
                setuserid(JSON.parse(localStorage.getItem("userid")));
                saveuserid(JSON.parse(localStorage.getItem("userid")));
                if (userid == 0) {
                    router.push('/Signup');
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
            if (sessionStorage.getItem("houseno")) {
                sethouseno(JSON.parse(sessionStorage.getItem("houseno")));
                savehouseno(JSON.parse(sessionStorage.getItem("houseno")));
                console.log(JSON.parse(sessionStorage.getItem("houseno")));
                console.log("heyy");
            }
            if (sessionStorage.getItem("area")) {
                setarea(JSON.parse(sessionStorage.getItem("area")));
                savearea(JSON.parse(sessionStorage.getItem("area")));
            }
            if (sessionStorage.getItem("landmark")) {
                setlandmark(JSON.parse(sessionStorage.getItem("landmark")));
                savelandmark(JSON.parse(sessionStorage.getItem("landmark")));
            }
            if (sessionStorage.getItem("city")) {
                setcity(JSON.parse(sessionStorage.getItem("city")));
                savecity(JSON.parse(sessionStorage.getItem("city")));
            }
            if (sessionStorage.getItem("state")) {
                setstate(JSON.parse(sessionStorage.getItem("state")));
                savestate(JSON.parse(sessionStorage.getItem("state")));
            }
            if (sessionStorage.getItem("pincode")) {
                setpincode(JSON.parse(sessionStorage.getItem("pincode")));
                savepincode(JSON.parse(sessionStorage.getItem("pincode")));
            }
            if (sessionStorage.getItem("phone")) {
                setphone(JSON.parse(sessionStorage.getItem("phone")));
                savephone(JSON.parse(sessionStorage.getItem("phone")));
            }
            if (sessionStorage.getItem("selfie")) {
                setselfie(JSON.parse(sessionStorage.getItem("selfie")));
                saveselfie(JSON.parse(sessionStorage.getItem("selfie")));
            }
        } catch (error) {
            console.log(error);
        }
    }, [userid, kycid])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const sentdata = { data: { house_no: houseno, area_street: area, city: city, state: state, pincode: pincode, landmark: landmark, phone: phone, user: userid } };
        let res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_HOST}/api/kycs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_READ}`
            },
            body: JSON.stringify(sentdata),
        });
        let response = await res.json();
        console.log(response);
        if (response.error) {
            console.log(response.error.message);
            setprob(response.error.message);
        }
        else {
            setkycid(response.data.id);
            savekycid(response.data.id);
            router.push(`/kyc/${response.data.id}`);
        }
    }
    const sessionCall = () => {
        sessionStorage.setItem("houseno", JSON.stringify(houseno));
        sessionStorage.setItem("area", JSON.stringify(area));
        sessionStorage.setItem("landmark", JSON.stringify(landmark));
        sessionStorage.setItem("city", JSON.stringify(city));
        sessionStorage.setItem("state", JSON.stringify(state));
        sessionStorage.setItem("pincode", JSON.stringify(pincode));
        sessionStorage.setItem("phone", JSON.stringify(phone));
        sessionStorage.setItem("selfie", JSON.stringify(selfie));
        router.push("/Tnc");
    }
    return (
        <>
            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
                crossOrigin="anonymous"
            ></Script>
            <Head>
            <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
                
            </Head>
                <Script src="https://unpkg.com/aos@next/dist/aos.js"></Script>
                <Script id="aos_KYC">
                    AOS.init();
                </Script>
            <Navbar
                KYC={null}
                About={"About"}
                Contact={"Contact"}
                Login={"Login"}
                Signup={"Signup"}
                product={product} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart} clearProduct={clearProduct} subTotal={subTotal} gameCart={gameCart} gameTotal={gameTotal} comboCart={comboCart} comboTotal={comboTotal} optCart={optCart} optTotal={optTotal} addGameCartToCart={addGameCartToCart} removeGameCartFromCart={removeGameCartFromCart} clearGameCart={clearGameCart} addOptCartToCart={addOptCartToCart} removeOptCartFromCart={removeOptCartFromCart} clearOptCart={clearOptCart} addComboCartToCart={addComboCartToCart} removeComboCartFromCart={removeComboCartFromCart} clearComboCart={clearComboCart}
                key={kycid} Buy={'Buy'} Sell={'Sell'}
            />
            <div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "3rem 0" }} className={styles.KYC_body} >
                    <h3 style={{ color: "var(--red)", margin: "1.5rem 0", fontSize: "2rem" }}>KYC</h3>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <hr style={{ borderTop: "4px solid var(--red)", width: "20vw", opacity: "100%", borderRadius: "99px" }} data-aos="fade-right"/>
                        <SportsEsportsIcon style={{ color: "var(--red)", transform: "rotateZ(-45deg)", margin: "0rem 2rem", fontSize: "2.5rem" }} className={styles.consoleIcon} />
                        <hr style={{ borderTop: "4px solid var(--red)", width: "20vw", opacity: "100%", borderRadius: "99px" }} 
                        data-aos="fade-left"/>
                    </div>
                    <p style={{ margin: "1.5rem 0" }} className={styles.kycInfo}>We take these details to establish legitimacy of customer&apos;s identify and to protect our systems from other risk factors.</p>
                    <span key={prob} style={{ color: "var(--red)" }}>{prob}</span>
                </div>
                <form onSubmit={handleSubmit} method="POST">
                    <div className={styles.phone_input} data-aos="zoom-in">
                        <label htmlFor="phone">Phone Number: <strong style={{ color: "var(--red)" }}>*</strong></label>
                        <input value={phone}
                            onChange={handleChange}
                            placeholder="Enter Phone Number"
                            type="number"
                            id="phone"
                            name="phone"
                            autoComplete="phone"
                            required
                            style={{ padding: "0.5rem" }} />
                    </div>
                    <div className={styles.kycAddress} style={{ border: "0.5px solid var(--gray)", margin: "0 6rem", padding: "4rem", borderRadius: "20px" }} data-aos="zoom-in">
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem" }}>
                            <h2 style={{ fontSize: "1.65rem" }}>Address</h2>
                            <span style={{ color: "var(--red)" }}>* Required field</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }} className={styles.kycAddress2}>
                            <div style={{ display: "flex", flexDirection: "column", width: "41%" }} className={styles.kycAddressPart1}>
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
                                    style={{ padding: "0.5rem" }}
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
                                    style={{ padding: "0.5rem" }}
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
                                    style={{ marginBottom: "1.5rem", padding: "0.5rem" }}
                                />
                                    <p style={{ margin: "0" }}>Address Proof: <strong style={{ color: "var(--red)" }}>*</strong></p>
                                    <p>(Electricity Bill/ Water Bill/ Gas Bill)</p>
                                <a href="https://drive.google.com/drive/folders/1viOmowLk5NHCO8K0g4j_77o50vWOo9HG?usp=sharing" target="_blank" rel="noreferrer" className={styles.upload}>Upload file</a>
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
                                    style={{ padding: "0.5rem" }}
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
                                    style={{ padding: "0.5rem" }}
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
                                    style={{ marginBottom: "1.5rem", padding: "0.5rem" }}
                                />
                                    <p style={{ margin: "0" }}>Identity Proof: (Front side)<strong style={{ color: "var(--red)" }}>*</strong></p>
                                    <p>(Aadhar Card/ Driving Lisence/ Passport)</p>
                                <a href="https://drive.google.com/drive/folders/1viOmowLk5NHCO8K0g4j_77o50vWOo9HG?usp=sharing" target="_blank" rel="noreferrer" className={styles.upload}>Upload file</a>
                                    <p style={{ marginTop: "1.5rem" }}>Identity Proof: (Back side)<strong style={{ color: "var(--red)" }}>*</strong></p>
                                    <p>(Aadhar Card/ Driving Lisence/ Passport)</p>
                                <a href="https://drive.google.com/drive/folders/1viOmowLk5NHCO8K0g4j_77o50vWOo9HG?usp=sharing" target="_blank" rel="noreferrer" className={styles.upload}>Upload file</a>
                            </div>
                        </div>
                    </div>
                    <div style={{ border: "0.5px solid var(--gray)", margin: "3rem 6rem", padding: "4rem", borderRadius: "20px" }} className={styles.kycAddress} data-aos="zoom-in">
                        <p><span style={{ fontSize: "1.65rem" }}>Selfie</span><strong style={{ color: "var(--red)" }}> *</strong></p>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            {camera && <div>
                                {/* {!camera && <div></div>} */}
                                <Webcam ref={webRef} width={400} height={400} />
                            </div>}
                            <div>
                                {!camera && <p onClick={() => startCamera()} style={{ background: "var(--red)", padding: "0.5rem 1.5rem", color: "var(--white)", borderRadius: "10px", margin: "0" }} className={styles.captureBtn}>Start Capturing</p>}
                                {camera && <span onClick={() => capture()} style={{ background: "var(--red)", borderRadius: "999px", padding: "0.75rem" }}><CameraAltIcon style={{ color: "var(--white)" }} /></span>}
                                {!camera && <Image src={selfie} height={100} width={100} />}
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", marginTop: "3rem" }}>

                            <label htmlFor="sign">Signature: <strong style={{ color: "var(--red)" }}>*</strong></label>
                            <p>This will be used in the rent agreement purpose</p>
                            <a href="https://drive.google.com/drive/folders/1viOmowLk5NHCO8K0g4j_77o50vWOo9HG?usp=sharing" target="_blank" rel="noreferrer" className={styles.upload} onClick={()=>{console.log(Date().now)}}>Upload file</a>
                        </div>
                    </div>
                    <p style={{ margin: "0 6rem" }} className={styles.kycAddress}  data-aos="zoom-in">
                        <input type="checkbox" required style={{ marginRight: "1rem" }} />
                        {/* I have read the <Link href="/Tnc"><span style={{color: "blue", cursor: "pointer"}}>Terms &#38; Conditions</span></Link> of Craving for Gaming */}
                        I have read the <span style={{ color: "blue", cursor: "pointer" }} onClick={() => sessionCall()}>Terms &#38; Conditions</span> of Craving for Gaming
                    </p>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button type="submit" style={{ padding: "0.5rem 20rem", background: "var(--red)", border: "none", color: "white", borderRadius: "10px", margin: "3rem 0" }} className={styles.submitBtn} data-aos="zoom-in">Submit <SendIcon style={{ marginLeft: "1rem" }} /></button>
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
        process.env.NEXT_PUBLIC_STRAPI_HOST + `/api/kycs?populate=*&pagination[pageSize]=100`,
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