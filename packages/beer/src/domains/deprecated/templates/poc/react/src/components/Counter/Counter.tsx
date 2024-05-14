import {useCount } from "../../contexts/CounterContext";

const Counter: React.FC = () => {
  const state = useCount();

  return (
    <>
      <p>Counter: {state.counter}</p>
      <button onClick={state.increment}>increment</button>
    </>
  );
};

export default Counter;
