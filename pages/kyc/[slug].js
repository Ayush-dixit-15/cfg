import React from 'react';
import Router, { useRouter } from 'next/router';
import styles from '../../styles/Userkyc.module.css';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import logo from "../../public/logo.png";
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';


const UserKyc = ({ kycData, product, subTotal }) => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(kycData);
  return (
    <div>
      <Navbar product={product} KYC={'KYC'} About={'About'} Contact={'Contact'} Login={'Login'} Signup={'Signup'} subTotal={subTotal} />
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
          <p>Pincode: {kycData.data.attributes.pincode}</p>
          <Link href={`/kycEdit/${slug}`}><span>Edit<EditIcon/></span></Link>
        </div>
        <div className={styles.right}>
          <Image src={logo} height={150} width={275}/>
        </div>
      </div>
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