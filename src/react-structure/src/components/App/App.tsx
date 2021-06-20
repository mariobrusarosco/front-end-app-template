import { hot } from "react-hot-loader/root";
import { UserProvider, UserConsumer } from "../../contexts/userContext";
import { CounterProvider } from "../../contexts/CounterContext";
import User from "../User/User";
import Counter from "../Counter/Counter";

const App: React.FC = () => {
  console.log("App Component", APPLICATION);

  return (
    <main>
      <h1>App Component</h1>

      <CounterProvider>
        <UserProvider>
          <UserConsumer>{(user) => user && <User />}</UserConsumer>
        </UserProvider>

        <Counter />
      </CounterProvider>
    </main>
  );
};

export default hot(App);
