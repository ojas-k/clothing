import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  
import React, { Component } from 'react' ; 


import './slider.styles.css';

class Sliderr extends React.Component {

  

    render() {  
        var settings = {  
          dots: true,  
          infinite: true,  
          speed: 700,  
          centerMode: true,  
          slidesToShow: 1,  
          slidesToScroll: 1  
          
          }; 

          return (  
            <div className='container'>  

           
            <Slider {...settings} >  
              <div className="wdt">   
              <img  className="img" src= {'https://i.ibb.co/7Y6ySz6/clark-tibbs-oq-Stl2-L5ox-I-unsplash.jpg'} className="img"/>  
              </div>  
              <div className="wdt">  
              <img  src= {'https://i.ibb.co/4FCrKWf/pexels-anna-tarazevich-5598297.jpg'} className="img"/>  
              </div>  
              <div className="wdt">  
              <img  className="img" src= {'https://i.ibb.co/P9sxLXQ/randalyn-hill-Z1-HXJQ2a-WIA-unsplash.jpg'} className="img"/>  
              </div>  
              <div className="wdt">  
              <img  className="img" src= {'https://i.ibb.co/bbxyTH7/dayne-topkin-ZM4-Ty-Oggk8-Y-unsplash.jpg'} className="img"/>  
              </div >  
              
            </Slider>  
            </div>  
          );  
        }  
}  
  
export default Sliderr;
