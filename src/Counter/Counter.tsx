import React, { useState } from "react";

export function Counter() {
  // useState를 이용 (Hook)
  // 스테이트라는걸 적용할 수 있게 해준다.
  // 상태 값이 바뀌면, ReRendering을 진행.

  const [count, setCount] = useState(0);
  console.log("Re Return : Counter");

  return (
    <main className="container">
      <h1>Counter App</h1>
      <h2>Count : {count}</h2>
      <div className="grid">
        <button
          onClick={() => {
            setCount(count - 1);
            console.log("count--", count);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
            console.log("count++", count);
          }}
        >
          +
        </button>
      </div>
    </main>
  );
}
