import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='contained-home'>
    <div className='container'>
      <h> I am Home</h>
      <Link to={"/register"}><a href='#'>Register</a></Link>
      <Link to={"/login"}><a href='#'>Login</a></Link>
    </div>
    </div>
  )
}

export default Home