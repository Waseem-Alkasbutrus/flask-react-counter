import './App.css'
import React, { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState()

  useEffect(() => {
    fetch('/count')
      .then((res) => res.json())
      .then((count) => setCount(count.Count))
  }, [])

  useEffect(() => {
    counter = newCounter(count)
  }, [count])

  let counter = newCounter(count)

  return (
    <div className="App">
      <div className='counter-incrementor-container'>
        <button
          onClick={() => {
            requestNewCount(setCount, 'dec')
          }}
        >
          -1
        </button>

        {counter}

        <button
          onClick={() => {
            requestNewCount(setCount, 'inc')
          }}
        >
          +1
        </button>
      </div>

      <section className="bottom-container">
        <div className='form-container'>
          <button
            className="submit"
            onClick={() => {
              if (input != "") {
                requestNewCount(setCount, 'set', "newValue=" + input)
              }
            }}
          >
            SET
          </button>
          
          <input type="number" placeholder='New Count...' onChange={(evt) => setInput(evt.target.value)}></input>
        </div>


        <button
          className="danger"
          onClick={() => {
            requestNewCount(setCount, 'reset')
          }}
        >
          RESET
        </button>
      </section>
    </div>
  )
}

async function requestNewCount(setState, path, query="") {
  fetch('/count/' + path + "?" + query, {
    method: 'POST',
  })
    .then((res) => res.json())
    .then((count) => setState(count.Count))
}

function newCounter(count) {
  return (
    <h1 key={count} className="counter">
      {parseFloat(count).toLocaleString('en')}
    </h1>
  )
}

export default App
