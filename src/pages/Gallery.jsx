import React from 'react'
import { Outlet } from 'react-router-dom'


function Gallery() {
  return (
    <div>
      Gallery
      {/* {children} */}
      <Outlet />
    </div>
  )
}

export default Gallery