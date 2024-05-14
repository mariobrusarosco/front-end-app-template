import { hot } from "react-hot-loader/root";
import { CounterProvider } from "../../contexts/CounterContext";
import User from "../User/User";
import Counter from "../Counter/Counter";
import { UserConsumer, UserProvider } from "../../contexts/UserContext";

const App: React.FC = () => {
  console.log("R", React);
  // console.log("App Component", APPLICATION);

  return (
    <main>
      <h1>App Component</h1>

      <CounterProvider>
        <Counter />

        <UserProvider>
          <UserConsumer>{(user) => user && <User />}</UserConsumer>
        </UserProvider>
      </CounterProvider>
    </main>
  );
};

export default hot(App);
