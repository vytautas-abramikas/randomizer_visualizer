import React, { useState, useEffect, useRef } from "react";
import { ConfigForm } from "./ConfigForm";
import { VisualizerContainer } from "./VisualizerContainer";
import { Counter } from "./Counter";

export const App: React.FC = () => {
  const [range, setRange] = useState<number>(0);
  const [runs, setRuns] = useState<number>(0);
  const [delay, setDelay] = useState<number>(0);
  const [runCount, setRunCount] = useState<number>(0);
  const [counts, setCounts] = useState<number[]>([]);
  const [running, setRunning] = useState<boolean>(false);

  const runningRef = useRef(running);

  useEffect(() => {
    runningRef.current = running;
    if (running) {
      runMathRandomVisualizer();
    }
  }, [running]);

  const submit = (rangeS: number, runsS: number, delayS: number) => {
    setRange(rangeS);
    setRuns(runsS);
    setDelay(delayS);
    setRunCount(0);
    setCounts(Array(rangeS).fill(0));
    setRunning(true);
  };

  const runMathRandomVisualizer = async () => {
    for (let i = 0; i < runs; i++) {
      if (!runningRef.current) break;
      const randomNum = Math.floor(Math.random() * range);
      setCounts((prevCounts) => {
        const newCounts = [...prevCounts];
        newCounts[randomNum]++;
        return newCounts;
      });
      setRunCount((prev) => prev + 1);
      if (delay > -1) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
    setRunning(false);
  };

  const handleStop = () => {
    setRunning(false);
  };

  return (
    <main className="font-sans bg-black w-screen h-screen flex flex-col justify-start items-center">
      <div className="absolute top-4 left-4">
        <Counter count={runCount} running={running} />
      </div>
      <div className="flex">
        <ConfigForm
          range={range}
          runs={runs}
          delay={delay}
          running={running}
          submit={submit}
          handleStop={handleStop}
        />
      </div>
      <VisualizerContainer range={range} counts={counts} runCount={runCount} />
    </main>
  );
};
