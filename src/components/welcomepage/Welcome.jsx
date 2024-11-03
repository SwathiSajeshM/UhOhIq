import React from 'react'
import Welcomepic from '../images/1000160333-01.jpeg'
import './Welcome.css'
import { Link } from 'react-router-dom'


const Welcome = () => {
  return (
    <div className='bg-black min-h-screen flex justify-center items-center '>

<div>

</div>
      <img src={Welcomepic} alt=""  className='pt-[15.6rem]' />
      <h1 className='title'>CLICK HERE TO START</h1>
     <Link to='/disclaimer'> <div  className=' h-[5.5rem] w-[5.5rem] absolute bottom-[12.7rem] left-[44rem] rounded-full cursor-pointer'></div></Link>


    </div>
  )
}

export default Welcome
