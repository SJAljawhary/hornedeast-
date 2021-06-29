import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import data from './components/data.json';
import SelectedBeast from './components/SelectedBeast';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: data,
      show:false,
      selectedCard : {}
    }
  }
  popUpTheCard = title => {
    let select = data.find( card =>{
      if (card.title === title){
        return card ;
      }
    })

    this.setState({
      show : true,
      selectedCard : select
    })

  }
  closeCard = () =>{
    this.setState({show:false})
  }
  
  render() {
    return (
      <div className='container'>

     <Header />
     <Main data = {this.state.data} popUpTheCard={this.popUpTheCard} />
     <Footer />
     <SelectedBeast shown = {this.state.show} closeCard = {this.closeCard} selectedCard = {this.state.selectedCard} />

      </div>
    )
  }
}
export default App;