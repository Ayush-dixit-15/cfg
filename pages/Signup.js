import React from "react";
import Navbar from "../components/Navbar";

const Signup = () => {
    return (
        <div>
            <Navbar
                KYC={"KYC"}
                About={"About"}
                Contact={"Contact"}
                Login={"Login"}
                Signup={null}
            />
            Signup
        </div>
    );
};

export default Signup;
