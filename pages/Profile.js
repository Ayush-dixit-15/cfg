import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import styles from '../styles/Profile.module.css';
import banner from '../public/profile.gif';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from 'next/router';

const Profile = ({ product, subTotal }) => {
  const router = useRouter();
  const [pic, setpic] = useState("");
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
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
    try {
      if (localStorage.getItem("name")) {
        setname(JSON.parse(localStorage.getItem("name")));
        savename(JSON.parse(localStorage.getItem("name")));
    } 
    if (localStorage.getItem("email")) {
        setemail(JSON.parse(localStorage.getItem("email")));
        saveemail(JSON.parse(localStorage.getItem("email")));
    } 
    if (localStorage.getItem("pic")) {
        setpic(JSON.parse(localStorage.getItem("pic")));
        savepic(JSON.parse(localStorage.getItem("pic")));
    } 
    } catch (error) {
      console.log(error);
    }
  }, [])
  const logOut = () => {
    localStorage.setItem("name", JSON.stringify(""));
    setemail("");
    localStorage.setItem("email", JSON.stringify(""));
    setname("");
    localStorage.setItem("pic", JSON.stringify(""));
    setpic("");
    router.push("/");
  };
  return (
    <div>
      <Navbar product={product} KYC={'KYC'} About={'About'} Contact={'Contact'} Login={'Login'} Signup={'Signup'} subTotal={subTotal} key={email}/>
      <Image src={banner} />
      <div className={styles.profile}>
        <div className={styles.profile_info}>
          <span onClick={()=>logOut} className={styles.logoutBtn}>Logout <LogoutIcon /></span>
          <Image src={pic} width={200} height={200}/>
          <span className={styles.editBtn}>Edit <EditIcon style={{marginLeft: "0.5rem"}}/></span>
        </div>
        <div style={{display:"flex", flexDirection: "column", alignItems: "center"}}>
          <span style={{fontSize: "2.5rem"}}>{name}</span>
          <span style={{fontSize: "1rem", fontWeight: "100"}}>{email}</span>
        </div>
      </div>
    </div>
  )
}

export default Profile;