import { useState } from "react";
import { useDelayCounter } from "@/hooks/useDelayCounter";

export default function Counter() {
  const [delay, setDelay] = useState(1000);
  const count = useDelayCounter(delay);
  return (
    <>
      <label>
        Tick duration: {delay} ms
        <br />
        <input
          type="range"
          value={delay}
          min="10"
          max="2000"
          onChange={(e) => setDelay(Number(e.target.value))}
        />
      </label>
      <hr />
      <h1>Ticks: {count}</h1>
    </>
  );
}
