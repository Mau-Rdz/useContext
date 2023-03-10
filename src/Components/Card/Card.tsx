//@ts-nocheck
import React, { useContext } from "react";
import { UserContext } from "../userContext.ts";
import { users } from "../../Interfaces/users";
import "./Card.css";

function Card() {
  const { id, name, url, job, birth, joined, expire, web, phone } =
    useContext<users>(UserContext);

  return (
    <div className="CardContainer">
      <div>
        <img src={url} alt="Foto user" />
      </div>
      <div className="Name">{name}</div>
      <div className="Job">{job}</div>
      <div>
        <p className="titulo">ID No:</p>
        {id}
      </div>
      <div>
        <p className="titulo">DOB.</p>
        {birth}
      </div>
      <div>
        <p className="titulo">Joined Date</p>
        {joined}
      </div>
      <div>
        <p className="titulo">Expire Date</p>
        {expire}
      </div>
      <div>
        <p className="titulo">Web</p>
        {web}
      </div>
      <div>
        <p className="titulo">Phone</p>
        {phone}
      </div>
    </div>
  );
}

export default Card;
