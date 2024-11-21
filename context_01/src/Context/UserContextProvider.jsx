import React from "react";
import UserContext from "./UserContext";

const UserContextProivder = ({ children }) => {
  const [user, setUser] = React.useState(null)
  return (
    <UserContext.Provider value = {{user, setUser}}>
      {children}
    </UserContext.Provider>
   )
}

export default UserContextProivder