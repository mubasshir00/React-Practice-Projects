import { useEffect, useState } from 'react';
import './App.css';
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) =>{
    const newTour = tours.filter((tour)=>tour.id!==id)
    setTours(newTour)
  }

  const fetchTours = async() =>{
    setLoading(true)
    try{
      const response = await fetch(url)
      const tours = await response.json();
      setLoading(false)
      setTours(tours)
    }
    catch(error){
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])
  // console.log(tours)
  if(tours.length==0){
    return(
      <div>
        <h2>No Tours Left</h2>
        <button className="btn" onClick={()=>fetchTours()}>
          refresh
        </button>
      </div>
    )
  }
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}/>
    </div>
  );
}

export default App;
