"use client";

import axios from "axios";
import { useState } from "react";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-cyan-500 flex-col h-screen flex justify-center items-center">
      singup
      <br />
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="text"
        placeholder="enter email"
      />
      <br />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="password"
      />
      <button
        onClick={async() => {
          const data = await axios.post("/api/v1/signup", {
            email,
            password,
          });
          console.log(data);
        }}
      >
        Sumbit
      </button>
    </div>
  );
};

export default page;
