import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import Head from "next/head";
import jwt_decode from "jwt-decode";
import { useState } from "react";

const Signup = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [pic, setpic] = useState("");

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
                KYC={"KYC"}
                About={"About"}
                Contact={"Contact"}
                Login={"Login"}
                Signup={null}
            />
            <div id="signInDiv"> </div>
        </div>
    );
};

export default Signup;
