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
  onChangeType = event => {
    this.setState({
      filters: {
        type: event.target.value 
      }
    })
  } 
  getUrl = () => {
    let url
    const type = this.state.filters.type 
    
    if (type === 'micropig'){
      url = '/api/pets?type=micropig'
    } else if (type === 'cat'){
      url = '/api/pets?type=cat'
    } else if (type === 'dog'){
      url = '/api/pets?type=dog'
    } else {
      url = '/api/pets'
    }
    return url 
  }
  onFindPetsClick = () => {
    // fetch data here when called 
   
    fetch(this.getUrl())
      .then(resp => resp.json())
      .then(petsObj => {
        this.setState({pets: petsObj})
      })
  } 
  onAdoptPet = (id) => {
     
      // this.state.pets.find(pet => pet.id == id).isAdopted = true
      const pet = this.state.pets.find(pet => pet.id == id)
      pet.isAdopted = true 
      this.setState({pets: this.state.pets})
      
      
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                  onchangeType={this.onChangeType}
                  onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
