import React from 'react'
import image from '../media/fifteen.jpeg'

function Fifteen() {
    (
    <div className="card text-center text-bg-dark justify-content-center ">
    <img src={image} height='100%' width='auto'  className="card-img w-auto " alt="..." />
    <div className="card-img-overlay w-auto justify-content-center">
      <h1 className="card-title pt-3 fw-medium" style={{ fontSize: `5vw`}}>iPhone 15</h1>
      <h2 className="card-text fw-light" style={{ fontSize: `3vw`}}>
        New Camera.New Design.Newphoria
        
      </h2>
      <div>
          <a style={{ fontSize: `1.5vw`}} className='px-2 link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-100-hover' href="/">Learn More<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></a>
<a style={{ fontSize: `1.5vw`}} className='px-2 link-offset-2 link-underline link-underline-opacity-100-hover link-underline-opacity-0' href="/">Buy<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></a>
        </div>
    </div>
  </div>
);
}

export default Fifteen