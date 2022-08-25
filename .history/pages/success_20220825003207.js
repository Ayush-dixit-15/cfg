import React, {useState,useEffect} from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

import { runFireworks } from '../../'
const Success = () => {
   const [product, setProduct] = useState({})
    useEffect(()=>{
        if (localStorage.getItem("product")) {
            setProduct(JSON.parse(localStorage.getItem("product")));
            saveProduct(JSON.parse(localStorage.getItem("product")));
          }
        runFireworks();
    }, []);
    const saveProduct = (myProduct) => {
        localStorage.setItem("product", JSON.stringify(myProduct))
        
      }
    const router = useRouter();
  return (
    <div className="success-wrapper">
        <div className="success">
            <p className="icon">
                <BsBagCheckFill/>
            </p>
            <h2>
                Thank you for your order !
            </h2>
            <p className="email-msg">
                Check your email inbox for the receipt
            </p>
            <p className="description">
                If you have any questions, please email
                <a href="mailto:order@example.com" className="email">craving4gaming.help@gmail.com</a>
            </p>
            
                <button className="btn" type="button" width="300px" onClick={()=>{
                    localStorage.setItem("product", JSON.stringify({}));
                    router.push('/');
                }}>
                  Continue Shopping
                </button>
          
        </div>
    </div>
  )
}

export default Success