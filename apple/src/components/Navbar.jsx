import React from 'react'

function Navbar() {
  return (
    <div className=''>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid justify-content-center">
  <a class="nav-link " href="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" width='15px' alt="logo" />
    </a>
   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav d-flex me-auto mb-2 mb-lg-0">
       
        
        <li class="nav-item px-3">
          <a class="nav-link fw-light" href="/">Store</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link fw-light" href="/">Mac</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link fw-light" href="/">iPad</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link fw-light" href="/">iPhone</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link fw-light" href="/">Watch</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link fw-light" href="/">AirPods</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link fw-light" href="/">TV & Home</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link fw-light" href="/">Entertainment</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link fw-light" href="/">Accesories</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link fw-light" href="/">Support</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link" href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
          </a>
        </li>

        <li className='nav-item px-3'>
            <a href="/" className='nav-link'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg>
            </a>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar