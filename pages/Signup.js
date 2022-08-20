import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import Head from "next/head";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import styles from '../styles/signup.module.css';
import Link from "next/link";

const Signup = ({ product }) => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [pic, setpic] = useState("");
    const [entername, setentername] = useState("");
    const [enteremail, setenteremail] = useState("");
    const [enterpassword, setenterpassword] = useState("");

    function handleCallBackResponse(response) {
        console.log(response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject);
        setname(userObject.name);
        savename(userObject.name);
        setemail(userObject.email);
        saveemail(userObject.email);
        setpic(userObject.picture);
        savepic(userObject.picture);
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
            }
            if (localStorage.getItem("email")) {
                setemail(JSON.parse(localStorage.getItem("email")));
                saveemail(JSON.parse(localStorage.getItem("email")));
            } else {
                localStorage.setItem("email", JSON.stringify(email));
            }
            if (localStorage.getItem("pic")) {
                setpic(JSON.parse(localStorage.getItem("pic")));
                savepic(JSON.parse(localStorage.getItem("pic")));
            } else {
                localStorage.setItem("pic", JSON.stringify(pic));
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

    return (
        <div>
            <Head>
                <script
                    src="https://accounts.google.com/gsi/client"
                    async
                    defer
                ></script>
            </Head>
            <Navbar
                product={product}
                key={email}
                KYC={"KYC"}
                About={"About"}
                Contact={"Contact"}
                Login={"Login"}
                Signup={null}
            />
            <div className={styles.signup_container}>
                <div className={styles.signup_dialogue}>
                    <h3>Sign up</h3>
                    <div id="signInDiv"> </div>
                    <div className={styles.signup_dialogue_input}>
                        <form>
                        <label htmlFor="entername">Full Name: <strong style={{ color: "var(--red)" }}>*</strong></label>
                        <input
                            value={entername}
                            onChange={handleChange}
                            placeholder="Enter your Full Name"
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
                        <input
                            value={enterpassword}
                            onChange={handleChange}
                            placeholder="Enter your Password"
                            type="text"
                            id="enterpassword"
                            name="enterpassword"
                            autoComplete="enterpassword"
                            required
                            style={{ padding: "0 0.5rem" }}
                        />
                        <button type="submit">Continue</button>
                        <p style={{margin: "0.5rem 0"}}>Already have an account? <Link href="/Login">Log in</Link></p>
                        <p style={{margin: "0.5rem 0"}}>By continuing, you agree to craving for gaming's <Link href="/Tnc">Terms & Conditions.</Link></p>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
