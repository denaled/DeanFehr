import React from 'react';
import vacationSpots from './vacationData'
import Spots from './spots'

function App() {
  const placeComponents = vacationSpots.map(place => <Spots 
    key={place.id}
    placeSpot ={place.place} 
    priceSpot ={place.price} 
    timeSpot = {place.timeToGo}/>)
  return (
    <div>
      {placeComponents}
    </div>
  );
}

export default App;
