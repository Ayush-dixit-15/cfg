import { Box } from '@mui/system'
import React, { useContext }  from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import RightArrowIcon from './';
import LeftArrowIcon from '../images/icons/left-arrow.png';
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


const HorizontalScrollbar = ( { data, bodyPart, setBodyPart, isBodyParts}) =>{
       return (
        <ScrollMenu LeftArrow = {LeftArrow} RightArrow={RightArrow}>
           { data.map((item) => (<Box
             m = " 0 40px "
             >
        </Box>))} 
        </ScrollMenu>
       )
}

export default HorizontalScrollbar