import React from 'react'
import { Box } from '@mui/material'

const HorizontalScrollBar = ({games}) => {
  return (
    <div>
        {games.data.map((item)=>(
            <Box
             m = "1 40px"  >

            </Box>
        ))}
    </div>
  )
}

export default HorizontalScrollBar