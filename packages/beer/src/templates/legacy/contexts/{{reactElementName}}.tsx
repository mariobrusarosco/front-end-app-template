import { createContext, useContext, useState } from "react";

export interface {{reactElementName}}ContextProps {
  state: number;
  handle: () => void;
}

const initialState = 0;

const {{reactElementName}}Context = createContext<{{reactElementName}}ContextProps | undefined>(undefined);
const { Provider, Consumer: {{reactElementName}}Consumer } = {{reactElementName}}Context;

const {{reactElementName}}Provider = ({ children }) => {
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

const use{{reactElementName}} = () => {
  const context = useContext({{reactElementName}}Context)

  if(context == undefined) {
    throw Error('use{{reactElementName}} must be used within {{reactElementName}}Context')
  }

  return context
}

export { use{{reactElementName}}, {{reactElementName}}Provider, {{reactElementName}}Consumer, {{reactElementName}}Context };
