import "./App.css";
import { create } from "zustand";

//creating store ________________________________________________
const myZustandStore = create(function (set) {
  return {
    counter: 0,
    setCounter: function () {
      return set(function (state) {
        return {
          increaseCounterAction: ++state.counter,
        };
      });
    },
  };
});
//creating store ________________________________________________

//Parent component ___________________________________________
function App3() {
  const counter = myZustandStore(function (state) {
    return state.counter;
  });
  const setCounter = myZustandStore(function (state) {
    return state.setCounter;
  });
  // console.log("render parent");

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#fbffce",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>zustand</h2>
      <h4>Parent</h4>
      <div>
        <button onClick={setCounter}>change state</button>
        <span style={{ marginLeft: "5px" }}>
          counter in zustand is: <b>{counter}</b>
        </span>
      </div>
      <ChildComponent cbg="lightblue" />
    </div>
  );
}

export default App3;
//Parent component ___________________________________________

//child component ___________________________________________
const ChildComponent = ({ cbg }) => {
  const counter = myZustandStore(function (state) {
    return state.counter;
  });
  const setCounter = myZustandStore(function (state) {
    return state.setCounter;
  });

  // console.log("render child");
  return (
    <div
      style={{
        width: "80%",
        height: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: cbg,
      }}
    >
      <h4>Child</h4>
      <div>
        <button onClick={setCounter}>change state</button>
        <span style={{ marginLeft: "5px" }}>
          counter in zustand is: <b>{counter}</b>
        </span>
      </div>
      <GrandChildComponent gbg="yellow" />
    </div>
  );
};
//child component ___________________________________________

//grand child component ___________________________________________
const GrandChildComponent = ({ gbg }) => {
  // console.log("render grand child");
  return (
    <div
      style={{
        width: "90%",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: gbg,
        padding: "20px",
      }}
    >
      <h4>Grand Child</h4>
      <DescendantComponent dbg={"#83f483"} />
      <DescendantComponent dbg={"#ff9898"} />
    </div>
  );
};
//grand child component ___________________________________________

//Descendant component ___________________________________________

const DescendantComponent = ({ dbg }) => {
  const counter = myZustandStore(function (state) {
    return state.counter;
  });
  const setCounter = myZustandStore(function (state) {
    return state.setCounter;
  });
  // console.log("render descendant");
  return (
    <div
      style={{
        width: "90%",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: dbg,
      }}
    >
      <div>
        <button onClick={setCounter}>change state</button>
        <span style={{ marginLeft: "5px" }}>
          counter in zustand is: <b>{counter}</b>
        </span>
      </div>
      <h4>Descendant Child</h4>
    </div>
  );
};
//Descendant component ___________________________________________
