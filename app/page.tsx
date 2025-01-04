import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <div className="flex flex-col  justify-center items-center min-h-screen">
      <div>
        <h1>To Do App</h1>
      </div>

      <Link href={"/signin"}> Sign in </Link>
      <Link href={"/signup"}>Sign Up</Link>
    </div>
  );
};

export default page;
