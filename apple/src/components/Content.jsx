import React from 'react'
import FifteenPro from './FifteenPro'
import Bankoffer from './Bankoffer'
import IphoneFifteen from './iPhoneFifteen'
import './Navbar.css'

function Content() {
  return (
    <div className='content'>
        <Bankoffer/>
        <FifteenPro/>
        <IphoneFifteen/>
    </div>
  )
}

export default Content