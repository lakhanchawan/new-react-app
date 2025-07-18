import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ninty from '/src/assets/ninty.jpeg'
import { Header } from './component/Header'
import { Filter } from './component/filter'
import { Menu } from './component/Menu'
import { Itermediate } from './component/Itermediate'
import { BannerVideo } from './component/BannerVideo'
import { Publication } from './component/Publication'
import { EventCalender } from './component/EventCalender'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <img src={ninty} alt="" /> */}
      <Header />
      <h1>RETAIL JEWELLER</h1>
      <div className='filterMenu'>
        <Filter />
        <Menu />
      </div>
      <BannerVideo />
      <Publication />
      <EventCalender />
    </>
  )
}

export default App
