import React from 'react';


class HornedBeast extends React.Component {
    render() {
      return (
  
         <div className='animalData'> 

               <h2 className='animalName'> {this.props.title} </h2>

               <img className='images' src={this.props.imageURL} alt={this.props.imageURL} ></img>
               
               <p className='description'>{this.props.description}</p>

             </div>

      )
    }
  }
  export default HornedBeast;