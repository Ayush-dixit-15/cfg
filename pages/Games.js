import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Link from 'next/link'
import GamesCarousel from "../components/GamesCarousel";
import styles from '../styles/Games.module.css';
import SearchIcon from '@mui/icons-material/Search';


const Games = ({ games, product, subTotal, action }) => {
  const [query, setquery] = useState("");

  return (

    <div>
      <Navbar
        KYC={"KYC"}
        About={" About"}
        Contact={"Contact"}
        Login={"Login"}
        Signup={"Signup"}
        product={product}
        subTotal={subTotal}
      />
      <div className="banner">
        {/* <img src="/1.png" alt="" /> */}
      </div>
      <div className={styles.games_body}>
        <div className={styles.games_promo}>
          <p>Apply Coupon - <strong>WELCOME6969</strong> and get flat Rs. 500 off on games</p>
        </div>
        <div className={styles.topic}>
          <h1>Our Best Selling Games</h1>
          <hr />
        </div>
        <div className={styles.grid}>
          <Link href={`/consoles/`} >
            <div className={styles.card} style={{cursor: "pointer"}}>
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
          <Link href={`/consoles/`} >
            <div className={styles.card} style={{cursor: "pointer"}}>
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
          <Link href={`/consoles/`}>
            <div className={styles.card} style={{cursor: "pointer"}}>
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
          <Link href={`/consoles/`} >
            <div className={styles.card} style={{cursor: "pointer"}}>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan mauris lacinia erat eleifend fermentum. Morbi a convallis dui. Sed et malesuada nunc. Suspendisse sit amet ultrices urna, ac pellentesque arcu. Donec fringilla, nunc ut suscipit consequat, felis erat luctus justo, eu commodo dui dui at nunc. Pellentesque egestas vel erat sit amet condimentum. Curabitur et ante arcu.</p>
              <span>₹500</span>
              <Link href='/'><button>Buy Now</button></Link>
            </div>
          </div>
        </div>
        <GamesCarousel games={games} />
      </div>
      <div className={styles.games_body}>
        <div className={styles.topic}>
          <h1>All Games</h1>
          <hr />
        </div>
        <div className={styles.sorting}>
          <div className={styles.length}>
            <span>Showing {games.data.length} items</span>
            <hr />

            <select name="sort" id="sort">
              <option value="defualt">Defualt Sorting</option>
              <option value="lowtohigh">Price: Low to high</option>
              <option value="lowtohigh">Price: High to low</option>
            </select>
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
              <div key={item.attributes.slug} className={styles.pointer}>
                <Link
                  href={`/games/${item.attributes.slug}`}
                >
                  <div className={styles.card}>
                    <img
                      src={
                        item.attributes.Poster.data.attributes.url
                      }
                      height={180}
                      width={180}
                    />
                    <p>{item.attributes.gameName}</p>
                    <span>
                      From ₹{item.attributes.price}/day
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
export async function getServerSideProps(context) {
  let headers = {
    Authorization: "Bearer b35eaddac22958868e43308870ec29a685e0935a7ec790d450283c283d1c8922015b35f7865c63655ae9b3d3854137acfc18b3e9b7567c861bad59208a9e8c4b346a3002a2f07eeb3870156ea2120e508e6950cb7c8c0c62e35a928fdf3d8e70caa8d7e69a0024487e72f3c4bc086e54bd02425572c91e058fc97df9960b528b"
  }
  let a = await fetch("https://murmuring-brushlands-13987.herokuapp.com/api/games?populate=*", { headers: headers });
  let b = await fetch("https://murmuring-brushlands-13987.herokuapp.com/api/games?filters[genre]=Action-adventure&populate=*", { headers: headers });
  let games = await a.json();
  let action = await b.json();
  console.log(action)
  return {
    props: { games },
  }
}
export default Games;
