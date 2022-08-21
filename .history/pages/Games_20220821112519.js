import React from 'react'
import { Navbar } from 'react-bootstrap'


const Games = ({product ,subTotal}) => {
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
            div
    </div>
  )
}

export default Games