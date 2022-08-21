import React from 'react'
import { Navbar } from 'react-bootstrap'
import styles from '../styles/Games.module.css';

const Games = () => {
  return (
    <div>
           <Navbar
                product={product}
                KYC={null}
                About={"About"}
                Contact={"Contact"}
                Login={"Login"}
                Signup={"Signup"}
                subTotal={subTotal}
            />
    </div>
  )
}

export default Games