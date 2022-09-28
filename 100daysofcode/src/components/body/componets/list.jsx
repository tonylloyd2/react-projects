import React from "react";
import  ReactDOM  from "react-dom";

const name  = "lloyd";
const num = 8;
const currentDate = new Date().getFullYear();
const customstyles ={
  color: "red",
  fontSize : "40px"
}

function List() {
    return( 
    <div className='Main'>
         <section className='section-one'>
           <ul>
             <li style={{color: "red" }} >java {name +" "+(num+2)}</li>
             <li style={customstyles}>Python {Math.round(Math.random() * 100 , 1)}</li>
             <li>Ruby {Math.floor(Math.random() * 10)}</li>
           </ul>
         </section>
         <section className='section-2'>
           <p className='p-1'> created by {name}</p>
         </section>
      
    
     </div>);
}
export default List;