import { createContext, useState } from "react";

export interface UserContextProps {
  state: UserState;
  setUser: React.Dispatch<React.SetStateAction<UserState>>;
}

export interface UserState {
  firstName: string;
  lastName: string;
}

const initialState: UserState = {
  firstName: "Walter",
  lastName: "White",
};

// USerContext has two props: Consumer and Provider
const { Provider, Consumer: UserConsumer } =
  createContext<UserContextProps | any>(undefined);

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(initialState);

  return (
    <Provider
      value={
        {
        state: {
          ...user,
        },
        setUser,
      }
    }
    >
      {children}
    </Provider>
  );
};

export { UserProvider, UserConsumer };
