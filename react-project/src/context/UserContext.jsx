import React, { createContext } from 'react'

export const DataContext = createContext()

const UserContext = ({children}) => {

    // console.log(props.children)

    // const username = "Kangana"
    const userData = {
        username:"Kangana maheshwari",
        age:20,
        city:"Bhopal"
    }
  return (
    <div>
        <DataContext.Provider value={userData}>
            {children}
        </DataContext.Provider>
    </div>
  )
}

export default UserContext
