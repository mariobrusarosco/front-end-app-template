import React from "react";
import { UserConsumer } from "../../contexts/userContext";

const User: React.FC = () => (
  <UserConsumer>
    {(user) => {
      const { state, setUser } = user;

      return (
        <div>
          <h1>User</h1>
          <h2>First name: {state.firstName}</h2>
          <h3>Last name: {state.lastName}</h3>
          <button
            onClick={() =>
              setUser({
                firstName: "I'm the danger!",
                lastName: "I'm the one who knocks!",
              })
            }
          >
            Break bad
          </button>
        </div>
      );
    }}
  </UserConsumer>
);

export default User;
