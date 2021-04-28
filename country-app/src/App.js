import { useState } from 'react';
import './App.css';
import Countries from './components/Countries';
import data from './data'
function App() {
  // console.log(data)
  const [Countryname, setCountryname] = useState(data);
  
  return (
    <div className="App">
      <Countries Countryname={Countryname}/>
    </div>
  );
}

export default App;
