import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export default function About() {
  const user = useContext(UserContext);

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}