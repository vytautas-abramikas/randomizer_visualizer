import React from "react";
import { ValueColumn } from "./ValueColumn";

export const VisualizerContainer: React.FC<{
  range: number;
  counts: number[];
  runCount: number;
}> = ({ range, counts, runCount }) => {
  return (
    <div className="flex justify-center items-end w-full max-w-full overflow-x-auto h-full mt-4">
      {Array.from({ length: range }).map((_, value) => (
        <ValueColumn
          key={value}
          range={range}
          count={counts[value]}
          runCount={runCount}
        />
      ))}
    </div>
  );
};
