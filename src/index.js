import React from 'react'
import ReactDOM from 'react-dom'

import './css/index.css'
import LoremPixel from './img/lorempixel.jpg'

const App = () => {
  return (
    <div className="grid-container fluid">
      <img src={LoremPixel} alt="" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
