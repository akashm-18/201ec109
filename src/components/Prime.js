import React from 'react'

function Prime() {

  function getPrime () {
    fetch('http://20.244.56.144/numbers/primes')
    .then((res)=>res.text())
    .then((data) => document.querySelector('#output').innerHTML = data )
    .catch((err) => console.log(err))
  }

  return (
    <div>
    <button onClick={getPrime}  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Prime Number</button>
    <div id="output"></div>
  </div>
  )
}

export default Prime
