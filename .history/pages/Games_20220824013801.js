
import React from "react";
import Navbar from "../components/Navbar";
import Link from 'next/link'
import HorizontalScrollBar from "../components/HorizontalScrollBar";




const Games = ( {games, product, subTotal} ) => {
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
        <div class="flex flex-wrap m-4">
        {games.data.map((item)=>{
          return(
            <Link href = {`/games/${item.attributes.slug}`}>
            <div class="xl:w-1/4 md:w-1/2 p-4 cursor-pointer card">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img class="h-40 rounded w-full object-cover object-center mb-6 poster" src={item.attributes.Poster.data.attributes.url}/>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{ item.attributes.gameName}</h2>
              <p class="leading-relaxed text-base">{item.attributes.details.slice(0,130)}</p>
              </div>
          </div>

            </Link>
          )
        })}
      </div>
      <HorizontalScrollBar/>
      <div className="topic mb-3">
                    <h1>All Games</h1>
                    <hr />
                    <div className="length">
                    <select name="sort" id="sort">
                        <option value="defualt">Genre</option>
                        <option value="lowtohigh">Action-Adventure</option>
                        <option value="lowtohigh">Fps</option>
                    </select></div>
        </div>
              
        </div>
    );
};
export async function getServerSideProps(context) {
    let headers={
        Authorization: "Bearer b35eaddac22958868e43308870ec29a685e0935a7ec790d450283c283d1c8922015b35f7865c63655ae9b3d3854137acfc18b3e9b7567c861bad59208a9e8c4b346a3002a2f07eeb3870156ea2120e508e6950cb7c8c0c62e35a928fdf3d8e70caa8d7e69a0024487e72f3c4bc086e54bd02425572c91e058fc97df9960b528b"
    }
    let a = await fetch("https://murmuring-brushlands-13987.herokuapp.com/api/games?populate=*" , {headers : headers});
    let games = await a.json();
 
    return {
      props: {games},
  }
}
export default Games;
