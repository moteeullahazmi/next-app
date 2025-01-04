"use client"
import { useState } from "react";
import axios from "axios";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col justify-center items-center bg-cyan-400 h-screen">
      <h1>Sign up</h1>
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
      <button onClick={async()=>{
       
        // @ts-ignore
        
       await axios.post("http://localhost:3000/api/v1/signup",{
            email,
            password
        })
        
      }} className="bg-slate text-pink-600 m-1 p-1">
        Signup
      </button>
    </div>
  );
};

export default page;
