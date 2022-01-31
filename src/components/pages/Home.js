import React from "react";
import Profile from "../profile";
import Repository from "../repository";

export default function Home() {
  return (
    <main className="container app-wrapper">
      <Profile />
      <Repository />
    </main>
  );
}
