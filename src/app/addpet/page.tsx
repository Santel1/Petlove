import React from "react";

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div>
      <h1>Add pet</h1>
      <button>Add</button>
    </div>
  );
}
