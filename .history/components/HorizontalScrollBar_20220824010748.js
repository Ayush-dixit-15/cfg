import React from 'react'
import { Box } from '@mui/material'

const HorizontalScrollBar = ({games}) => {
  return (
    <div>
        {games.data.map((item)=>(
            <Box
             key={games.id}
            >

            </Box>
        ))}
    </div>
  )
}

export default HorizontalScrollBar