import React from 'react'
import pic from "../media/moon.png"
import "../styles/header.scss"


const Header = () => {
  return (
    <div>
        <div class="Description">
       <img  class ="moon1" src={pic} alt='' />
        <p><h1 class="temp">43</h1><p>&#xb0; C</p>|<p class="fahrenheit">&#xb0; F</p></p>
        <div>
            <ul class="listItems">
                <li>Precipitation:0%</li>
                <li>Humidity:16%</li>
                <li>Wind:8 km/hr</li>
            </ul>
        </div>


    </div>
    </div>
  )
}

export default Header