
function Counter({ count, increment, decrement }) {
  return (
    <div style={{border:'solid 2px', borderColor:'blue'}}>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;