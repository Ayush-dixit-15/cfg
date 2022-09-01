import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Link from 'next/link';
import styles from '../styles/Games.module.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const breakPoint = [
  { width: 1, itemsToShow: 2 },
  { width: 800, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 }
]

const GamesCarousel = ({ games, ht, addGameCartToCart }) => {
  const [top, settop] = useState("-100rem");
  const [gameName, setgameName] = useState("");

  console.log(games);

  return (
    <>
      <div className={styles.alert} style={{ top: `${top}` }} key={top}>
        <img src="https://media.giphy.com/media/FsmT6knIYRxY31VIr1/giphy.gif" />
        <div className={styles.alert_info}>
          <h2>{gameName}</h2>
          <span>Added to cart ✅</span>
        </div>
      </div>
      <Carousel breakPoints={breakPoint}>
        {games.data.map((item) => {
          return (
            <div className={styles.gamesCarousel_item} style={{ height: `${ht}` }} key={item.attributes.slug}>
              <Link href={`/games/${item.attributes.slug}`}>
                <div>
                  <img src={item.attributes.Poster.data.attributes.url}></img>
                  <h2>{item.attributes.gameName}</h2>
                  <p style={{ color: "var(--white)" }}>Genre: {item.attributes.genre}</p>
                  <p style={{ color: "var(--white)" }}>Console: {item.attributes.consoleType}</p>
                  <p>{item.attributes.details.slice(0, 60)}...</p>
                </div>
              </Link>
              <div style={{ display: "flex" }}>
                <span className={styles.priceBtn}>₹{item.attributes.price}</span>
                <span className={styles.cartAddBtn} onClick={() => {
                  setgameName(item.attributes.gameName);
                  addGameCartToCart(item.attributes.slug, 1, item.attributes.price, item.attributes.gameName, item.attributes.Poster.data.attributes.url);
                  settop("5rem");
                  setTimeout(() => {
                    settop("-100rem");
                  }, 1300);
                }}><AddShoppingCartIcon /></span>
              </div>
            </div>
          )
        })}
      </Carousel>
    </>
  )
}

export default GamesCarousel