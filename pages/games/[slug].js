import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from "../../components/Navbar";
import styles from "../../styles/Games.module.css";
import Link from 'next/link'
import Footer from '../../components/Footer';
import GamesCarousel from '../../components/GamesCarousel';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Slug = ({ game, product, subTotal, games, addProductToCart, removeProductFromCart, clearProduct, gameCart, gameTotal, comboCart, comboTotal, optCart, optTotal, addGameCartToCart, removeGameCartFromCart, clearGameCart, addOptCartToCart, removeOptCartFromCart, clearOptCart, addComboCartToCart, removeComboCartFromCart, clearComboCart }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [cartStatus, setcartStatus] = useState("Add to cart");
  const [kycid, setkycid] = useState(0);
  const [top, settop] = useState("-100rem");
  const [showcart, setshowcart] = useState("translateX(100rem)");
  const toggleCart = () => {
    if (showcart === "translateX(0)") {
        setshowcart("translateX(100rem)");
    } else {
        setshowcart("translateX(0)");
    }
}
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
  }, [])



  return (
    <div>
      <Navbar
        product={product} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart} clearProduct={clearProduct} subTotal={subTotal} gameCart={gameCart} gameTotal={gameTotal} comboCart={comboCart} comboTotal={comboTotal} optCart={optCart} optTotal={optTotal} addGameCartToCart={addGameCartToCart} removeGameCartFromCart={removeGameCartFromCart} clearGameCart={clearGameCart} addOptCartToCart={addOptCartToCart} removeOptCartFromCart={removeOptCartFromCart} clearOptCart={clearOptCart} addComboCartToCart={addComboCartToCart} removeComboCartFromCart={removeComboCartFromCart} clearComboCart={clearComboCart}
        KYC={"KYC"}
        About={" About"}
        Contact={"Contact"}
        Login={"Login"}
        Signup={"Signup"}
        Buy={'Buy'} Sell={'Sell'}
      />
      <div className={styles.alert} style={{ top: `${top}` }} key={top}>
        <img src="https://media.giphy.com/media/FsmT6knIYRxY31VIr1/giphy.gif" />
        <div className={styles.alert_info}>
          <h2>{game.attributes.gameName}</h2>
          <span>Added to cart ✅</span>
        </div>
      </div>
      <div className="w-full h-full bg-no-repeat bg-cover" style={{
        backgroundImage: `url(${game.attributes.Banner.data.attributes.url})`
      }}>
        {/* <img alt="ecommerce" className={styles.poster} src={ process.env.NEXT_PUBLIC_STRAPI_HOST + game.attributes.Banner.data.attributes.url }/> */}

        <section className="text-gray-600 body-font overflow-hidden" style={{ background: "linear-gradient(90deg, black 50%, transparent)" }}>
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img alt="ecommerce" className={styles.poster} src={game.attributes.Poster.data.attributes.url} />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

                <h1 className={`text-white text-3xl title-font font-medium mb-1 ${styles.gameTitle}`}>{game.attributes.gameName}</h1>
                <h2 style={{ color: "var(--red)" }} className="text-sm title-font text-gray-500 tracking-widest text-red-600 font-bold">{game.attributes.consoleType}</h2>
                <p className={`leading-relaxed text-white ${styles.gameDetails}`}>{game.attributes.details}</p>
                <div className="flex" style={{ marginTop: "1.5rem" }}>
                  <span className="title-font font-medium text-2xl text-white">₹{game.attributes.price}</span>
                  <button style={{ background: "var(--red)" }} className={`flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded ${styles.addToCart}`} onClick={() => {
                    addGameCartToCart(slug, 1, game.attributes.price, game.attributes.gameName, game.attributes.Poster.data.attributes.url);
                    settop("5rem");
                    setTimeout(() => {
                      settop("-100rem");
                    }, 2000);
                    setcartStatus("Added to cart");
                  }}>
                    {/* <div className={styles.cartAnimate}>
                      <img src={game.attributes.Poster.data.attributes.url}/>
                    </div> */}
                    {cartStatus}
                  </button>
                  <button onClick={() => toggleCart()} className={`flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded ${styles.addToCart}`}>
                    View Cart
                  </button>
                  <div className={styles.cart} style={{ transform: `${showcart}` }}>
                    <div className={styles.cart_head}>
                        <ArrowBackIosIcon className={styles.cartIcon} onClick={() => toggleCart()} />
                        <span className={styles.cart_title}>Your Cart</span>
                        <span className={styles.cart_itemno}>({Object.keys(product).length + Object.keys(gameCart).length + Object.keys(comboCart).length + Object.keys(optCart).length} items)</span>
                        {Object.keys(product).map((k) => {
                            return <div key={k} style={{ display: "flex", margin: "1rem 2rem" }}>
                                <img src={product[k].img} width={100} height={100}></img>
                                <div style={{ marginLeft: "1rem" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", width: "10rem" }}>
                                        <Link href={`/consoles/${k}`} ><h3 style={{ fontWeight: "600", cursor: "pointer" }}>{product[k].name}</h3></Link>
                                        <DeleteForeverIcon style={{ color: 'var(--red)' }} onClick={() => clearProduct(k)} />
                                    </div>
                                    <p>Quantity: <span className={styles.qtyBtn} onClick={() => { removeProductFromCart(k, 1) }}>-</span>{product[k].qty}<span className={styles.qtyBtn} onClick={() => { addProductToCart(k, 1, product[k].price, product[k].name, product[k].img) }}>+</span></p>
                                    <span style={{ color: "var(--red)" }}>{ }₹{`${product[k].price * product[k].qty}`}</span>
                                </div>
                            </div>
                        })}
                        {Object.keys(gameCart).map((key) => {
                            return <div key={key} style={{ display: "flex", margin: "1rem 2rem" }}>
                                <img src={gameCart[key].img} width={100} height={100}></img>
                                <div style={{ marginLeft: "1rem" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", width: "10rem" }}>
                                        <Link href={`/games/${key}`} ><h3 style={{ fontWeight: "600", cursor: "pointer" }}>{gameCart[key].name}</h3></Link><DeleteForeverIcon style={{ color: 'var(--red)' }} onClick={() => clearGameCart(key)} /></div>
                                    <p className={styles.cartQtyAmt}>Quantity: <span className={styles.qtyBtn} onClick={() => { removeGameCartFromCart(key, 1) }}>-</span>{gameCart[key].qty}<span className={styles.qtyBtn} onClick={() => { addGameCartToCart(key, 1, gameCart[key].price, gameCart[key].name, gameCart[key].img) }}>+</span></p>
                                    <span style={{ color: "var(--red)" }}>₹{`${gameCart[key].price * gameCart[key].qty}`}</span>
                                </div>
                            </div>
                        })}
                        {Object.keys(comboCart).map((key) => {
                            return <div key={key} style={{ display: "flex", margin: "1rem 2rem" }}>
                                <img src={comboCart[key].img} width={100} height={100}></img>

                                <div style={{ marginLeft: "1rem" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", width: "10rem" }}>
                                        <Link href={`/combos/${key}`} ><h3 style={{ fontWeight: "600", cursor: "pointer" }}>{comboCart[key].name}</h3></Link><DeleteForeverIcon style={{ color: 'var(--red)' }} onClick={() => clearComboCart(key)} /></div>
                                    <p className={styles.cartQtyAmt}>Quantity: <span className={styles.qtyBtn} onClick={() => { removeComboCartFromCart(key, 1) }}>-</span>{comboCart[key].qty}<span className={styles.qtyBtn} onClick={() => { addComboCartToCart(key, 1, comboCart[key].price, comboCart[key].name, comboCart[key].img) }}>+</span></p>
                                    <span style={{ color: "var(--red)" }}>₹{`${comboCart[key].price * comboCart[key].qty}`}</span>
                                </div>
                            </div>
                        })}
                        {Object.keys(optCart).map((key) => {
                            return <div key={key} style={{ display: "flex", margin: "1rem 2rem" }}>
                                <img src={optCart[key].img} width={100} height={100}></img>
                                <div style={{ marginLeft: "1rem" }}>
                                    <h3 style={{ display: "flex", justifyContent: "space-between", width: "10rem", fontWeight: "600", cursor: "pointer" }}>{optCart[key].name}<DeleteForeverIcon style={{ color: 'var(--red)' }} onClick={() => clearOptCart(key)} /></h3>
                                    <p className={styles.cartQtyAmt}>Quantity: <span className={styles.qtyBtn} onClick={() => { removeOptCartFromCart(key, 1) }}>-</span>{optCart[key].qty}<span className={styles.qtyBtn} onClick={() => { addOptCartToCart(key, 1, optCart[key].price, optCart[key].name, optCart[key].img) }}>+</span></p>
                                    <span style={{ color: "var(--red)" }}>₹{`${optCart[key].price * optCart[key].qty}`}</span>
                                </div>
                            </div>
                        })}
                    </div>
                    {Object.keys(product).length + Object.keys(gameCart).length + Object.keys(comboCart).length + Object.keys(optCart).length === 0 && <div className={styles.cartEmpty}>
                        <ProductionQuantityLimitsIcon style={{ fontSize: "8rem", color: "var(--red)" }} />
                        <span>Your cart is Empty</span>
                    </div>}
                    {(subTotal == 0 || comboTotal == 0) && <div>
                        {/* <p>abcd</p>     */}
                    </div>}
                    {(subTotal != 0 || comboTotal != 0) && <div className={styles.checkout}>
                        <hr />
                        <div className={styles.subtotal}>
                            <span>Subtotal: </span>
                            <span>₹{subTotal + gameTotal + comboTotal + optTotal}</span>
                        </div>
                        <Link href="/KYC"><button>Proceed to KYC</button></Link>
                    </div>}
                </div>
                <div className={styles.phoneCart} style={{ transform: `${showcart}` }}>
                    <div className={styles.cart_head}>
                        <ArrowBackIosIcon className={styles.cartIcon} onClick={() => toggleCart()} />
                        <span className={styles.cart_title}>Your Cart</span>
                        <span className={styles.cart_itemno}>({Object.keys(product).length + Object.keys(gameCart).length + Object.keys(comboCart).length + Object.keys(optCart).length} items)</span>
                        {Object.keys(product).map((k) => {
                            return <div key={k} style={{ display: "flex", margin: "1rem 2rem" }}>
                                <img src={product[k].img} width={100} height={100}></img>
                                <div style={{ marginLeft: "1rem" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", width: "10rem" }}>
                                        <Link href={`/consoles/${k}`} ><h3 style={{ fontWeight: "600" }}>{product[k].name}</h3></Link>
                                        <DeleteForeverIcon style={{ color: 'var(--red)' }} onClick={() => clearProduct(k)} />
                                    </div>
                                    <p>Quantity: <span className={styles.qtyBtn} onClick={() => { removeProductFromCart(k, 1) }}>-</span>{product[k].qty}<span className={styles.qtyBtn} onClick={() => { addProductToCart(k, 1, product[k].price, product[k].name, product[k].img) }}>+</span></p>
                                    <span style={{ color: "var(--red)" }}>₹{`${product[k].price * product[k].qty}`}</span>
                                </div>
                            </div>
                        })}
                        {Object.keys(gameCart).map((key) => {
                            return <div key={key} style={{ display: "flex", margin: "1rem 2rem" }}>
                                <img src={gameCart[key].img} width={100} height={100}></img>
                                <div style={{ marginLeft: "1rem" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", width: "10rem" }}>
                                        <Link href={`/games/${key}`} ><h3 style={{ fontWeight: "600" }}>{gameCart[key].name}</h3></Link><DeleteForeverIcon style={{ color: 'var(--red)' }} onClick={() => clearGameCart(key)} /></div>
                                    <p className={styles.cartQtyAmt}>Quantity: <span className={styles.qtyBtn} onClick={() => { removeGameCartFromCart(key, 1) }}>-</span>{gameCart[key].qty}<span className={styles.qtyBtn} onClick={() => { addGameCartToCart(key, 1, gameCart[key].price, gameCart[key].name, gameCart[key].img) }}>+</span></p>
                                    <span style={{ color: "var(--red)" }}>₹{`${gameCart[key].price * gameCart[key].qty}`}</span>
                                </div>
                            </div>
                        })}
                        {Object.keys(comboCart).map((key) => {
                            return <div key={key} style={{ display: "flex", margin: "1rem 2rem" }}>
                                <img src={comboCart[key].img} width={100} height={100}></img>

                                <div style={{ marginLeft: "1rem" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", width: "10rem" }}>
                                        <Link href={`/combos/${key}`} ><h3 style={{ fontWeight: "600" }}>{comboCart[key].name}</h3></Link><DeleteForeverIcon style={{ color: 'var(--red)' }} onClick={() => clearComboCart(key)} /></div>
                                    <p className={styles.cartQtyAmt}>Quantity: <span className={styles.qtyBtn} onClick={() => { removeComboCartFromCart(key, 1) }}>-</span>{comboCart[key].qty}<span className={styles.qtyBtn} onClick={() => { addComboCartToCart(key, 1, comboCart[key].price, comboCart[key].name, comboCart[key].img) }}>+</span></p>
                                    <span style={{ color: "var(--red)" }}>₹{`${comboCart[key].price * comboCart[key].qty}`}</span>
                                </div>
                            </div>
                        })}
                        {Object.keys(optCart).map((key) => {
                            return <div key={key} style={{ display: "flex", margin: "1rem 2rem" }}>
                                <img src={optCart[key].img} width={100} height={100}></img>
                                <div style={{ marginLeft: "1rem" }}>
                                    <h3 style={{ display: "flex", justifyContent: "space-between", width: "10rem", fontWeight: "600" }}>{optCart[key].name}<DeleteForeverIcon style={{ color: 'var(--red)' }} onClick={() => clearOptCart(key)} /></h3>
                                    <p className={styles.cartQtyAmt}>Quantity: <span className={styles.qtyBtn} onClick={() => { removeOptCartFromCart(key, 1) }}>-</span>{optCart[key].qty}<span className={styles.qtyBtn} onClick={() => { addOptCartToCart(key, 1, optCart[key].price, optCart[key].name, optCart[key].img) }}>+</span></p>
                                    <span style={{ color: "var(--red)" }}>₹{`${optCart[key].price * optCart[key].qty}`}</span>
                                </div>
                            </div>
                        })}
                    </div>
                    {Object.keys(product).length + Object.keys(gameCart).length + Object.keys(comboCart).length + Object.keys(optCart).length === 0 && <div className={styles.cartEmpty}>
                        <ProductionQuantityLimitsIcon style={{ fontSize: "8rem", color: "var(--red)" }} />
                        <span>Your cart is Empty</span>
                    </div>}
                    {(subTotal != 0 || comboTotal != 0) && <div className={styles.checkout}>
                        <hr />
                        <div className={styles.subtotal}>
                            <span>Subtotal: </span>
                            <span>₹{subTotal + gameTotal + comboTotal + optTotal}</span>
                        </div>
                        <Link href="/KYC"><button>Proceed to KYC</button></Link>
                    </div>}
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.game_body}>
        <div className={styles.topic}>
          <h1>More Games</h1>
          <hr />
        </div>
        <GamesCarousel games={games} ht={"28rem"} addGameCartToCart={addGameCartToCart}></GamesCarousel>
      </div>
      <Footer />
    </div>
  )
}
export async function getServerSideProps(context) {

  let headers = {
    Authorization: "Bearer b35eaddac22958868e43308870ec29a685e0935a7ec790d450283c283d1c8922015b35f7865c63655ae9b3d3854137acfc18b3e9b7567c861bad59208a9e8c4b346a3002a2f07eeb3870156ea2120e508e6950cb7c8c0c62e35a928fdf3d8e70caa8d7e69a0024487e72f3c4bc086e54bd02425572c91e058fc97df9960b528b"
  }
  let a = await fetch("https://murmuring-brushlands-13987.herokuapp.com/api/games?filters[slug]=" + context.query.slug + "&populate=*", { headers: headers });
  let game = await a.json();
  let b = await fetch("https://murmuring-brushlands-13987.herokuapp.com/api/games?populate=*&pagination[pageSize]=100"
  , { headers: headers });
  let games = await b.json();

  return {
    props: { game: game.data[0], games },
  }
}

export default Slug