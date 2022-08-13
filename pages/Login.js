import React from "react";
import Navbar from "../components/Navbar";

const Login = ({product}) => {
    return (
        <div>
            <Navbar
            product={product}
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
