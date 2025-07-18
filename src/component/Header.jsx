import React from 'react'
import test from '../assets/ninty.jpeg'; 
import '../App.css'
import logo from '../assets/react.svg';

export const Header = () => {
  return (
    <>
    <section >
      <div className='head'>
        <img src={test} alt="" className='headImage'/>
        <br />
        <img src={logo} alt="" className='logoImage'/>
        
        {/* <h1 className='head'> hello world</h1> */}
        </div>
    </section>
    </>
  )
}


