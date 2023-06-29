import React , { useState } from 'react'
import  './App.css';

function App() {
  const [state, setState] = useState(1)
  console.log('render parent');
  return (
    <div className='container yellow'>
      <h2>Props and local state management</h2>
      <h4>Parent</h4>
      <span>state is: <b>{state}</b></span>
      <button onClick={() => setState(prev => prev += 1)}>change state</button>
      <ChildComponent cbg='white' />
    </div>
  );
}

export default App;

const ChildComponent = ({cbg}) => {
  const [state, setState] = useState(1)
  console.log('render child');
  return (
    <div 
      style={{
        width: '60%', 
        height: '60%', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: cbg
        }}
      >
      <h4>Child</h4>
      <span>state is: <b>{state}</b></span>
      <button onClick={() => setState(prev => prev += 1)}>change state</button>

      <GrandChildComponent gbg='yellow' />
    </div>
  )
}

const GrandChildComponent = ({gbg}) => {
  const [state, setState] = useState(1)

  console.log('render grand child');
  return (
    <div
    style={{
      width: '60%', 
      height: '60%', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: gbg,
      padding: '20px',
      }}
    >
      <h4>Grand Child</h4>
      <span>state is: <b>{state}</b></span>
      <button onClick={() => setState(prev => prev += 1)}>change state</button>
      <DescendantComponent dbg={'#83f483'}/>
      <DescendantComponent dbg={'#ff9898'}/>
    </div>
  )
}

const DescendantComponent = ({dbg}) => {
  const [state, setState] = useState(1)
  console.log('render descendant');
  return (
    <div
    style={{
      width: '60%', 
      height: '60%', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: dbg
      }}
    >
      <span>state is: <b>{state}</b></span>
      <button onClick={() => setState(prev => prev += 1)}>change state</button>
      <h4>Descendant Child</h4>
    </div>
  )
}
