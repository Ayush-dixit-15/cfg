import React from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import logo from "../public/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
    return (
        <div className={styles.footer_body}>
            <div className={styles.footer_content}>
                <div className={styles.left}>
                    <img src="/logo.png" alt="" />
                    <p>Craving for gaming</p>
                    <div className={styles.socials}>
                    <span>
                        <a href="https://www.instagram.com/craving4gaming/" target="_blank" rel="noreferrer"><InstagramIcon style={{color: 'white'}}/></a>
                    </span>
                    {/* <span>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FacebookIcon style={{color: 'white'}}/></a>
                    </span>
                    <span>
                        <a href="https://in.linkedin.com/" target="_blank" rel="noreferrer"><LinkedInIcon style={{color: 'white'}}/></a>
                    </span> */}
                    </div>
                </div>
                <div className={styles.middle}>
                    <Link href="/About">About us</Link>
                    <Link href="/Tnc">Terms & Conditions</Link>
                    <Link href="/Contact">Contact us</Link>
                    <Link href="/Buy">Buy a console</Link>
                    <Link href="/Sell">Sell your console</Link>
                </div>
                <div className={styles.right}>
                    <h1>Get in Touch</h1>
                    <div className={styles.right_div}>
                        <LocalPhoneIcon />
                        <a href="tel:8287702693">8287702693</a>
                    </div>
                    <div className={styles.right_div}>
                        <MailOutlineIcon />
                        <a href="mailto:craving4gaming.help@gmail.com">
                            craving4gaming.help@gmail.com
                        </a>
                    </div>
                    <div className={styles.right_div}>
                        <LocationOnIcon />
                        <span>
                            160, Suraksha Enclave, PitamPura, New Delhi-110034
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.copy}>
            <span>
                Copyright © 2022 Craving4gaming.com. All rights reserved.
            </span>
            </div>
        </div>
    );
};

export default Footer;
