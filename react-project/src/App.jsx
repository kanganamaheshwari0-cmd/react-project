
// const App = () => {
//   const user = "Kangana maheshwari"
//   const age = 18

//   return (

//     <div>Hello {user},{age}</div>
//   )
// }

// export default App


//function call karna

// import React from 'react'

// const App = () => {

//   let user = "kangana"

   
//   const changeUser = () => {
//     console.log(user)
//     user = "Hello cutie"
//     console.log(user)
//   }

//   return (
//     <div>
//       <h1>Username is {user}</h1>
//       <button onClick={changeUser}>Change user</button>
      
//     </div>
//   )
// }

// export default App

//  import { useState } from 'react'

//  const App = () => {
//   const [a, setA] = useState(10)

//   const changeA = () => {
//     console.log("chal gya")
//     setA(20)
//   }

//   return (
//     <div>
//       <h1>Value of a is {a}</h1>
//       <button onClick={changeA}>ChangeA</button>
      
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0)
//   return (
//     <div>
//       <h3>Number is {num}</h3>
//       <button onClick={() =>setNum(num+10)}>Increment</button>
//       <button onClick={() =>setNum(num-10)}>decrement</button>

      
//     </div>
//   )
// }
// export default App

// import React from 'react'

// const App = () => {
//   return (
//     <h1 className="text-4xl font-bold">
//       Hello Kangana
//     </h1>
//   )
// }

// export default App

// import React from 'react'
// const App = () => {
//   return (
//     <div>
//       <h2 className='text-5*l bg-pink-700 text-black'>Hello guys</h2>
//       <h2>Hello</h2>
//     </div>
//   )
// }

// export default App

//form handling in react

// import React, { useState } from 'react'

// const App = () => {

//   const [username, setUsername] = useState('')

//   const submitHandler = (e) => {
//     e.preventDefault()

//     console.log(username)

//     setUsername('')
//   }
//    return (
//     <div>
//       <form onSubmit = { (e) => {
//         submitHandler(e)
//       }}>
//         <input 
//         value={username}
//         onChange = { (e) => {
//           // console.log(e.target.value)
//           setUsername(e.target.value)

//         }}
//         className='px-4 py-3 text-xl m-5 bg-white rounded' 
//         type="text" placeholder='Enter your name'/>
//         <button 
//         className='px-4 py-3 m-5 text-white
//         text-xl font-semibold bg-emerald-600 rounded'>Sumbit</button>
//       </form>
//     </div>
//   )
// }

// export default App

//COMPONENTS

// import React from 'react'
// import Header from './components/Header';

// const App = () => {
//   return (
//     <>
//     <Header/>
//     <nav className=' bg-emerald-950 flex py-5 px-10 items-center justify-between'>
//       <h2 className='text-2xl'>Throne8</h2>
//       <div className='flex gap-10 items-center'>
//         <h4 className='text-xl'>About</h4>
//         <h4 className='text-xl'>Contact</h4>
//         <h4 className='text-xl'>Services</h4>
//         <h4 className='text-xl'>Your Account</h4>
//       </div>
//     </nav>
      
//     </>
//   )
// }

// export default App

//PROPS

// import React from 'react'
// import Card from './components/Card'

// const App = () => {

//   return (
//     <div>
//       <Card a='Kangana' />
//       <Card a='Kajal' />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Card from './components/Card'

// const App = () => {

//   const users = [
//   {
//     "name": "Kangana",
//     "city": "Bhopal",
//     "age": 20,
//     "profession": "Software Engineer",
//     "profilePhoto": "https://i.pravatar.cc/150?img=1"
//   },
//   {
//     "name": "Aarav",
//     "city": "Delhi",
//     "age": 22,
//     "profession": "Web Developer",
//     "profilePhoto": "https://i.pravatar.cc/150?img=2"
//   },
//   {
//     "name": "Priya",
//     "city": "Mumbai",
//     "age": 21,
//     "profession": "UI/UX Designer",
//     "profilePhoto": "https://i.pravatar.cc/150?img=3"
//   },
//   {
//     "name": "Rohan",
//     "city": "Indore",
//     "age": 23,
//     "profession": "Data Analyst",
//     "profilePhoto": "https://i.pravatar.cc/150?img=4"
//   },
//   {
//     "name": "Ananya",
//     "city": "Pune",
//     "age": 22,
//     "profession": "Frontend Developer",
//     "profilePhoto": "https://i.pravatar.cc/150?img=5"
//   }
// ]

//FOR EACH

// users.forEach(function(elem){
//   console.log(elem)
// })

//   return (
//     <div>
//       <div className='p-10'>
//         {users.map(function(elem,idx){
//           return <Card key={idx} username={elem.name} age={elem.age} city={elem.city} photo={elem.profilePhoto} prof={elem.profession}/>
//         })}

//       </div>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Ex from './components/Ex'

// const App = () => {
//   return (
//     <div>
//       <Ex name="Kangana"/>
//     </div>
//   )
// }

// export default App

//AXIOS

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const App = () => {

//   const [data, setData] = useState([])

//   const getData =  async () => {
//     const response =  await axios.get('https://picsum.photos/v2/list')//method hai jo iske ander ke data ko leke aane ka kam karti hai
//     // console.log(response)

//     // const data = response.data

//     // console.log(data)

//     setData(response.data)

//     // console.log(data[0].download_url

//     // )
//   }
 
//   // USE EFFECT KA USE ISLIYE HOTA HAI KI ISKE ANDER JO BHI LIKHA HAI USKO BAAR BAAR EXECUTE KARWANA
//   useEffect(() => {
//     getData()
//   }, [])


//   return (
//     <div className='p-10'>
//       <button onClick={getData} className='bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90'>Get Data</button>
//       <div className='p-5 mt-5 bg-gray-950'>
//         {data.map(function(elem,idx){
//           return <div key={idx} className='bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3'>
//           <img className='h-40' src={elem.download_url} alt="" />
//           <h1>{elem.author}</h1>
//           </div>
//         })}
//       </div>
//     </div>
//   )
// }

// export default App

//REACT ROUTER DOM

// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Home from './pages/Home'
// import Product from './pages/Product'
// import Header from './components/Header'

// const App = () => {
//   return (
//     <div>
//       <Header/>
//       <Routes>
//         <Route path='/' element={<Home/>} />
//         <Route path='/about' element={<About/>} />
//         <Route path='/contact' element={<Contact/>} />
//         <Route path='/product' element={<Product/>} />



//       </Routes>
//     </div>
//   )
// }

// export default App

//CONTEXT API

// import React, { useContext } from 'react'
// import Header from './components/Header'
// import Section from './components/Section'
// import Footer from './components/Footer'
// import {DataContext} from './context/UserContext'

// const App = () => {

//   const data = useContext(DataContext)
//   // console.log(data)
//   return (
//     <div>
//       <h1>This is App {data.username}</h1>
//       <Header/>
//       <Section/>
//       <Footer/>
//     </div>
//   )
// }

// export default App

import NetflixSeries from "./components/NetflixSeries";
import React from 'react'

const App = () => {
  return (
    <div>
      <NetflixSeries/>
    </div>
  )
}

export default App




















