import React from 'react';
import Router, { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import styles from '../../styles/KYC.module.css';
import { useState, useEffect, useRef } from 'react';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Webcam from "react-webcam";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SendIcon from '@mui/icons-material/Send';
import Link from "next/link";
import Footer from '../../components/Footer';
import Image from 'next/image';

const KycEdit = ({ kycData, product, subTotal, addProductToCart, removeProductFromCart, clearProduct, gameCart, gameTotal, comboCart, comboTotal, optCart, optTotal, addGameCartToCart, removeGameCartFromCart, clearGameCart, addOptCartToCart, removeOptCartFromCart, clearOptCart, addComboCartToCart, removeComboCartFromCart, clearComboCart }) => {

  const webRef = useRef(null);
  const [selfie, setselfie] = useState("");
  const [camera, setcamera] = useState(false);
  const [prob, setprob] = useState("");
  const startCamera = () => {
    setcamera(true);
  }
  const capture = () => {
    setselfie(webRef.current.getScreenshot());
    setcamera(false);
    console.log(selfie);
  }

  const [houseno, sethouseno] = useState(kycData.data.attributes.house_no);
  const [area, setarea] = useState(kycData.data.attributes.area_street);
  const [landmark, setlandmark] = useState(kycData.data.attributes.landmark);
  const [city, setcity] = useState(kycData.data.attributes.city);
  const [state, setstate] = useState(kycData.data.attributes.state);
  const [pincode, setpincode] = useState(kycData.data.attributes.pincode);
  const [phone, setphone] = useState(kycData.data.attributes.phone);

  const router = useRouter();

  const { slug } = router.query;

  console.log(kycData);

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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sentdata = { data: { house_no: houseno, area_street: area, city: city, state: state, pincode: pincode, landmark: landmark, phone: phone } };
    let res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_HOST}/api/kycs/${slug}`, {
      method: "PUT",
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
      router.push(`/kyc/${slug}`);
    }
  }

  return (
    <div><Navbar KYC={'KYC'} About={'About'} Contact={'Contact'} Login={'Login'} Signup={'Signup'} product={product} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart} clearProduct={clearProduct} subTotal={subTotal} gameCart={gameCart} gameTotal={gameTotal} comboCart={comboCart} comboTotal={comboTotal} optCart={optCart} optTotal={optTotal} addGameCartToCart={addGameCartToCart} removeGameCartFromCart={removeGameCartFromCart} clearGameCart={clearGameCart} addOptCartToCart={addOptCartToCart} removeOptCartFromCart={removeOptCartFromCart} clearOptCart={clearOptCart} addComboCartToCart={addComboCartToCart} removeComboCartFromCart={removeComboCartFromCart} clearComboCart={clearComboCart} Buy={'Buy'} Sell={'Sell'} /><div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "3rem 0" }} className={styles.KYC_body}>
        <h3 style={{ color: "var(--red)", margin: "1.5rem 0", fontSize: "2rem" }}>KYC</h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          <hr style={{ borderTop: "4px solid var(--red)", width: "20vw", opacity: "100%", borderRadius: "99px" }} />
          <SportsEsportsIcon style={{ color: "var(--red)", transform: "rotateZ(-45deg)", margin: "0rem 2rem", fontSize: "2.5rem" }} className={styles.consoleIcon} />
          <hr style={{ borderTop: "4px solid var(--red)", width: "20vw", opacity: "100%", borderRadius: "99px" }} />
        </div>
        <p style={{ margin: "1.5rem 0" }} className={styles.kycInfo}>We take these details to establish legitimacy of customer&apos;s identify and to protect our systems from other risk factors.</p>
        <span key={prob} style={{ color: "var(--red)" }}>{prob}</span>
      </div>
      <form onSubmit={handleSubmit} method="POST" className={styles.KYC_body}>
        <div className={styles.phone_input} >
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
        <div style={{ border: "0.5px solid var(--gray)", margin: "0 6rem", padding: "4rem", borderRadius: "20px" }} className={styles.kycAddress}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.65rem" }}>Address</h2>
            <span style={{ color: "var(--red)" }}>* Required field</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }} className={styles.kycAddress2}>
            <div style={{ display: "flex", flexDirection: "column", width: "40%" }} className={styles.kycAddressPart1}>
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
              <label htmlFor="addressProof"><p style={{ margin: "0" }}>Address Proof: <strong style={{ color: "var(--red)" }}>*</strong></p><p>(Electricity Bill/ Water Bill/ Gas Bill)</p></label>
              <input type="file" id="addressProof" name="addressProof" accept="image/*" style={{ border: "none", outline: "none" }}></input>
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
                style={{marginBottom: "1.5rem",  padding: "0 0.5rem" }}
              />
              <label htmlFor="proof">
                <p style={{ margin: "0" }}>Identity Proof: <strong style={{ color: "var(--red)" }}>*</strong></p>
                <p>(Aadhar Card/ Driving Lisence/ Passport)</p>
              </label>
              <input type="file" id="proof" name="proof" accept="image/*" style={{ border: "none", outline: "none" }}></input>
            </div>
          </div>
        </div>
        <div style={{ border: "0.5px solid var(--gray)", margin: "3rem 6rem", padding: "4rem", borderRadius: "20px" }} className={styles.kycAddress}>
          <p><span style={{ fontSize: "1.65rem" }}>Selfie</span><strong style={{ color: "var(--red)" }}> *</strong></p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              {!camera && <div></div>}
              {camera && <Webcam ref={webRef} width={400} height={400} />}
            </div>
            <div style={{ marginLeft: "2rem" }}>
              {!camera && <p onClick={() => startCamera()} style={{ background: "var(--red)", padding: "0.5rem 1.5rem", color: "var(--white)", borderRadius: "10px", margin: "0" }} className={styles.captureBtn}>Start Capturing</p>}
              {camera && <span onClick={() => capture()} style={{ background: "var(--red)", borderRadius: "999px", padding: "0.75rem" }}><CameraAltIcon style={{ color: "var(--white)" }} /></span>}
              {!camera && <Image src={selfie} height={100} width={100} />}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: "3rem" }}>

            <label htmlFor="sign">Signature: <strong style={{ color: "var(--red)" }}>*</strong></label>
            <input type="file" id="sign" name="sign" accept="image/*" style={{ border: "none", outline: "none" }}></input>
          </div>
        </div>
        <p style={{ margin: "0 6rem" }} className={styles.kycAddress}>
          <input type="checkbox" required checked style={{ marginRight: "1rem" }} />
          I have read the <Link href="/Tnc"><span style={{ color: "blue", cursor: "pointer" }}>Terms &#38; Conditions</span></Link> of Craving for Gaming
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button type="submit" style={{ padding: "0.5rem 20rem", background: "var(--red)", border: "none", color: "white", borderRadius: "10px", margin: "3rem 0" }} className={styles.submitBtn}>Submit <SendIcon style={{ marginLeft: "1rem" }} /></button>
        </div>
      </form>
    </div>
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  let headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_READ}`
  };
  // console.log(process.env.NEXT_PUBLIC_STRAPI_URL);
  // let url =process.env.NEXT_PUBLIC_STRAPI_URL+"/api/products?populate=*";
  let data = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_HOST + `/api/kycs/${context.query.slug}?populate=*`,
    {
      headers: headers,
    }
  );
  let kycData = await data.json();
  return {
    props: { kycData }, // will be passed to the page component as props
  };
}

export default KycEdit;