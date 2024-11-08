import React, { useState } from "react";
import { ConfigForm } from "./ConfigForm";
import { VisualizerContainer } from "./VisualizerContainer";

export const App: React.FC = () => {
  const [range, setRange] = useState<number>(0);
  const [runs, setRuns] = useState<number>(0);
  const [delay, setDelay] = useState<number>(0);
  const [runCount, setRunCount] = useState<number>(0);
  const [counts, setCounts] = useState<number[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRunCount(0);
    setCounts(Array(range).fill(0));
    runMathRandomVisualizer();
  };

  const runMathRandomVisualizer = async () => {
    for (let i = 0; i < runs; i++) {
      const randomNum = Math.floor(Math.random() * range);
      setCounts((prevCounts) => {
        const newCounts = [...prevCounts];
        newCounts[randomNum]++;
        return newCounts;
      });
      setRunCount((prev) => {
        const newRunCount = prev + 1;
        return newRunCount;
      });
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  };

  return (
    <main className="bg-black w-screen h-screen flex flex-col justify-start items-center">
      <ConfigForm
        range={range}
        runs={runs}
        delay={delay}
        setRange={setRange}
        setRuns={setRuns}
        setDelay={setDelay}
        handleSubmit={handleSubmit}
      />
      <VisualizerContainer range={range} counts={counts} runCount={runCount} />
    </main>
  );
};
