import React from 'react'
import serum from './images/orange serum.png' 
import pink_drink from './images/pink drink.png'
import green_cream from './images/green cream.png'
import cleanser from './images/cleanser.png'
import cleansing_cream from './images/cleansing cream.png'
import kylie from './images/kylie skin.png'
import gel_cream from './images/gel cream.png'
import vitamin_C from './images/vitamin c.png'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';


export default function TopPicks() {
    const navigate = useNavigate();
  return (
    <div className='topPicks'>
    <div>
        <h2>Our Finest Picks</h2>
        <h3>Let’s Take A Glimpse into Our Skincare Collection</h3>
    </div>
    <div className='top_items'>
        <div className='top_image'>
            <img src={serum} alt=''></img>
        </div>
        <div className='top_image'>
            <img src={pink_drink} alt=''></img>
        </div>
        <div className='top_image'>
            <img src={green_cream} alt=''></img>
        </div>
        <div className='top_image'>
            <img src={cleansing_cream} alt=''></img>
        </div>
        <div className='top_image'>
            <img src={cleanser} alt=''></img>
        </div>
        <div className='top_image'>
            <img src={gel_cream} alt=''></img>
        </div>
        <div className='top_image'>
            <img src={kylie} alt=''></img>
        </div>
        <div className='top_image'>
            <img src={vitamin_C} alt=''></img>
        </div>

    </div>
    <Link to="/catalog">
    <button className='mainbutton'>Shop More </button>
    </Link>
    </div>
  )
}
