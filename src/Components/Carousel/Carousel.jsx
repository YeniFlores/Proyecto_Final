import React from "react";


function Carousel(){
    return(
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.shopify.com/s/files/1/0567/5873/0916/files/futuristic-clothing_1512x.jpg?v=1641816354" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cms-cdn.thesolesupplier.co.uk/2021/05/techwear11_w1160.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://ae01.alicdn.com/kf/H74f4468d66934b3983b23b50af8f9c0a0/QIUDYU-waterproof-hooded-jacket-techwear-multiple-pockets-techwear-ninjawear-darkwear-streetwear.jpg_Q90.jpg_.webp" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )

};

export default Carousel;