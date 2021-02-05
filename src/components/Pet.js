import React from 'react'

class Pet extends React.Component {

  adoptedPetOption = () => {
      if (this.props.pet.isAdopted){
        return <button className="ui disabled button">Already adopted</button>
      } else {
          return <button onClick={(event) => this.handleClick(event)} className="ui primary button">Adopt pet</button>  
      }
  } 
  handleClick = (event) => {
    const petId = this.props.pet.id
    this.props.onAdoptPet(petId)
    console.log("CLICKED!!!")
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/* '♀' OR '♂' */}
            { this.props.pet.gender === 'male' ? '♂' : '♀' }
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {/* <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button> */}
          {this.adoptedPetOption()}
        </div>
      </div>
    )
  }
}

export default Pet
