import { createContext, useState } from "react";

export interface CounterContextProps {
  counter: number;
  increment: () => void;
}

const initialState = 0;

const { Provider, Consumer: CounterConsumer } =
  createContext<CounterContextProps | any>(undefined);

const CounterProvider: React.FC = ({ children }) => {
  const [counter, setCounter] = useState(initialState);

  const increment = () => setCounter(counter + 1);

  return (
    <Provider
      value={{
        state: { counter },
        increment,
      }}
    >
      {children}
    </Provider>
  );
};

export { CounterProvider, CounterConsumer };
