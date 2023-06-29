import  './App.css';

function App() {
  return (
    <div className='container yellow'>
      App 1 with props and local state management
      <Child1Component />
    </div>
  );
}

export default App;

const Child1Component = () => {
  return (
    <div>
      im child
    </div>
  )
}
