import React from "react";

export default function Header({ title, children }) {
  return (
    <header className="bg-white shadow-sm p-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold">{title}</h1>
      <div>{children}</div>
    </header>
  );
}
