import { createContext, useContext, useState } from "react";

export interface {{name}}ContextProps {
  state: number;
  handle: () => void;
}

const initialState = 0;

const {{name}}Context = createContext<{{name}}ContextProps | undefined>(undefined);
const { Provider, Consumer: {{name}}Consumer } = {{name}}Context;

const {{name}}Provider = ({ children }) => {
  const [lorem, setLorem] = useState(initialState);

  const handle = () => setLorem(lorem + 1);

  const state = { lorem, setLorem, handle }

  return (
    <Provider
      value={state}
    >
      {children}
    </Provider>
  );
};

const use{{name}} = () => {
  const context = useContext({{name}}Context)

  if(context == undefined) {
    throw Error('use{{name}} must be used within {{name}}Context')
  }

  return context
}

export { use{{name}}, {{name}}Provider, {{name}}Consumer, {{name}}Context };
