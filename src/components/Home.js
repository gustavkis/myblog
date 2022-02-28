import React from 'react'
import { Header } from './Header'
import {Posts} from './Posts'
import { Sidebar} from './Sidebar'

export const Home=()=> {
  return (
    <>
     <Header />
     <div className="row">
       <Posts />
       <Sidebar />
     </div>

    </>
  )
}
