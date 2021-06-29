import React from 'react';
import HornedBeast from './HornedBeast';



class Main extends React.Component {
  render() {
    return (

      <div>

        {this.props.data.map((item, index) => {
          return (
            <HornedBeast
              title={item.title}
              description={item.description}
              url={item.imageURL}
              key={index}
              keyword={item.keyword}
              horns={item.horns}
              popUpTheCard={this.props.popUpTheCard} />
          )
        })}

      </div>
    )
  }
}

export default Main;