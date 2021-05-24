import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  //My Code for filtering Pets
  const handleSelection = pet => {
    const thisSelected = selectedpets.includes(pet);
   
‍
‍
    const newSelections = thisSelected
    ? selectedpets.filter(currentpet => currentpet !== pet)
    : [...selectedpets, pet];
  setSelectedpets(newSelections);};
return (
‍
  <div classname="App"></div>
‍
‍
    <filter label="Select a Pet" onapply="{()" ==""> alert(selectedPets)}></filter>
‍
      <div classname="pets-list"></div>
‍
        {pets.map((pet, index) => {
          const thisSelected = selectedPets.includes(pet);
          return (
            <label key="{index}"></label>
‍
              
                type="checkbox"
                checked={thisSelected}
                onChange={() => {‍
                  handleSelection(pet);
                }}
              />
‍

              <span classname="ml-2 text-base text-gray-500 font-heading"></span>
‍
              {pet}
  //end code
‍
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters />
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
