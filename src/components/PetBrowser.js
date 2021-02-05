import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  listOfPets = () => {
    return this.props.pets.map((pet, index) => {
      
      return <Pet onAdoptPet={this.props.onAdoptPet} key={index} pet={pet}/>
    })
  }
  
  render() {
    
    return <div className="ui cards">
              {this.listOfPets()}
          </div>
  }
}

export default PetBrowser
