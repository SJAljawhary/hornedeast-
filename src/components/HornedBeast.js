import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        numberOfLikes: 0,

    }

}
increaseLikes = () => {
    this.setState({
      numberOfLikes: this.state.numberOfLikes + 1
    })
}

popUpTheCard = () =>{
    this.props.popUpTheCard(this.props.title)
}

    render() {
      return (
  
        
            <Card onClick = {this.popUpTheCard} className='cardStyle'>
                  
                  <Card.Body className='cardBody'>
                      <Card.Title className='cardTitle'>{this.props.title}</Card.Title>
                      <Card.Img  variant="top" src={this.props.url} alt={this.props.title} />
                      <Card.Text className='cardDesc'>
                          {this.props.description}
                      </Card.Text>
                      <Card.Text className='cardKey'>
                          {this.props.keyword}
                      </Card.Text>
                      <Card.Text className='horns'>
                          {this.props.horns}
                      </Card.Text>
                      <Card.Text className='vote'>
                      Vote for your favourite One !!
                      </Card.Text>
                      <Button className='buttonStyle' variant="warning" onClick={this.increaseLikes} >VOTE</Button>{' '}
                      <Card.Text className='likes'>
                      Likes Number : {this.state.numberOfLikes}
                      </Card.Text> 
                  </Card.Body>
              </Card>


      )
    }
  }
  export default HornedBeast;