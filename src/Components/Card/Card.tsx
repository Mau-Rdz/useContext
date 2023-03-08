//@ts-nocheck
import React, { useContext } from "react";
import { UserContext } from "../userContext.ts";
import { users } from "../../Interfaces/users";
import './Card.css'

function Card() {
  const { id, name, url, job, birth, joined, expire, web, phone } =
    useContext<users>(UserContext);

  return (
  <div className="CardContainer">
    <div>
        <img src={url}/>
    </div>
    <div className="Name">
        {name}
    </div>
    <div className="Job">
        {job}
    </div>
  </div>
  );
}

export default Card;
