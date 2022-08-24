import React from "react";
import Navbar from "../components/Navbar";
import Script from "next/script";
import styles from '../styles/Contact.module.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import contactBanner from '../public/iframe (1).png';
import Image from "next/image";

const Contact = ({ product, subTotal }) => {
    return (
        <div>
            <Script src="/script.js"></Script>
            <Navbar
                product={product}
                KYC={"KYC"}
                About={"About"}
                Contact={null}
                Login={"Login"}
                Signup={"Signup"}
                subTotal={subTotal}
            />
            <div className={styles.contact_box1}>
                <Image src={contactBanner} alt="" />
                <h1>Let&#39;s have a talk</h1>
            </div>

            <div className={styles.contact_box2}>
                <div className={styles.contact_left}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.9436067794186!2d77.11289461440875!3d28.691333488169388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03efc98fd195%3A0xfc565b69d57ad5b2!2sSuraksha%20Enclave!5e0!3m2!1sen!2sin!4v1661192536628!5m2!1sen!2sin"
                        style={{border:"0"}} allowFullScreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className={styles.contact_middle}>
                    <h2>Meet us</h2>

                    <span><LocalPhoneIcon/>8287702693 </span>
                    <span><EmailIcon/>craving4gaming@gmail.com</span>
                    <span> <LocationOnIcon/>160, Suraksha Enclave,
                        PitamPura, New Delhi-110034</span>

                </div>
                <div className={styles.contact_right}>
                    <h2>Pitch us</h2>
                    <p>
                        hello, <br />
                        My name is <strong>your name </strong>and my email address is <strong>your email</strong> and i would
                        like to talk about this <strong> product.</strong>
                    </p>
                    <a href="mailto:craving4gaming.help@gmail.com"> <button>Email Us</button> </a>

                </div>
            </div>
        </div>
    );
};

export default Contact;
