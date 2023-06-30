import { createContext, useContext, useState } from 'react'
import './App.css';

// my context configuration ___________________________________________
const AppContext = createContext() // ### create context Api using react API
const AppProvider = ({ children }) => { // ### create context Provider and its state using react API
  const [counter, setCounter] = useState(0)
  
  return (
    <AppContext.Provider value={[ counter, setCounter ]}>
      { children }
    </AppContext.Provider>
  )
}
const useMyContext = () => { // ### create context hook to get states in children
  const context = useContext(AppContext)

  if(!context) throw new Error('You are outside of context area')
  return context 
}

const Wrapper = () => { // ### entry root of drilling context state
  return (
    <AppProvider>
      <App2 />
    </AppProvider>
  )
}
export default Wrapper;
// my context configuration ___________________________________________


//Parent component ___________________________________________
function App2() {
  const [ counter, setCounter ] = useMyContext()

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#eee', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      App 2 with context api
      <div>
        <button onClick={() => setCounter(prev => prev += 1)}>change state</button>
        <span style={{marginLeft: '5px'}}>root state is: <b>{counter}</b></span>
      </div>
      <ChildComponent cbg='lightblue' />
    </div>
  );
}

//Parent component ___________________________________________


//child component ___________________________________________
const ChildComponent = ({cbg}) => {
  const [state, setState] = useState(1)
  const [ counter, setCounter ] = useMyContext()
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
      <div>
        <button onClick={() => setCounter(prev => prev += 1)}>change state</button>
        <span style={{marginLeft: '5px'}}>root state is: <b>{counter}</b></span>
      </div>
      <GrandChildComponent 
        gbg='yellow' 
      />
    </div>
  )
}
//child component ___________________________________________

//grand child component ___________________________________________
const GrandChildComponent = ({gbg}) => {
  const [state, setState] = useState(1)
  const [ counter, setCounter ] = useMyContext()

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
      <div>
        <button onClick={() => setCounter(prev => prev += 1)}>change state</button>
        <span style={{marginLeft: '5px'}}>root state is: <b>{counter}</b></span>
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
