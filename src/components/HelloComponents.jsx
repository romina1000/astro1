import React from "react";

function HelloComponents() {
  return (
    <div>
      <h1>Hello React</h1>

      <button
        onClick={() => {
          alert("hiciste clic 😁");
        }}
      >
        clic-me
      </button>
    </div>
  );
}

export default HelloComponents;
