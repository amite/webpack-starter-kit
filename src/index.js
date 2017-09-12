import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

const App = () => {
  return (
    <div className="grid-container fluid">
      <div className="grid-x grid-margin-x">
        <div className="cell small-4">cell</div>
        <div className="cell small-4">cell</div>
        <div className="cell small-4">cell</div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
