import React from "react";
import Navbar from "../components/Navbar";

const Contact = ({product ,subTotal}) => {
    return (
        <div>
            <Navbar
            product={product}
                KYC={"KYC"}
                About={"About"}
                Contact={null}
                Login={"Login"}
                Signup={"Signup"}
                subTotal={subTotal}
            />
             <div className="contact_box1">
        <div className="contact_contact">
            <h1>Contact Us</h1>
            <p>Want to get in touch? We’d love to hear from you. Here’s how you can reach us...</p>
        </div>
    </div>

    <div className="contact_box2">
        <div className="contact_left">
            <img src="/carbon_phone-filled.png" alt=""/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quo accusantium aliquam iste iusto
                aspernatur velit nam consectetur, et eligendi.</p>
        </div>
        <div className="contact_right">
            <img src="/bi_chat-left-dots-fill.png" alt=""/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus totam inventore esse quisquam
                perferendis, similique quas adipisci laborum neque facilis!</p>
        </div>
    </div>
        </div>
    );
};

export default Contact;
