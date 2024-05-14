import { createContext, useContext, useState } from "react";

export interface CounterContextProps {
  counter: number;
  increment: () => void;
}

const initialState = 0;

const CounterContext = createContext<CounterContextProps | undefined>(undefined);
const { Provider, Consumer: CounterConsumer } = CounterContext;

const CounterProvider: React.FC = ({ children }) => {
  const [counter, setCounter] = useState(initialState);

  const increment = () => setCounter(counter + 1);

  return (
    <Provider
      value={
        {
        counter,
        increment,
      }
    }
    >
      {children}
    </Provider>
  );
};

const useCount = () => {
  const context = useContext(CounterContext)

  if(context == undefined) {
    throw Error('useCount must be used within CounterContext')
  }

  return context
}

export { useCount, CounterProvider, CounterConsumer, CounterContext };
