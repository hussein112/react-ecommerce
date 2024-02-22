import React from 'react'
import "./Offers.css"
import execlusive_image from "../assets/exclusive_image.png";


export const Offers = () => {
  return (
    <div className="offers">
        <div className="offers-left">
            <h1>Execlusive</h1>
            <h1>Offers for You</h1>
            <p>Only best sellers products</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={execlusive_image} alt="" />
        </div>
    </div>
  )
}
