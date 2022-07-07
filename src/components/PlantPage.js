import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [plantSearch, setPlantSearch] = useState(undefined)

  useEffect(()=>{
    fetch('http://localhost:4000/plants').then(res=>res.json()).then(data=>{
      setPlants(data)
    })
  },[])

  function handleSubmit(event) {
    event.preventDefault()
    const newPlant = {
      name: event.target[0].value,
      image: event.target[1].value,
      price: event.target[2].value
    }
    fetch('http://localhost:4000/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlant)
    })
    setPlants([...plants, newPlant])
  }

  function handleSearch(input){
    const search = plants.filter(plant=>{
      if (plant.name.toLowerCase().includes(input)){
        return plant
      }
    })
    setPlantSearch(search)
  }



  return (
    <main>
      <NewPlantForm handleSubmit={handleSubmit}/>
      <Search search={handleSearch}/>
      <PlantList plants={plantSearch? plantSearch : plants}/>
    </main>
  );
}

export default PlantPage;
