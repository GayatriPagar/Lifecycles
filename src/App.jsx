import React, { useState } from "react"

import Counter from './counter'

const App = () => {

const [mount, setMount] = useState(true)
const [unmount, setUnmount] = useState(true)
const [value, setValue] = useState(false)


const mountCounter = () => {
	setMount(!mount)
}

const unmountCounter = () => {
	setUnmount(!unmount)
}
const display = () => {
  
    setValue(true)
 }

return (
<>
<button
onClick = {mountCounter} disable={mount}>Mount Counter
</button>

<br />
<button
onClick = {unmountCounter} disable={unmount}>Unmount Counter
</button>

{/* <h1>Props in functional Component</h1> */}
{/* <display name={"Gayatri"} /> */}

 <Counter display={display} 
  value={value}
 />

</>

);

};

//ReactDOM.render(<App/>, document.getElementById('root'))
export default App;

