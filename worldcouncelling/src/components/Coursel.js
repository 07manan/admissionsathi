import React from "react";

export default function Coursel() {
  return (
    <div >
      {/* className="container " row */}
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade   "
        data-bs-ride="carousel"
      > 
{/*     col-lg-8 col-sm-12 col-12 mt-4 ml-4 */ }
      
        <div className="carousel-inner  ">
          <div className="carousel-item ">
            <img src="c4new.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item active">
            <img src="c333.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="c5.jpg" className="d-block w-100 " alt="..." />
          </div>
          <div className="carousel-item">
            <img src="c6.jpg" className="d-block w-100 " alt="..." />
          </div>
          <div className="carousel-item">
            <img src="c7.jpg" className="d-block w-100 " alt="..." />
          </div>
        </div>
       
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>

        {/* <div class="col-md-6 col-sm-12 col-12"></div> */}
        </div>
        
      </div>
    
  );
}
