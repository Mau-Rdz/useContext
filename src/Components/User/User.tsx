//@ts-nocheck
import React, { useState } from "react";
import { users } from "../Interfaces/User.ts";
import { UserContext } from "../userContext.ts";
import Card from "../Card/Card.tsx";

function User() {
  const [user, setUser] = useState<users>({
    id: 123,
    name: "Eduardo Salazar",
    job: "Data Analyst",
    birth: "12/12/2000",
    joined: "12/12/2012",
    expire: "12/12/2014",
    web: "ersalazar@modelo.edu.mx",
    phone: "120-120-20",
  });
  return (
    <UserContext.Provider value={user}>
      <div>
        <Card value={user}/>
      </div>
    </UserContext.Provider>
  );
}

export default User;
