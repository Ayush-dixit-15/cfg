import React from "react";
import Navbar from "../components/Navbar";

const Login = () => {
    return (
        <div>
            <Navbar
                KYC={"KYC"}
                About={"About"}
                Contact={"Contact"}
                Login={null}
                Signup={"Signup"}
            />
            Login
        </div>
    );
};

export default Login;
