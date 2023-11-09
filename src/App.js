import React from 'react'
import {render} from 'react-dom'
import Counter from './components'
import React, {Component} from 'react'
import './index.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Most Starred Repos</h1>
        </header>
        <Counter />
      </div>
    )
  }
}

render(
  <App />,

  document.getElementById('root'),
)
