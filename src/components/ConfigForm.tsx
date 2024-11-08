import React from "react";

export const ConfigForm: React.FC<{
  range: number;
  runs: number;
  delay: number;
  setRange: (value: number) => void;
  setRuns: (value: number) => void;
  setDelay: (value: number) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}> = ({ range, runs, delay, setRange, setRuns, setDelay, handleSubmit }) => {
  return (
    <form className="flex items-center space-x-4 mt-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="range" className="sr-only">
          Range
        </label>
        <input
          type="number"
          id="range"
          name="range"
          placeholder="Range"
          className="px-3 py-2 border border-gray-300 rounded"
          value={range || ""}
          onChange={(e) => setRange(parseInt(e.target.value))}
          required
        />
      </div>
      <div>
        <label htmlFor="runs" className="sr-only">
          Runs
        </label>
        <input
          type="number"
          id="runs"
          name="runs"
          placeholder="Runs"
          className="px-3 py-2 border border-gray-300 rounded"
          value={runs || ""}
          onChange={(e) => setRuns(parseInt(e.target.value))}
          required
        />
      </div>
      <div>
        <label htmlFor="delay" className="sr-only">
          Delay
        </label>
        <input
          type="number"
          id="delay"
          name="delay"
          placeholder="Delay"
          className="px-3 py-2 border border-gray-300 rounded"
          value={delay || ""}
          onChange={(e) => setDelay(parseInt(e.target.value))}
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          Run
        </button>
      </div>
    </form>
  );
};
