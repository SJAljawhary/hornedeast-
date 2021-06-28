import React from 'react';
import HornedBeast from './HornedBeast';
import data from './assests/data.json';


class Main extends React.Component {
    render() {
      return (
  
         <div>

{data.map((item,index)=>{
                   return(
                   <HornedBeast  title={item.title} description={item.description} url={item.imageURL} key={index}
                   keyword={item.keyword} horns={item.horns} />
                   )
               })}

</div>
)
}
}

export default Main;