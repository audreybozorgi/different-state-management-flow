import { createContext, useContext, useState } from 'react'
import './App.css';

// my context configuration ___________________________________________
const AppContext = createContext() // ### create context Api using react API
const AppProvider = ({ children }) => { // ### create context Provider and its state using react API
  const [counter, setCounter] = useState(0)
  const [anotherCounter, setAnotherCounter] = useState(0)
  
  return (
    <AppContext.Provider value={[ counter, setCounter, anotherCounter, setAnotherCounter ]}>
      { children }
    </AppContext.Provider>
  )
}
const useMyContext = () => { // ### create context hook to get states in children
  const context = useContext(AppContext)

  if(!context) throw new Error('You are outside of context area')
  return context 
}

const Wrapper = () => { // ### entry root of drilling context state. configured for defining context scoop
  return (
    <AppProvider>
      <ContextAPI />
    </AppProvider>
  )
}
export default Wrapper;
// my context configuration ___________________________________________

//Parent component ___________________________________________
function ContextAPI() {
  // const [ counter, setCounter ] = useMyContext()
  // console.log('render parent');
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#eee', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h2>Context api</h2>
      <h4>Parent</h4>
      {/* <div>
        <button onClick={() => setCounter(prev => prev += 1)}>change state</button>
        <span style={{marginLeft: '5px'}}>root state is: <b>{counter}</b></span>
      </div> */}
      <ChildComponent cbg='lightblue' />
      <SiblingComponent cbg='lightblue' />
    </div>
  );
}

//Parent component ___________________________________________


//child component ___________________________________________
const SiblingComponent = ({cbg}) => {
  const [ anotherCounter, setAnotherCounter ] = useMyContext() //here we can see by changing another state. the Descendant children which is consuming state which has not been changed is updating, this means that when we update some state defined inside context api. that component get re render and all consumers of context api get re render, no matter if they are subscribing the updated state or another states they all will get re render.  
  console.log('render sibling');
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
        <button onClick={() => setAnotherCounter(prev => prev += 1)}>change another state</button>
        <span style={{marginLeft: '5px'}}>local state is: <b>{anotherCounter}</b></span>
      </div>
    </div>
  )
}
const ChildComponent = ({cbg}) => {
  const [state, setState] = useState(0)
  // const [ counter, setCounter ] = useMyContext()
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
      {/* <div>
        <button onClick={() => setCounter(prev => prev += 1)}>change state</button>
        <span style={{marginLeft: '5px'}}>root state is: <b>{counter}</b></span>
      </div> */}
      <GrandChildComponent 
        gbg='yellow' 
      />
    </div>
  )
}
//child component ___________________________________________

//grand child component ___________________________________________
const GrandChildComponent = ({gbg}) => {
  const [state, setState] = useState(0)
  // const [ counter, setCounter ] = useMyContext()

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
      {/* <div>
        <button onClick={() => setCounter(prev => prev += 1)}>change state</button>
        <span style={{marginLeft: '5px'}}>root state is: <b>{counter}</b></span>
      </div> */}
      <DescendantComponent 
        dbg={'#83f483'}
      />
      <DescendantComponent 
        dbg={'#ff9898'}
      />
    </div>
  )
}
//grand child component ___________________________________________

//Descendant component ___________________________________________

const DescendantComponent = ({dbg}) => {
  const [state, setState] = useState(0)
  const [ counter, setCounter ] = useMyContext()

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
        <button onClick={() => setState(prev => prev += 1)}>change local state</button>
        <span style={{marginLeft: '5px'}}>local state is: <b>{state}</b></span>
      </div>
      <div>
        <button onClick={() => setCounter(prev => prev += 1)}>change state</button>
        <span style={{marginLeft: '5px'}}>root state is: <b>{counter}</b></span>
      </div>
    </div>
  )
}
//Descendant component ___________________________________________
