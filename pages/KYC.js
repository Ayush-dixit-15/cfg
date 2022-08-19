import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Webcam from "react-webcam";
import Image from "next/image";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const KYC = ({ product }) => {
    const webRef = useRef(null);
    const [selfie, setselfie] = useState("");
    const [camera, setcamera] = useState(false)
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
    const [sign, setsign] = useState("");
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
        else if (e.target.name === "sign") {
            setsign(e.target.value);
        }
    };
    return (
        <>
            <Head>
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
                    crossOrigin="anonymous"
                ></script>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
                    crossOrigin="anonymous"
                ></link>
                <script src="https://kit.fontawesome.com/e47f59bf81.js" crossOrigin="anonymous"></script>
            </Head>
            <Navbar
                product={product}
                KYC={null}
                About={"About"}
                Contact={"Contact"}
                Login={"Login"}
                Signup={"Signup"}
            />
            <div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "3rem 0" }}>
                    <h3 style={{ color: "var(--red)", margin: "1.5rem 0" }}>KYC</h3>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <hr style={{ borderTop: "4px solid var(--red)", width: "20vw", opacity: "100%", borderRadius: "99px" }} />
                        <SportsEsportsIcon style={{ color: "var(--red)", transform: "rotateZ(-45deg)", margin: "0rem 2rem", fontSize: "2.5rem" }} />
                        <hr style={{ borderTop: "4px solid var(--red)", width: "20vw", opacity: "100%", borderRadius: "99px" }} />
                    </div>
                    <p style={{ margin: "1.5rem 0" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan mauris lacinia erat eleifend fermentum. Morbi a convallis dui.</p>
                </div>
                <form>
                    <div style={{ border: "0.5px solid var(--gray)", margin: "0 6rem", padding: "4rem", borderRadius: "20px" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem" }}>
                            <h2 style={{ fontSize: "1.65rem" }}>Address</h2>
                            <span style={{ color: "var(--red)" }}>* Required field</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
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
                                />
                                <label htmlFor="landmark">Landmark:</label>
                                <input
                                    value={landmark}
                                    onChange={handleChange}
                                    placeholder="Enter Landmark"
                                    type="text"
                                    id="landmark"
                                    name="landmark"
                                    autoComplete="landmark"
                                />
                                <label htmlFor="state">State: <strong style={{ color: "var(--red)" }}>*</strong></label>
                                <input
                                    value={state}
                                    onChange={handleChange}
                                    placeholder="Enter State"
                                    type="text"
                                    id="state"
                                    name="state"
                                    autoComplete="state"
                                    required
                                />
                                <label for="addressProof"><p>Address Proof: <strong style={{ color: "var(--red)" }}>*</strong></p><p>(Electricity Bill/ Water Bill/ Gas Bill)</p></label>
                                <input type="file" id="addressProof" name="addressProof" accept="image/*"></input>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
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
                                />
                                <label htmlFor="city">Town/City: <strong style={{ color: "var(--red)" }}>*</strong></label>
                                <input
                                    value={city}
                                    onChange={handleChange}
                                    placeholder="Enter Town/City"
                                    type="text"
                                    id="city"
                                    name="city"
                                    autoComplete="city"
                                />
                                <label htmlFor="pincode">Pincode: <strong style={{ color: "var(--red)" }}>*</strong></label>
                                <input
                                    value={pincode}
                                    onChange={handleChange}
                                    placeholder="Enter Pincode"
                                    type="text"
                                    id="pincode"
                                    name="pincode"
                                    autoComplete="pincode"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{ border: "0.5px solid var(--gray)", margin: "0 6rem", padding: "4rem", borderRadius: "20px" }}>
                        <p><span style={{ fontSize: "1.65rem" }}>Selfie</span><strong style={{ color: "var(--red)" }}> *</strong></p>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <div>
                                {!camera && <div></div>}
                                {camera && <Webcam ref={webRef} width={400} height={400}/>}
                            </div>
                            <div style={{marginLeft: "2rem"}}>
                                {!camera && <p onClick={() => startCamera()} style={{background: "var(--red)", padding: "0.5rem 1.5rem", color: "var(--white)", borderRadius: "10px", margin: "0"}}>Start Capturing</p>}
                                {camera && <span onClick={() => capture()} style={{background: "var(--red)", borderRadius: "999px", padding: "0.75rem"}}><CameraAltIcon style={{color: "var(--white)"}}/></span>}
                                <input type="file" id="sign" name="sign" accept="image/*"></input>
                                {/* <Image src={selfie} height={100} width={100} /> */}
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", marginTop: "3rem"}}>

                        <label for="sign">Signature: <strong style={{ color: "var(--red)" }}>*</strong></label>
                                <input type="file" id="sign" name="sign" accept="image/*"></input>
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>


        </>
    );
};

export default KYC;
