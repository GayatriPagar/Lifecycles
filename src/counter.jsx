import React, { useState, useEffect} from "react";

const Counter = (props) => {
const [counter, setCounter] = useState(0);


  const increment = () => {
    setCounter(counter+1)
  }

  const decrement = () => {
    setCounter(counter-2)
  }
   
 

  


useEffect(() => {

       console.log('Component Did Mount')
       console.log('-----------------')
});
console.log(props)
   
   


    return( 
    <>
      <button 
         onClick = {increment} >Increment
          </button>
      <br />
      <button 
          onClick = {decrement} > decrement
          </button>
    <br />
      <button 
        onClick = {props.display} > display
     </button> 

     {props.value ? <div>Hello</div> : null }
 </>
    );
    }; 


 export default Counter;
  /*componentDidUpdate(prevProps, prevState, snapshot){
    console.log('Component did update')
    console.log('-----------------')
   }*/


 
