import React from 'react'
import "./Card.css"
import Image from './banner1.jpg'
const Card = ({path,title,image}) => {
    if(path==null)
    return null;
    let baseImgUrl = '/images/';
  return (
    <>
        <div className="smalldiv">
            <img height="50px" width="100px" src={image ? baseImgUrl + image : 'https://dummyimage.com/100'}/>
            <h6 className=''>{title}</h6>
        </div>
    </>
  )
}

export default Card