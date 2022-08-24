import React from 'react';
import Carousel from 'react-elastic-carousel';
import Link from 'next/link';
import styles from '../styles/Games.module.css';

const breakPoint = [
  { width: 1, itemsToShow: 1 },
  { width: 800, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 6 }
]

const GamesCarousel = ({ games }) => {

  console.log(games);

  return (
    <>
      <Carousel breakPoints={breakPoint}>
        {games.data.map((item) => {
          return (
            <Link href={`/games/${item.attributes.slug}`}>
              <div className={styles.gamesCarousel_item}>
                <img src={item.attributes.Poster.data.attributes.url}></img>
                <h2>{item.attributes.gameName}</h2>
                <p>{item.attributes.genre}</p>
                <p>{item.attributes.consoleType}</p>
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