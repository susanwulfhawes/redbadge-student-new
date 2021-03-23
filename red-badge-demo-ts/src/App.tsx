import React from "react";
import PropsExample from './components/PropsExample'
import PropsMapping from './components/PropsMapping'

function App() {
  const visitedPlaces = ['Maui', 'Munich', 'Tokyo', 'County Shannon', 'London']
  return (
  <div>
    <PropsExample name="Tom" business="MySpace"/>
    <PropsMapping visited={visitedPlaces}/>
  </div>
  )
  };

export default App;
