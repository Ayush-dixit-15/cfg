import { Box } from '@mui/system'
import React, { useContext }  from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import RightArrowIcon from '../public/right-arrow.png';
import LeftArrowIcon from '../public/left-arrow.png';
import { Typography } from '@mui/material';
const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };


const HorizontalScrollbar = ( { games}) =>{
       return (
        <ScrollMenu LeftArrow = {LeftArrow} RightArrow={RightArrow}>
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
        </ScrollMenu>
       )
}

export default HorizontalScrollbar