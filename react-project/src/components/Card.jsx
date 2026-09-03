// import React from 'react'

// const Card = (props) => {
//   return (
//     <div>
//       <h1 className='text-5xl'>Username is {props.a}</h1>
//     </div>
//   )
// }

// export default Card


// import React from 'react'

// const Card = (props) => {
//     console.log(props.photo)
//   return (
//     <div className=' mr-10 bg-white text-black inline-block p-6 text-center rounded'>
//         <img className=' ml-8 h-32 w-32 rounded-full mb-3' src={props.photo} alt="" />
//         <h1 className='text-2xl font-semibold mb-4'>{props.username}</h1>
//         <h4 className='text-blue-400'>{props.prof}</h4>
//         <h2>{props.city}, {props.age}</h2>
//         <button className=' mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium'>Add Friend</button>
//     </div>
//   )
// }

// export default Card

import React from 'react'

export const Card = ({ series }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-5">
      
      <img
        src={series.img_url}
        alt={series.name}
        className="w-full h-64 object-cover rounded-lg"
      />

      <h2 className="text-2xl font-bold mt-4">
        {series.name}
      </h2>

      <p className="mt-2">
        {series.description}
      </p>

      <a
  href={series.watch_url}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-red-600 px-4 py-2 rounded mt-4"
>
  Watch Now
</a>

    </div>
  )
}
