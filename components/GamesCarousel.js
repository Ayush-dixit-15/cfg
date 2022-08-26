import React from 'react';
import Carousel from 'react-elastic-carousel';
import Link from 'next/link';
import styles from '../styles/Games.module.css';

const breakPoint = [
  { width: 1, itemsToShow: 2 },
  { width: 800, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 }
]

const GamesCarousel = ({ games, ht}) => {

  console.log(games);

  return (
    <>
      <Carousel breakPoints={breakPoint}>
        {games.data.map((item) => {
          return (
            <Link href={`/games/${item.attributes.slug}`} key={item.attributes.slug}>
              <div className={styles.gamesCarousel_item} style={{height: `${ht}`}}>
                <img src={item.attributes.Poster.data.attributes.url}></img>
                <h2>{item.attributes.gameName}</h2>
                <p style={{color: "var(--red)"}}>Genre: {item.attributes.genre}</p>
                <p style={{color: "var(--red)"}}>Console: {item.attributes.consoleType}</p>
                <p>{item.attributes.details.slice(0, 60)}...</p>
                <span>₹{item.attributes.price}</span>
              </div>
            </Link>
          )
        })}
      </Carousel>
    </>
  )
}

export default GamesCarousel