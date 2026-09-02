// import React from 'react'

// const Header = () => {
//   return (
//     <div>
//       main hoon header
//     </div>
//   )
// }

// export default Header

//router react dom

// import React from 'react'
// import { Link } from 'react-router-dom'

// const Header = () => {
//   return (
//     <div className='py-7 px-10 bg-emerald-600 text-white flex items-center justify-between'>
//       <h2 className='text-2xl'>Throne8 </h2>
//       <div className='flex gap-10 text-lg underline'>
//         <Link to='/'>Home</Link>
//         <Link to='/about'>About</Link>
//         <Link to='/product'>Product</Link>
//         <Link to='/contact'>Contact</Link>
//       </div>
//     </div>
//   )
// }

// export default Header

import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Header = () => {
    const username = useContext(DataContext)
  return (
    <div>
      <h1>Header {username.age}</h1>
    </div>
  )
}

export default Header


