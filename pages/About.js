import React from "react";
import Navbar from "../components/Navbar";
import Script from "next/script";
import Footer from "../components/Footer";

const About = ({ product, subTotal, addProductToCart, removeProductFromCart, clearProduct, gameCart, gameTotal, comboCart, comboTotal, optCart, optTotal, addGameCartToCart, removeGameCartFromCart, clearGameCart, addOptCartToCart, removeOptCartFromCart, clearOptCart, addComboCartToCart, removeComboCartFromCart, clearComboCart }) => {
    return (
        <div>
            <Script src="/script.js"></Script>
            <Navbar
                product={product} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart} clearProduct={clearProduct} subTotal={subTotal} gameCart={gameCart} gameTotal={gameTotal} comboCart={comboCart} comboTotal={comboTotal} optCart={optCart} optTotal={optTotal} addGameCartToCart={addGameCartToCart} removeGameCartFromCart={removeGameCartFromCart} clearGameCart={clearGameCart} addOptCartToCart={addOptCartToCart} removeOptCartFromCart={removeOptCartFromCart} clearOptCart={clearOptCart} addComboCartToCart={addComboCartToCart} removeComboCartFromCart={removeComboCartFromCart} clearComboCart={clearComboCart}
                KYC={"KYC"}
                About={null}
                Contact={"Contact"}
                Login={"Login"}
                Signup={"Signup"}
                Buy={'Buy'} Sell={'Sell'}
            />
            <div className="about_box1">
                <img src="/1523.jpg" alt="Craving For Gaming" />

            </div>
            <div className="about_info">
            <h2>About Craving of Gaming</h2>
            <p>In 2019, three ordinary  college students discussed their shared love for gaming and came up with the idea that built CFG. In the years to follow, with a lot of research, trial n&#39; error, finally launched Craving For Gaming  to share the love of gaming with everyone, at the comfort of their homes.</p>
            <p>We believe that gaming is much more than a means of pastime. It is a means of expression of art, music, creativity and freedom. Gaming is a unique way to tell stories while being involved in them in real time.</p>
            <p className="italics">“So here&#39;s to those of you who share this love with us and those who are willing to try something new. Start a new adventure in your living room.”</p>
            <span>_Team CFG_</span>
            </div>
            <div className="about_box2">
            <img src="/3_20220725_221708_0002 1.png" alt="Craving For Gaming" height={250} width={250}/>

                <div className="about_p1">
                    <h3 style={{fontWeight: "600", fontSize: "1.25rem", marginBottom: "2rem"}}>OUR MISSION</h3>
                    <p> We have always been to change a consumer's mindset of not spending hefty amount on buying a console, when one can easily rent and get it home delivered for the time period they wish along with the best titles in market at no additional costs!</p>
                </div>

            </div>
            {/* <div className="about_box3">
                <div className="about_p2">
                    <h3>VISION</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quam unde nemo eum. Quaerat natus, eum
                        explicabo eos, voluptatibus fugiat veritatis, laborum eaque veniam assumenda perspiciatis illum! Modi
                        eaque corporis reiciendis accusamus aliquid aspernatur quasi cumque molestias quia hic mollitia
                        exercitationem nam libero natus incidunt, dolore consectetur praesentium officiis. Ab beatae impedit,
                        voluptatibus id obcaecati explicabo non tempore dicta, nam natus sit voluptatem quis numquam?</p>
                </div>
                <img src="/3_20220725_221708_0002 1.png" alt="Craving For Gaming" height={250} width={250}/>
            </div> */}
            <Footer/>
        </div>
    );
};

export default About;
