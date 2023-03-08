//@ts-nocheck
import React, { useContext } from "react";
import { UserContext } from "../userContext.ts";
import { users } from "../../Interfaces/users";
function Card() {
  const user = useContext(UserContext);
  const { id, name, job, birth, joined, expire, web, phone } =
    useContext<users>(UserContext);

  return (
  <div className="CardContainer">
    {id}
    {name}
  </div>
  );
}

export default Card;
