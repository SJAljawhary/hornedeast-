import React from 'react';
import Modal  from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';


class SelectedBeast extends React.Component{
    render (){
      return(

        <Modal show = {this.props.shown} >

        <Modal.Header>
         {this.props.selectedCard.title}
        </Modal.Header>
        <Modal.Body>
            <img style = {{width :'300px'}} src = {this.props.selectedCard.imageURL} alt = {this.props.selectedCard.imageURL} ></img>
            <p> {this.props.selectedCard.description}</p>
        </Modal.Body>
        <Modal.Footer>    
          <Button variant="primary" onClick={this.props.closeCard}>
          CLOSE</Button>
        </Modal.Footer>
        </Modal>

      )
    }
}
export default SelectedBeast;