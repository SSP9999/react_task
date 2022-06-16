import Header from "./components/header";
import Graph from "./components/graph";
import DayTemp from "./components/dayTemp";
import pic from "./media/moon.png";
import moon2 from "./media/moon2.png";
import moonempty from "./media/moonempty.png";
import "./App.css"
import "./styles/dayTemp.scss"
function App() {
  const data = [
    {
      day: "MON",
      image: pic,
      maxTemp: 43,
      minTemp: 40
    },
    {
      day: "TUE",
      image: moon2,
      maxTemp: 43,
      minTemp: 40
    },
    {
      day: "WED",
      image: moon2,
      maxTemp: 43,
      minTemp: 40
    },
    {
      day: "THU",
      image: moonempty,
      maxTemp: 43,
      minTemp: 40
    },
    {
      day: "FRI",
      image: moonempty,
      maxTemp: 43,
      minTemp: 40
    },
    {
      day: "SAT",
      image: moon2,
      maxTemp: 43,
      minTemp: 40
    },
    {
      day: "SUN",
      image: moonempty,
      maxTemp: 43,
      minTemp: 40
    },
  ]
  return (
    <div className="App">
    <Header/>
     <Graph/>
    <div className="grid">

       {data.map(d => <DayTemp key={1} data={d}/>) }

    </div> 
      
    </div>
  );
}

export default App;
