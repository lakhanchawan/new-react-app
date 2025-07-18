import React from 'react'
import post1 from '../assets/post1.jpg'
import post2 from '../assets/post2.jpg'
import '../App.css'
import { ViewMore } from './ViewMore'

export const Publication = () => {
  return (
    <div className='publicationContainer'>
        <h2 className='publicationHeading'>Publication</h2>
        <div className='publication'>
            <div>
                <img src={post1} alt="" className='post'/>
                <p>India's favourite business magzine <br />for jwellery Retailer</p>
            </div>
            <div>
                <img src={post2} alt="" className='post'/>
                <p>India's favourite business magzine <br />for jwellery Retailer</p>
            </div>
            <ul>
                <li>RJ India Magzine</li>
                <li>RJ ME Magzine</li>
                <li>RJ India Newsletter</li>
                <li>RJ ME Newsletter</li>
                <li>RJ Market Watch</li>
                <li>Incredibles</li>
                <ViewMore />
            </ul>

        </div>
    </div>
  )
}
