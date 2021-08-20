import { createContext, useContext, useState } from "react";

export interface useSimulationContextProps {
  state: number;
  handle: () => void;
}

const initialState = 0;

const useSimulationContext = createContext<useSimulationContextProps | undefined>(undefined);
const { Provider, Consumer: useSimulationConsumer } = useSimulationContext;

const useSimulationProvider = ({ children }) => {
  const [lorem, setLorem] = useState(initialState);

  const handle = () => setLorem(lorem + 1);

  const state = { lorem, setLorem, handle }
s
  return (
    <Provider
      value={state}
    >
      {children}
    </Provider>
  );
};

const useuseSimulation = () => {
  const context = useContext(useSimulationContext)

  if(context == undefined) {
    throw Error('useuseSimulation must be used within useSimulationContext')
  }

  return context
}

export { useuseSimulation, useSimulationProvider, useSimulationConsumer, useSimulationContext };
