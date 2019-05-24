import React from 'react';
//import '../imageSlider.css';






const ImageSlider = ({ images, firstImage }) => {
    console.log(images);

    console.log(firstImage);

    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel" >
                <div className="carousel-inner" data-interval="1000">
                    <div key={firstImage.id} className="carousel-item active">
                        <img id={firstImage.id} className="d-block w-100 imageHeight" style = {{backgroundImage: `url("${firstImage.src}")`}}></img>
                        <div className="carousel-caption">
                            <h5>{firstImage.text}</h5>
                        </div>
                    </div>
                    {images.map(
                        image => 
                    <div key={image.id} className="carousel-item">
                        <img id={image.id} className="d-block w-100 imageHeight" style = {{backgroundImage: `url("${image.src}")`}}></img>
                        <div className="carousel-caption">
                            <h5>{image.text}</h5>
                        </div>
                    </div>) }  
                </div>                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
        </div>



        </div>
        
    )
}


export default ImageSlider;







