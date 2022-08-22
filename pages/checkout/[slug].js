import React from 'react';
import { useRouter } from 'next/router';
import Navbar from "../../components/Navbar";

const Checkout = ({product, subTotal}) => {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <div>
            <Navbar product={product} KYC={'KYC'} About={'About'} Contact={'Contact'} Login={'Login'} Signup={'Signup'} subTotal={subTotal} />
            <h1>{slug}</h1>
        </div>
    )
}

export default Checkout;