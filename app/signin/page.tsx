"use client"
import { useState } from "react";
import axios from "axios";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col justify-center items-center bg-cyan-400 h-screen">
      <h1>Signin</h1>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="m-1 p-1 border-solid border-2 border-black"
        type="text"
        placeholder="enter email id"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="m-1 p-1 border-solid border-2 border-black"
        type="password"
        placeholder="enter password"
      />
      <button onClick={()=>{
          console.log(email)
          console.log(password)
        // @ts-ignore

        axios.post("http://localhost/api/v1/users"),{
            email,
            password
        }
        
      }} className="bg-slate text-pink-600 m-1 p-1">
        Signin
      </button>
    </div>
  );
};

export default page;
