import { CounterConsumer } from "../../contexts/CounterContext";

const Counter: React.FC = () => {
  return (
    <CounterConsumer>
      {(counter) => {
        const { state, increment } = counter;

        return (
          <>
            <p>
              Counter: <span>{state.counter}</span>
            </p>
            <button onClick={increment}>increment</button>
          </>
        );
      }}
    </CounterConsumer>
  );
};

export default Counter;
