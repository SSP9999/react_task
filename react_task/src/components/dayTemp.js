import React from 'react'

import "../styles/dayTemp.scss"

const DayTemp = ({data}) => {
  return (
    <div>
       <div class="days">
      
      <div class="dailyReport">
         
          <p className='day'>{data.day}</p>
          <img src={data.image}  class="singleMoon" alt=""/>
          <div class="dayTemp">
              <p>{data.maxTemp} &#xb0;</p>
              <p style={{'color':'grey'}}>{data.minTemp} &#xb0;</p>
          </div>
         
      </div>
     

      </div>
    </div>
  )
}

export default DayTemp