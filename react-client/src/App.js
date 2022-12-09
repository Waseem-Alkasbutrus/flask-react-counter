import './App.css'
import React, { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState()
  const [counterElem, setCounterElem] = useState(
    newCounter(count, 'new-counter'),
  )

  const pop = new Audio(require('./pop.mp3'))

  useEffect(() => {
    makeRequest(setCount)
  }, [])

  useEffect(() => {
    setCounterElem(newCounter(count))
    pop.play()
  }, [count])

  return (
    <div className="App">
      <div className="counter-incrementor-container">
        <button
          onClick={() => {
            makeRequest(setCount, 'dec')
          }}
        >
          -1
        </button>

        {counterElem}

        <button
          onClick={() => {
            makeRequest(setCount, 'inc')
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
                makeRequest(setCount, 'set', 'newValue=' + input)
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
            makeRequest(setCount, 'reset')
          }}
        >
          RESET
        </button>
      </section>
    </div>
  )
}

async function makeRequest(setState, path = '', params = '') {
  path = path === '' ? path : '/' + path
  params = params === '' ? params : '?' + params

  let url = '/count' + path + params
  console.log(url)

  fetch(url, {
    method: 'POST',
  })
    .then((res) => res.json())
    .then((count) => {
      setState(count.Count)
      console.log(count.Count)
    })
}

function newCounter(count, anim = 'update-counter') {
  return (
    <h1 key={count} className={'counter ' + anim}>
      {parseFloat(count).toLocaleString('en')}
    </h1>
  )
}

export default App
