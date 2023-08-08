import { useState } from 'react';
import{
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom';

const Sidebar = (props) => {
  const padding = { padding : 5 };
  return (
    <>
      <p>👇 Here's my Full Stack progress using <strong>{'{React}'}</strong> 👇</p>
      <Router>
        <Link style={ padding } to= "/home">Home</Link>
        <Link style={ padding } to= "/pageOne">Component States</Link>
        <Link style={ padding } to= "/pageTwo">Event Handlers</Link>
        <Link style={ padding } to= "/pageThree">Page Three</Link>

        <Routes>
        <Route path="/home" element={<Page num="Zero" />} />
        <Route path="/pageOne" element={<Page num="One" />} />
        <Route path="/pageTwo" element={<Page num="Two" />} />
        <Route path="/pageThree" element={<Page num="Three" />} />
        </Routes>
      </Router>
    </>
  )
}

const Hello = (props) => {
  const { name, age } = props;
  const year = new Date().getFullYear() - age;
  return (
    <>
    <p>Hello {name}! You are {age} years old, which means you were born in {year}</p>
    </>
  )
}

const Counter = () => {
  const [ counter, setCounter ] = useState(0);
  console.log("Counter is currently ", counter)
  const increase = () => {setCounter(counter + 1); console.log('increasing with counter value ', counter)};
  const decrease = () => setCounter(counter - 1);
  const reset = () => setCounter(0);
  
  return (
    <>
      <div>counter = {counter}</div>
      <button onClick={increase}>Plus</button>
      <button onClick={decrease}>Minus</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

const Page = ({num}) => {
  switch(num){
    case("One"):
      return  (
        <>
          <h1>Page {num}</h1>
          <Hello name="Francis" age={19}/>
        </>
      );
    case("Two"):
        return (
          <>
            <h1>Page {num}</h1>
            <Counter />
          </>
        );
    case("Three"):
        return (
          <>
            <h1>Page {num}</h1>
          </>
        );
    default:
      return (
          <>
            <h1>Home Page</h1>
            <p>👋 Welcome to Sync :)</p>
          </>
      );
  }
};


const App = () => {
  console.log("App updating.")
  return (
    <>
      <Sidebar />
    </>
  );
};

export default App;