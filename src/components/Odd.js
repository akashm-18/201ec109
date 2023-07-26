import React from 'react'

function Odd() {


  function getOdd () {
    fetch('http://20.244.56.144/numbers/odd')
    .then((res)=>res.text())
    .then((data) => document.querySelector('#output').innerHTML = data )
    .catch((err) => console.log(err))
  }

  return (
    <div>
    <button onClick={getOdd} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Odd Number</button>
    <div id="output"></div>
  </div>
  )
}

export default Odd
