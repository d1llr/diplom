import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Home() {
  const { value, setValue } = useContext(UserContext);

  return (
    <div>
      {value}
      <button onClick={()=>setValue('Кнопка в home нажата')}>
        Нажать
      </button>
    </div>
  );
}