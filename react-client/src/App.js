import './App.css'
import React, { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

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
      {counter}

      <section className="button-container">
        <button
          onClick={() => {
            changeCount(setCount, "dec")
          }}
        >
          -1
        </button>

        <button className='danger'
          onClick={() => {
            changeCount(setCount, "reset")
          }}
        >
          RESET
        </button>

        <button
          onClick={() => {
            changeCount(setCount, "inc")
          }}
        >
          +1
        </button>
      </section>
    </div>
  )
}

async function changeCount(setState, path) {
  fetch('/count/' + path, {
    method: 'POST',
  })
    .then((res) => res.json())
    .then((count) => setState(count.Count))
}

function newCounter(count)  {
  return (<h1 key={count} className="counter">{(parseFloat(count).toLocaleString("en"))}</h1>)
}

export default App
