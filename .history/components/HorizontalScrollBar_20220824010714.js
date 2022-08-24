import React from 'react'
import { Box } from '@mui/material'

const HorizontalScrollBar = ({games}) => {
  return (
    <div>
        {games.data.map((it))}
    </div>
  )
}

export default HorizontalScrollBar