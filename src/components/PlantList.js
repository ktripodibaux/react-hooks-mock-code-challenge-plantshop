import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

const plantCardList = plants.map(plant=> {
  return <PlantCard key={plant.id ? plant.id : plant.name} plant={plant} />
})

  return (
    <ul className="cards">{plantCardList}</ul>
  );
}

export default PlantList;
