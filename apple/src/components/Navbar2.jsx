import React from 'react'

function Navbar2() {
  return (
    <div className='d-flex justify-content-center p-1 bg-body-tertiary'>
<nav className="navbar navbar-expand-lg p-0 bg-body-tertiary">
       <a className="nav-link navbar-brand pb-1" href="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" width='12px' alt="logo" />
    </a>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">   
    <ul className="navbar-nav fs-6 me-auto mb-2 mb-lg-0">
    
    <li className="px-2">
          <a className="nav-link fw-lighter" href="/">Store</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link fw-lighter" href="/">Mac</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link fw-lighter" href="/">iPad</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link fw-lighter" href="/">iPhone</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link fw-lighter" href="/">Watch</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link fw-lighter" href="/">AirPods</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link fw-lighter" href="/">TV & Home</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link fw-lighter" href="/">Entertainment</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link fw-lighter" href="/">Accesories</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link fw-lighter" href="/">Support</a>
        </li>
       
        
  </ul>
    </div>
    
    <ul className="navbar-nav fs-6 me-auto mb-2 d-flex mb-lg-0">

      <div className='d-flex'>
      <li className="nav-item px-2">
          <a className="nav-link" href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
          </a>
        </li>
        <li className='nav-item px-2'>
            <a href="/" className='nav-link'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg>
            </a>
        </li>
      </div>
    
      
        
</ul>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-view-list" viewBox="0 0 16 16">
  <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z"/>
</svg> </button>
       </nav>
   
       
       </div>
  )
}

export default Navbar2