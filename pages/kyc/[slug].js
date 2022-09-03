import React from 'react';
import Router, { useRouter } from 'next/router';
import styles from '../../styles/Userkyc.module.css';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import blackLogo from "../../public/black logo.png";
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
import Footer from '../../components/Footer';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const UserKyc = ({ kycData, product, subTotal, addProductToCart, removeProductFromCart, clearProduct, gameCart, gameTotal, comboCart, comboTotal, optCart, optTotal, addGameCartToCart, removeGameCartFromCart, clearGameCart, addOptCartToCart, removeOptCartFromCart, clearOptCart, addComboCartToCart, removeComboCartFromCart, clearComboCart }) => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(kycData);
  return (
    <div>
      <Navbar product={product} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart} clearProduct={clearProduct} subTotal={subTotal} gameCart={gameCart} gameTotal={gameTotal} comboCart={comboCart} comboTotal={comboTotal} optCart={optCart} optTotal={optTotal} addGameCartToCart={addGameCartToCart} removeGameCartFromCart={removeGameCartFromCart} clearGameCart={clearGameCart} addOptCartToCart={addOptCartToCart} removeOptCartFromCart={removeOptCartFromCart} clearOptCart={clearOptCart} addComboCartToCart={addComboCartToCart} removeComboCartFromCart={removeComboCartFromCart} clearComboCart={clearComboCart} KYC={null} About={'About'} Contact={'Contact'} Login={'Login'} Signup={'Signup'} Buy={'Buy'} Sell={'Sell'}/>
      <div className={styles.userkyc_container}>
        <div className={styles.left}>
          <h1>KYC</h1>
          <p>Showing Details of: {kycData.data.attributes.user.data.attributes.username}</p>
          <h3>Contact Details</h3>
          <p>Email: {kycData.data.attributes.user.data.attributes.email}</p>
          <p>Phone: {kycData.data.attributes.phone}</p>
          <h3>Address</h3>
          <p>Flat, House no, Building, Company, Apartment: {kycData.data.attributes.house_no}</p>
          <p>Area, Street, Sector, Village: {kycData.data.attributes.area_street}</p>
          <p>Town/City: {kycData.data.attributes.city}</p>
          <p>State: {kycData.data.attributes.state}</p>
          {kycData.data.attributes.landmark != null && <p>Landmark: {kycData.data.attributes.landmark}</p>}
          <p style={{marginBottom: "2rem"}}>Pincode: {kycData.data.attributes.pincode}</p>
          <div className={styles.actionBtns}>
          {(subTotal != 0 || comboTotal != 0) && <Link href={`/checkout/${slug}`}><span className={styles.continueBtn}>Checkout<ArrowRightIcon/></span></Link>}
          {(subTotal === 0 && comboTotal === 0) && <Link href="/"><span className={styles.continueBtn}>Continue<ArrowRightIcon/></span></Link>}
          <Link href={`/kycEdit/${slug}`}><span className={styles.editBtn}>Edit<EditIcon/></span></Link>
          </div>
        </div>
        <div className={styles.right}>
          <Image src={blackLogo} height={275} width={275}/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export async function getServerSideProps(context) {
  let headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_READ}`
  };
  // console.log(process.env.NEXT_PUBLIC_STRAPI_URL);
  // let url =process.env.NEXT_PUBLIC_STRAPI_URL+"/api/products?populate=*";
  let data = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_HOST + `/api/kycs/${context.query.slug}?populate=*`,
    {
      headers: headers,
    }
  );
  let kycData = await data.json();
  return {
    props: { kycData }, // will be passed to the page component as props
  };
}

export default UserKyc;