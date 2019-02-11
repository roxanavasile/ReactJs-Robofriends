import React from 'react';

//introducing children; scroll can use children to render them
const Scroll = (props) => {
   return(
      <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
         {props.children}
      </div>
   )

}

export default Scroll;
