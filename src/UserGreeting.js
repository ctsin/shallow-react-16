import React from "react";
import UserContext from "./UserContext";

const UserGreeting = ({ greeting }) => (
  <UserContext.Consumer>
    {user => (
      <div className="greeting">
        {greeting}, {user.name}
      </div>
    )}
  </UserContext.Consumer>
);

export default UserGreeting;
