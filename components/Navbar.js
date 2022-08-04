import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import styles from '../styles/Navbar.module.css';

function BasicExample() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <div className="mx-5">
                <Link href="/"><Image src={logo}></Image></Link>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <div className={styles.flex}>
                    <Nav className="me-auto">
                        <span className={styles.link}>
                            <Link href="/KYC">KYC</Link>
                        </span>
                        <span className={styles.link}>
                            <Link href="/About">About</Link>
                        </span>
                        <span className={styles.link}>
                            <Link href="/Contact">Contact us</Link>
                        </span>
                    </Nav>
                    <Nav>
                        <span className={styles.link}>
                            <Link href="/Login">Log in</Link>
                        </span>
                        <span className={styles.link}>
                            <Link href="/Signup">Sign up</Link>
                        </span>
                    </Nav>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default BasicExample;
