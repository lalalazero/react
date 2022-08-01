const container = document.querySelector('.container');

function App() {
  const [count, setCount] = React.useState(1)

  const handleClick = () => setCount(count+1)

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  );
}

const root = ReactDOM.createRoot(container);

root.render(<App />);
