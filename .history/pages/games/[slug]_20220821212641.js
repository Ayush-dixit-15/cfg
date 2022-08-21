import React from 'react';
import { useRouter } from 'next/router';
import Navbar from "../../components/Navbar";
import styles from "../../styles/Games.module.css";

const Slug = ({game}) => {
    const router = useRouter();
    const { slug } = router.query;
    
    
  return (
    <div> 
         <Navbar
                product= "null"
                KYC={"KYC"}
                About={" About"}
                Contact={"Contact"}
                Login={"Login"}
                Signup={"Signup"}
            />
            <div className={styles.main_banner} style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_STRAPI_HOST+game.attributes.Banner.data.attributes.url})` 
            }}>
            {/* <img alt="ecommerce" className={styles.poster} src={ process.env.NEXT_PUBLIC_STRAPI_HOST + game.attributes.Banner.data.attributes.url }/> */}
            
            <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className={styles.poster} src={ process.env.NEXT_PUBLIC_STRAPI_HOST + game.attributes.Poster.data.attributes.url }/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
       
        <h1 className="text-white text-3xl title-font font-medium mb-1">{game.attributes.gameName}</h1>
        <h2 className="text-sm title-font text-gray-500 tracking-widest text-red-600 font-bold">{game.attributes.consoleType}</h2>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
        
        </div>
        <p className="leading-relaxed text-white">{game.attributes.details}</p>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-white">₹{game.attributes.price}</span>
          <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add to Cart</button>
          <button className="flex ml-auto text-red-500 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-white-600 rounded">Buy Now</button>
  
        </div>
      </div>
    </div>
  </div>
</section>
</div>

 </div>
  )
}
export async function getServerSideProps(context) {
    console.log(context.query)
    let headers={
        Authorization: "Bearer b35eaddac22958868e43308870ec29a685e0935a7ec790d450283c283d1c8922015b35f7865c63655ae9b3d3854137acfc18b3e9b7567c861bad59208a9e8c4b346a3002a2f07eeb3870156ea2120e508e6950cb7c8c0c62e35a928fdf3d8e70caa8d7e69a0024487e72f3c4bc086e54bd02425572c91e058fc97df9960b528b"
    }
    let a = await fetch("https://murmuring-brushlands-13987.herokuapp.com/api/games?filters[slug]="+context.query.slug + "&populate=*" , {headers : headers});
    let game = await a.json();
    return {
      props: {game: game.data[0]},
  }
}

export default Slug