import './App.css'
import React, { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState()

  const pop = new Audio(require("./pop.mp3"))

  let counter = newCounter(count)

  useEffect(() => {
    requestNewCount(setCount)
  }, [])

  useEffect(() => {
    counter = newCounter(count)
  }, [count])

  return (
    <div className="App">
      <div className="counter-incrementor-container">
        <button
          onClick={() => {
            requestNewCount(setCount, 'dec')
            pop.play()
          }}
        >
          -1
        </button>

        {counter}

        <button
          onClick={() => {
            requestNewCount(setCount, 'inc')
            pop.play()
          }}
        >
          +1
        </button>
      </div>

      <section className="bottom-container">
        <div className="form-container">
          <button
            className="submit"
            onClick={() => {
              if (!isNaN(parseFloat(input))) {
                requestNewCount(setCount, 'set', 'newValue=' + input)
                pop.play()
              }
            }}
          >
            SET
          </button>

          <input
            type="number"
            placeholder="New Count..."
            onChange={(evt) => {
              if (isNaN(parseFloat(evt.target.value))) {
                setInput('Empty')
              } else {
                setInput(evt.target.value)
              }
            }}
          ></input>
        </div>

        <button
          className="danger"
          onClick={() => {
            requestNewCount(setCount, 'reset')
            pop.play()
          }}
        >
          RESET
        </button>
      </section>
    </div>
  )
}

async function requestNewCount(setState, path = '', params = '') {
  path = (path === ""? path : "/" + path)
  params = (params === ""? params : "?" + params)

  let url = '/count' + path + params
  console.log(url)

  fetch(url, {
    method: 'POST',
  })
    .then((res) => res.json())
    .then((count) => {setState(count.Count)
    console.log(count.Count)})
}

function newCounter(count) {
  return (
    <h1 key={count} className="counter">
      {parseFloat(count).toLocaleString('en')}
    </h1>
  )
}

export default App
