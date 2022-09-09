import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import Head from "next/head";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import styles from '../styles/signup.module.css';
import Link from "next/link";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useRouter } from "next/router";
import Script from "next/script";
import Footer from "../components/Footer";

const Signup = ({ product, subTotal, addProductToCart, removeProductFromCart, clearProduct, gameCart, gameTotal, comboCart, comboTotal, optCart, optTotal, addGameCartToCart, removeGameCartFromCart, clearGameCart, addOptCartToCart, removeOptCartFromCart, clearOptCart, addComboCartToCart, removeComboCartFromCart, clearComboCart}) => {
    const router = useRouter();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [userid, setuserid] = useState(0);
    const [pic, setpic] = useState("");
    const [entername, setentername] = useState("");
    const [enteremail, setenteremail] = useState("");
    const [enterpassword, setenterpassword] = useState("");
    const [visibility, setvisibility] = useState("password");
    const [prob, setprob] = useState("");

    const toggleVisibility = () => {
        if (visibility === "password") {
            setvisibility("text");
        }
        else {
            setvisibility("password");
        }
    }

    async function handleCallBackResponse(response) {
        var userObject = jwt_decode(response.credential);
        console.log(userObject);
        const data = { username: userObject.name + Math.floor(Math.random() * 1001), email: userObject.email, password: userObject.email };
        let res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_HOST}/api/auth/local/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_READ}`
            },
            body: JSON.stringify(data),
        });
        let result = await res.json();
        console.log(result);
        if (result.error) {
            console.log(result.error.message);
            setprob(result.error.message);
        }
        else {
            setname(userObject.name);
            savename(userObject.name);
            setemail(userObject.email);
            saveemail(userObject.email);
            setpic(userObject.picture);
            savepic(userObject.picture);
            setuserid(result.user.id);
            saveuserid(result.user.id);
            router.push(`/KYC`);
        }
    }

    const savename = (items) => {
        localStorage.setItem("name", JSON.stringify(items));
    };
    const saveemail = (items) => {
        localStorage.setItem("email", JSON.stringify(items));
    };
    const savepic = (items) => {
        localStorage.setItem("pic", JSON.stringify(items));
    };
    const saveuserid = (items)=>{
        localStorage.setItem("userid", JSON.stringify(items));
    };

    useEffect(() => {
        /*global google*/
        google.accounts.id.initialize({
            client_id:
                "127144506775-urbch14t4oqipruivbbeqp5spc9nj45r.apps.googleusercontent.com",
            callback: handleCallBackResponse,
        });

        google.accounts.id.renderButton(document.getElementById("signInDiv"), {
            theme: "outline",
            size: "large",
        });

        try {
            if (localStorage.getItem("name")) {
                setname(JSON.parse(localStorage.getItem("name")));
                savename(JSON.parse(localStorage.getItem("name")));
            } else {
                localStorage.setItem("name", JSON.stringify(name));
            };
            if (localStorage.getItem("email")) {
                setemail(JSON.parse(localStorage.getItem("email")));
                saveemail(JSON.parse(localStorage.getItem("email")));
            } else {
                localStorage.setItem("email", JSON.stringify(email));
            };
            if (localStorage.getItem("pic")) {
                setpic(JSON.parse(localStorage.getItem("pic")));
                savepic(JSON.parse(localStorage.getItem("pic")));
            } else {
                localStorage.setItem("pic", JSON.stringify(pic));
            };
            if (localStorage.getItem("userid")) {
                setuserid(JSON.parse(localStorage.getItem("userid")));
                saveuserid(JSON.parse(localStorage.getItem("userid")));
            } else {
                localStorage.setItem("userid", JSON.stringify(userid));
            }
        } catch (error) {
            console.log(error);
        }
    }, [name, email, pic]);
    const handleChange = (e) => {
        if (e.target.name === "entername") {
            setentername(e.target.value);
        }
        else if (e.target.name === "enteremail") {
            setenteremail(e.target.value);
        }
        else if (e.target.name === "enterpassword") {
            setenterpassword(e.target.value);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { username: entername + Math.floor(Math.random() * 1001), email: enteremail, password: enterpassword };
        let res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_HOST}/api/auth/local/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_READ}`
            },
            body: JSON.stringify(data),
        });
        let response = await res.json();
        console.log(response);
        if (response.error) {
            console.log(response.error.message);
            setprob(response.error.message);
        }
        else {
            setname(entername);
            savename(entername);
            setemail(enteremail);
            saveemail(enteremail);
            setpic("N/A");
            savepic("N/A");
            setuserid(response.user.id);
            saveuserid(response.user.id);
            router.push(`/KYC`);
        }
    }
    return (
        <div>
            <Head>
                <script
                    src="https://accounts.google.com/gsi/client"
                    async
                    defer
                ></script>
            </Head>
            <Script src="/script.js"></Script>
            <Navbar
                product={product} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart} clearProduct={clearProduct} subTotal={subTotal} gameCart={gameCart} gameTotal={gameTotal} comboCart={comboCart} comboTotal={comboTotal} optCart={optCart} optTotal={optTotal} addGameCartToCart={addGameCartToCart} removeGameCartFromCart={removeGameCartFromCart} clearGameCart={clearGameCart} addOptCartToCart={addOptCartToCart} removeOptCartFromCart={removeOptCartFromCart} clearOptCart={clearOptCart} addComboCartToCart={addComboCartToCart} removeComboCartFromCart={removeComboCartFromCart} clearComboCart={clearComboCart}
                key={email}
                KYC={"KYC"}
                About={"About"}
                Contact={"Contact"}
                Login={"Login"}
                Signup={null} Buy={'Buy'} Sell={'Sell'}
            />
            <div className={styles.signup_container}>
                <div className={styles.signup_dialogue}>
                    <h3>Sign up</h3>
                    <div id="signInDiv"> </div>
                    <div className={styles.signup_dialogue_input}>
                        <span key={prob} style={{ color: "var(--red)" }}>{prob}</span>
                        <form onSubmit={handleSubmit} method="POST">
                            <label htmlFor="entername">Username: <strong style={{ color: "var(--red)" }}>*</strong></label>
                            <input
                                value={entername}
                                onChange={handleChange}
                                placeholder="Enter your Username"
                                type="text"
                                id="entername"
                                name="entername"
                                autoComplete="entername"
                                required
                                style={{ padding: "0 0.5rem" }}
                            />
                            <label htmlFor="enteremail">E-mail: <strong style={{ color: "var(--red)" }}>*</strong></label>
                            <input
                                value={enteremail}
                                onChange={handleChange}
                                placeholder="Enter your E-mail"
                                type="text"
                                id="enteremail"
                                name="enteremail"
                                autoComplete="enteremail"
                                required
                                style={{ padding: "0 0.5rem" }}
                            />
                            <label htmlFor="enterpassword">Password: <strong style={{ color: "var(--red)" }}>*</strong></label>
                            <div className={styles.password_field}>
                                <input
                                    value={enterpassword}
                                    onChange={handleChange}
                                    placeholder="Enter your Password"
                                    type={visibility}
                                    id="enterpassword"
                                    name="enterpassword"
                                    autoComplete="enterpassword"
                                    required
                                    style={{ padding: "0 0.5rem" }}
                                />
                                <VisibilityIcon onClick={() => toggleVisibility()} className={styles.openEye} style={{ display: `${visibility === 'password' ? 'inline' : 'none'}` }} />
                                <VisibilityOffIcon onClick={() => toggleVisibility()} className={styles.openEye} style={{ display: `${visibility === 'password' ? 'none' : 'inline'}` }} />
                            </div>
                            <button type="submit">Continue</button>
                            <p style={{ margin: "0.5rem 0" }}>Already have an account? <Link href="/Login">Log in</Link></p>
                            <p style={{ margin: "0.5rem 0" }}>By continuing, you agree to craving for gaming&apos;s <Link href="/Tnc">Terms &#38; Conditions.</Link></p>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Signup;
