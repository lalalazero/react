const container = document.querySelector('.container');

function App() {
  const [count, setCount] = React.useState(1)

  const handleClick = () => {
    debugger
    setCount(count+1)
  }

  return (
    <div>
      hello world
      {/* <p>{count}</p> */}
      {/* <button onClick={handleClick}>+1</button> */}
    </div>
  );
}

debugger
const root = ReactDOM.createRoot(container);

root.render(<App />);
