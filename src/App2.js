import { useState } from 'react'
import './App.css';

function App2() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#eee', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      App 2 with context api
      <ChildComponent cbg='lightblue' />
    </div>
  );
}

export default App2;

const ChildComponent = ({cbg}) => {
  const [state, setState] = useState(1)
  console.log('render child');
  return (
    <div 
      style={{
        width: '80%', 
        height: '80%', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: cbg
        }}
      >
      <h4>Child</h4>
      <div>
        <button onClick={() => setState(prev => prev += 1)}>change state</button>
        <span style={{marginLeft: '5px'}}>local state is: <b>{state}</b></span>
      </div>
      {/* <span>root state is: <b>{rootState}</b></span> */}
      <GrandChildComponent 
        gbg='yellow' 
      />
    </div>
  )
}

const GrandChildComponent = ({gbg}) => {
  const [state, setState] = useState(1)

  console.log('render grand child');
  return (
    <div
    style={{
      width: '90%', 
      height: '90%', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: gbg,
      padding: '20px',
      }}
    >
      <h4>Grand Child</h4>
      <div>
        <button onClick={() => setState(prev => prev += 1)}>change state</button>
        <span style={{marginLeft: '5px'}}> local state is: <b>{state}</b></span>
      </div>
      <DescendantComponent 
        dbg={'#83f483'}
      />
      <DescendantComponent 
        dbg={'#ff9898'}
      />
    </div>
  )
}

const DescendantComponent = ({dbg}) => {
  const [state, setState] = useState(0)

  console.log('render descendant');
  return (
    <div
    style={{
      width: '90%', 
      height: '90%', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: dbg
      }}
    >
      <h4>Descendant Child</h4>
      <div>
        {/* <button onClick={() => setState(prev => prev += 1)}>change local state</button> */}
        <span style={{marginLeft: '5px'}}>local state is: <b>{state}</b></span>
      </div>
      <div>
        {/* <button onClick={() => setRootState(prev => prev += 1)}>change root state</button>
        <span style={{marginLeft: '5px'}}>root state is: <b>{rootState}</b></span> */}
      </div>
    </div>
  )
}
