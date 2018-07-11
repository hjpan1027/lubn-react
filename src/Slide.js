import React from 'react';
import './Slide.css';
import g0 from './images/gallery_0.jpg';
import g1 from './images/gallery_1.jpg';



const Slide=(props)=> {

  return (

    <div className= "item-slide" style={{backgroundImage: `url(${props.children}) `}}>

      <h1>{props.title}</h1>
      <h2>{props.content}</h2>

    </div>
  );
}


export default Slide;
