import "../styles/graph.scss";


import {Line } from "react-chartjs-2";
import Chart from "chart.js/auto"

export default  () => {
 const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display:false
      },
    },
      maintainAspectRatio: false,
      scales: {
        x: {
           grid: {
              display: false
           },
        },
        y: {
           grid: {
              display: false
           },
           display: false

        }
   }
  };
  return (
    <div className="lineContainer">
     <div className='graphHeader'>
      <p className='active'>Temperature </p>|
      <p>Precipitation </p>|
      <p>Wind</p>
    </div>
  <Line
  datasetIdKey='id'
  data={{
    labels: ['7pm', '10pm', '1am','4am','7am','10am','1pm','4pm'],
    datasets: [{
      label: 'Max Temperature',
      data: [42,38,34,32,31,35,40,43],
      fill: false,
      borderColor: 'rgb(255, 255, 0)',
      backgroundColor:'rgba(255, 255, 0,0.3)',
      tension: .3,
      fill:true
    }],
  }}
  options={options}
/>
    </div>
  );
};