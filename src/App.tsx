import React from 'react'

import Hello from './Components/Hello';

function App() {

  let isAdmin = false;
  return (
    <div>{
      isAdmin ? <Hello/> : <h1> hello user</h1>
      }</div>
  )
}

export default App

