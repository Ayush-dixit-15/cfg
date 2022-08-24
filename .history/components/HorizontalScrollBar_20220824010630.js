import React from 'react'

const HorizontalScrollBar = ({games}) => {
  return (
    <div>
        {games.data.map((item))}
    </div>
  )
}

export default HorizontalScrollBar