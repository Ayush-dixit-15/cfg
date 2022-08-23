import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/Checkout.module.css';
import Link from 'next/link';


const Checkout = ({ product, subTotal, msg }) => {
  const [kycid, setkycid] = useState("");
  const savekycid = (items) => {
    localStorage.setItem("kycid", JSON.stringify(items));
};
  useEffect(() => {
    try {
      if (localStorage.getItem("kycid")) {
          setkycid(JSON.parse(localStorage.getItem("kycid")));
          savekycid(JSON.parse(localStorage.getItem("kycid")));
      }

  } catch (error) {
      console.log(error);
  }
  }, [kycid])
  console.log(msg);
  return (
    <div >
      <Navbar product={product} KYC={'KYC'} About={'About'} Contact={'Contact'} Login={'Login'} Signup={'Signup'} subTotal={subTotal} />
      <div className={styles.checkout_container}>
        <div className={styles.topic}>
          <h1>Review your order</h1>
          <hr />
          <span>
            By placing your order, you agree to craving for gaming&apos;s <Link href="/Tnc">terms &#38; conditions.</Link>
          </span>
        </div>
        <div className={styles.order_address}>
          <div className={styles.address}>
            <div className={styles.left}>
              
            </div>
            <div className={styles.mid}>

            </div>
            <div className={styles.right}>

            </div>
          </div>
          <div className={styles.order}>

          </div>
        </div>
      </div>
    </div>
  )
}

// export async function getServerSideProps(context) {

//   console.log(context);

//   let headers = {
//       Authorization: `Bearer ${process.env.NEXT_PUBLIC_READ}`,
//   };
//   // console.log(process.env.NEXT_PUBLIC_STRAPI_URL);
//   // let url =process.env.NEXT_PUBLIC_STRAPI_URL+"/api/products?populate=*";
//   let data = await fetch(
//       process.env.NEXT_PUBLIC_STRAPI_HOST + `/api/kycs/${kycid}?populate=*`,
//       {
//           headers: headers,
//       }
//   );
//   let kyc = await data.json();
//   return {
//       props: { msg: "hi" } // will be passed to the page component as props
//   };
// }

export default Checkout;