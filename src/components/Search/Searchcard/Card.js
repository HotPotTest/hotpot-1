import React from 'react'
import "./Card.css"

const Card = ({path,title}) => {
    if(path==null)
    return null;
    let baseImgUrl = 'imagePath';

  return (
    <>
        <div className="smalldiv">
            <img height="70px" width="140px" src={`${baseImgUrl+path}`}/>
            <h1>{title}</h1>
        </div>
    </>
  )
}

export default Card