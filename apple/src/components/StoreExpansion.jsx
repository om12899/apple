import React from 'react'
import './Navbar.css'
function StoreExpansion() {
  return (
    <div className='store-expansion bg-light d-flex align-items-start py-5'>
        <div className='p-5'>
            <p>Shop</p>
            <h3>Shop the Latest</h3>
            <h3>Mac</h3>
            <h3>iPad</h3>
            <h3>iPhone</h3>
            <h3>Apple Watch</h3>
            <h3>Accesories</h3>
        </div>
        <div className='p-5'>
            <p>Quick Links</p>
            <h5>Find a Store</h5>
        </div>
        <div className='p-5'>
            <p>Shop Special Stores</p>
            <h5>Education</h5>
            <h5>Business</h5>
        </div>
    </div>
  )
}

export default StoreExpansion