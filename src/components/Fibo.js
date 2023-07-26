import React from 'react'

function Fibo() {
  
function getFibo () {
  fetch('http://20.244.56.144/numbers/fibo')
  .then((res)=>res.text())
  .then((data) => document.querySelector('#output').innerHTML = data )
  .catch((err) => console.log(err))
}
   
  return (
    <div>
      <button onClick={getFibo} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Fibo Number</button>
      <div id="output"></div>
    </div>
  )
}

export default Fibo
