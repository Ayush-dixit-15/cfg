import React from "react";
import styles from "../styles/Navbar.module.css";
import logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ KYC, About, Contact, Login, Signup }) => {
    return (
        <div className={styles.navbar}>
            <div className={styles.left}>
                <Link href="/"><Image src={logo} /></Link>
                <ul>
                    {KYC != null && (
                        <li>
                            <Link href={`/${KYC}`}>{KYC}</Link>
                        </li>
                    )}
                    {About != null && (
                        <li>
                            <Link href={`/${About}`}>{About}</Link>
                        </li>
                    )}
                    {Contact != null && (
                        <li>
                            <Link href={`/${Contact}`}>{Contact}</Link>
                        </li>
                    )}
                </ul>
            </div>
            <div className={styles.right}>
                <ul>
                    {Login != null && (
                        <li>
                            <Link href={`/${Login}`}>{Login}</Link>
                        </li>
                    )}
                    {Signup != null && (
                        <li>
                            <Link href={`/${Signup}`}>{Signup}</Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
