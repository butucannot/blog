"use client";

import { useState } from "react";
import "./pizdec.css";

export default function Fuck() {
  const [result, setResult] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const treeDraw = () => {
    const lines = parseInt(inputValue);
    if (isNaN(lines) || lines <= 0) {
      setResult([" Введіть додатне число"]);
      return;
    }

    const newResult: string[] = [];
    for (let i = 1; i <= lines; i++) {
      newResult.push("*".repeat(i * 2 - 1));
    }
    setResult(newResult);
  };

  return (
    <main>
      <div>
        <input
          type="text"
          className="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введіть кількість рядків"
        />
        <button onClick={treeDraw}>press</button>
      </div>
      <div className="derevo">
        {result.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </main>
  );
}
