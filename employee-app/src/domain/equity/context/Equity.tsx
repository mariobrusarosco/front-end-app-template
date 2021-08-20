import { createContext, useContext, useState } from "react";

export interface EquityContextProps {
  state: number;
  handle: () => void;
}

const initialState = 0;

const EquityContext = createContext<EquityContextProps | undefined>(undefined);
const { Provider, Consumer: EquityConsumer } = EquityContext;

const EquityProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const handle = () => setState(state + 1);
s
  return (
    <Provider
      value=}
    >
      {children}
    </Provider>
  );
};

const useEquity = () => {
  const context = useContext(EquityContext)

  if(context == undefined) {
    throw Error('useEquity must be used within EquityContext')
  }

  return context
}

export { useEquity, EquityProvider, EquityConsumer, EquityContext };
