import React from "react";
import Navbar from "../components/Navbar";
import Link from 'next/link'

const Games = ( {games, product, subTotal} ) => {
    return (
      
        <div>
                <Script
                      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
                      integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
                      crossOrigin="anonymous"
                  ></Script>
              <Head>
                  <link
                      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
                      rel="stylesheet"
                      integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
                      crossOrigin="anonymous"
                  ></link>
              </Head>
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
      <div className="esehi">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
 <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
      </div>
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
