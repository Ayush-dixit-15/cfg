import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/Checkout.module.css';
import Link from 'next/link';
import GamesCarousel from '../components/GamesCarousel';



const Checkout = ({ product, subTotal, games }) => {

  console.log(games);

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
        <GamesCarousel games={games}/>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {

  let headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_READ}`,
  };
  let gameData = await fetch("https://murmuring-brushlands-13987.herokuapp.com/api/games?populate=*", { headers: headers });
  let games = await gameData.json();
  return {
    props: { games } // will be passed to the page component as props
  };
}

export default Checkout;