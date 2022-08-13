import React from "react";
import Navbar from "../components/Navbar";

const Contact = ({product}) => {
    return (
        <div>
            <Navbar
            product={product}
                KYC={"KYC"}
                About={"About"}
                Contact={null}
                Login={"Login"}
                Signup={"Signup"}
            />
            Contact
        </div>
    );
};

export default Contact;
