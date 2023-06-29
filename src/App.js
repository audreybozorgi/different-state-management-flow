import  './App.css';

function App() {
  return (
    <div className='container yellow'>
      <h2>Props and local state management</h2>
      <h4>Parent</h4>
      <ChildComponent />
    </div>
  );
}

export default App;

const ChildComponent = () => {
  return (
    <div 
      style={{
        width: '60%', 
        height: '60%', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white'
        }}
      >
      <h4>Child</h4>
      <GrandChildComponent />
    </div>
  )
}

const GrandChildComponent = () => {
  return (
    <div
    style={{
      width: '60%', 
      height: '60%', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'yellow',
      padding: '20px',
      }}
    >
      <h4>Grand Child</h4>
      <DescendantComponent bg={'#83f483'}/>
      <DescendantComponent bg={'#ff9898'}/>
    </div>
  )
}

const DescendantComponent = ({bg}) => {
  return (
    <div
    style={{
      width: '60%', 
      height: '60%', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: bg
      }}
    >
      <h4>Descendant Child</h4>
    </div>
  )
}
