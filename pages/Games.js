
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Link from 'next/link'
import GamesCarousel from "../components/GamesCarousel";
import styles from '../styles/Games.module.css';
import SearchIcon from '@mui/icons-material/Search';
import Footer from "../components/Footer";
import carousel2 from "../public/carousel2.png";
import Image from "next/image";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const Games = ({ games, product, subTotal, action, addProductToCart, removeProductFromCart, clearProduct, gameCart, gameTotal, comboCart, comboTotal, optCart, optTotal, addGameCartToCart, removeGameCartFromCart, clearGameCart, addOptCartToCart, removeOptCartFromCart, clearOptCart, addComboCartToCart, removeComboCartFromCart, clearComboCart }) => {
  const [query, setquery] = useState("");
  const [top, settop] = useState("-100rem");
  const [gameName, setgameName] = useState("");
  const [viewCart, setviewCart] = useState("100rem");
  return (

    <div>
      <Navbar
        KYC={"KYC"}
        About={" About"}
        Contact={"Contact"}
        Login={"Login"}
        Signup={"Signup"}
        product={product} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart} clearProduct={clearProduct} subTotal={subTotal} gameCart={gameCart} gameTotal={gameTotal} comboCart={comboCart} comboTotal={comboTotal} optCart={optCart} optTotal={optTotal} addGameCartToCart={addGameCartToCart} removeGameCartFromCart={removeGameCartFromCart} clearGameCart={clearGameCart} addOptCartToCart={addOptCartToCart} removeOptCartFromCart={removeOptCartFromCart} clearOptCart={clearOptCart} addComboCartToCart={addComboCartToCart} removeComboCartFromCart={removeComboCartFromCart} clearComboCart={clearComboCart} Buy={'Buy'} Sell={'Sell'}
      />
      <div className={styles.alert} style={{ top: `${top}` }} key={top}>
        <img src="https://media.giphy.com/media/FsmT6knIYRxY31VIr1/giphy.gif" />
        <div className={styles.alert_info}>
          <h2>{gameName}</h2>
          <span>Added to cart ✅</span>
        </div>
      </div>
      {/* <div >
        <Image src={carousel2} alt="" />
      </div> */}
      <div className={styles.games_body}>
        <div className={styles.games_promo}>
          <p>Apply Coupon - <strong>WELCOME6969</strong> and get flat Rs. 500 off on games</p>
        </div>

      </div>


      <div className={styles.hero}>
        <div className={styles.hero_item}>
          <div className={styles.hero_top}>
            <img className={styles.hero} src='./cristiano-ronaldo-fifa-17-xx1hcw4aqvwujl0r.jpeg'></img>
          </div>
          <div className={styles.hero_bottom}>
            <div className={styles.hero_left}>
              <img src='./fifa 20.jpg'></img>
            </div>
            <div className={styles.hero_right}>
              <h1>FIFA 20</h1>
              <p>Yet another installment in the FIFA franchise, FIFA 20 brings story mode where you can play as Alex Hunter, a young ambitious park footballer, and guide him to become the most siccessful football star.</p>
              <span>₹500</span>
              <Link href='/games/fifa-20'><button>Buy Now</button></Link>
            </div>
          </div>
        </div>
        <GamesCarousel games={games} ht={"31rem"} addGameCartToCart={addGameCartToCart} />
      </div>
      <div className={styles.games_body}>
      <div className={styles.topic}>
        <h1 style={{ margin: "0rem" }}>Our Best Selling Games</h1>
        <hr style={{ margin: "0rem" }} />
      </div>
      <div className={styles.grid}>
        <div className={styles.cardParent}>
          <Link href={`/games/god-of-war`} >
            <div className={styles.card} style={{ cursor: "pointer" }}>
              <img
                src='./god of war poster.jpg'
                height={180}
                width={180}
              />
              <h2>God of war</h2>
              <span>
                For ₹500
              </span>
            </div>
          </Link>
          <p className={styles.addCartBtnPara} onClick={() => {
            setgameName("God of war");
            addGameCartToCart("god-of-war", 1, 500, "God of war", "./god of war poster.jpg");
            settop("5rem");
            setTimeout(() => {
              settop("-100rem");
            }, 1300);
          }}>
            Add to cart
            <span className={styles.addCartBtn} ><AddShoppingCartIcon className={styles.pointer} />
            </span>
          </p>
        </div>
        <div className={styles.cardParent}>
          <Link href={`/games/the-last-of-us-part-2`} >
            <div className={styles.card} style={{ cursor: "pointer" }}>
              <img
                src='./the last of us.jpeg'
                height={180}
                width={180}
              />
              <h2>
                The Last of us part 2
              </h2>
              <span>
                For ₹500
              </span>
            </div>
          </Link>
          <p className={styles.addCartBtnPara} onClick={() => {
            setgameName("The Last of us part 2");
            addGameCartToCart("the-last-of-us-part-2", 1, 500, "The Last of us part 2", "./the last of us.jpeg");
            settop("5rem");
            setTimeout(() => {
              settop("-100rem");
            }, 1300);
          }}>
            Add to cart
            <span className={styles.addCartBtn} ><AddShoppingCartIcon className={styles.pointer} />
            </span>
          </p>
        </div>
        <div className={styles.cardParent}>
          <Link href={`/games/uncharted-4`}>
            <div className={styles.card} style={{ cursor: "pointer" }}>
              <img
                src='./uncharted 4 poster.jpg'
                height={180}
                width={180}
              />
              <h2>
                Uncharted 4
              </h2>
              <span>
                For ₹500
              </span>
            </div>
          </Link>
          <p className={styles.addCartBtnPara} onClick={() => {
            setgameName("Uncharted 4");
            addGameCartToCart("uncharted-4", 1, 500, "Uncharted 4", "./uncharted 4 poster.jpg");
            settop("5rem");
            setTimeout(() => {
              settop("-100rem");
            }, 1300);
          }}>
            Add to cart
            <span className={styles.addCartBtn}><AddShoppingCartIcon className={styles.pointer} />
            </span>
          </p>
        </div>
        <div className={styles.cardParent}>
          <Link href={`/games/watch-dogs-2`} >
            <div className={styles.card} style={{ cursor: "pointer" }}>
              <img
                src='./watch dogs 2 poster.webp'
                height={180}
                width={180}
              />
              <h2>Watch dogs 2</h2>
              <span>
                For ₹500
              </span>
            </div>
          </Link>
          <p className={styles.addCartBtnPara} onClick={() => {
            setgameName("Watch dogs 2");
            addGameCartToCart("watch-dogs-2", 1, 500, "Watch dogs 2", "./watch dogs 2 poster.webp");
            settop("5rem");
            setTimeout(() => {
              settop("-100rem");
            }, 1300);
          }}>
            Add to cart
            <span className={styles.addCartBtn}><AddShoppingCartIcon className={styles.pointer} />
            </span>
          </p>
        </div>

      </div>
      
        <div className={styles.topic}>
          <h1 style={{ margin: "0rem" }}>All Games</h1>
          <hr style={{ margin: "0rem" }} />
        </div>
        <div className={styles.sorting}>
          <div className={styles.length}>
            <span>Showing {games.data.length} items</span>
            <hr />
          </div>
          <div className={styles.search}>
            <input type="text" placeholder="Search for Games" value={query} onChange={(e) => { setquery(e.target.value) }} />
            <SearchIcon style={{ margin: "0.5rem" }} />
          </div>
        </div>
        <div className={styles.grid}>
          {games.data.filter((val) => {
            if (query === "") {
              return val;
            }
            else if (val.attributes.gameName.toLowerCase().includes(query.toLocaleLowerCase())) {
              return val;
            }
          }).map((item) => {
            return (
              <div key={item.attributes.slug} className={styles.cardParent}>
                <Link
                  href={`/games/${item.attributes.slug}`}

                >
                  <div className={`${styles.card} ${styles.pointer}`}>
                    <img
                      src={
                        item.attributes.Poster.data.attributes.url
                      }
                      height={180}
                      width={180}
                    />
                    <h2>{item.attributes.gameName}</h2>
                    <span>
                      From ₹{item.attributes.price}/day
                    </span>
                  </div>
                </Link>
                <p className={styles.addCartBtnPara} onClick={() => {
                  setgameName(item.attributes.gameName);
                  addGameCartToCart(item.attributes.slug, 1, item.attributes.price, item.attributes.gameName, item.attributes.Poster.data.attributes.url);
                  settop("5rem");
                  setTimeout(() => {
                    settop("-100rem");
                  }, 1300);
                }}>
                  Add to cart
                  <span className={styles.addCartBtn}><AddShoppingCartIcon className={styles.pointer} />
                  </span>
                </p>
              </div>
            );
          })}
        </div>

      </div>

      <Footer />
    </div>
  );
};
export async function getServerSideProps(context) {
  let headers = {
    Authorization: "Bearer b35eaddac22958868e43308870ec29a685e0935a7ec790d450283c283d1c8922015b35f7865c63655ae9b3d3854137acfc18b3e9b7567c861bad59208a9e8c4b346a3002a2f07eeb3870156ea2120e508e6950cb7c8c0c62e35a928fdf3d8e70caa8d7e69a0024487e72f3c4bc086e54bd02425572c91e058fc97df9960b528b"
  }
  let a = await fetch("https://murmuring-brushlands-13987.herokuapp.com/api/games?populate=*&pagination[pageSize]=100", { headers: headers });
  let b = await fetch("https://murmuring-brushlands-13987.herokuapp.com/api/games?filters[genre]=Action-adventure&populate=*", { headers: headers });
  let games = await a.json();
  return {
    props: { games },
  }
}
export default Games;
