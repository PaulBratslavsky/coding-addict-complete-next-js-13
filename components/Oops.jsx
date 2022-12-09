import React from "react";

export default function Oops({ message = "Oops, something went horribly wrong!" }) {
  return <h1 className="text-4xl text-color-purple container p-4 mb-6">{message}</h1>;
}
