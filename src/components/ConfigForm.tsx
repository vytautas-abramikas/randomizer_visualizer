import { useState } from "react";

export const ConfigForm: React.FC<{
  range: number;
  runs: number;
  delay: number;
  running: boolean;
  submit: (rangeS: number, runsS: number, delayS: number) => void;
  handleStop: () => void;
}> = ({ range, runs, delay, running, submit, handleStop }) => {
  const [localRange, setLocalRange] = useState<number>(range);
  const [localRuns, setLocalRuns] = useState<number>(runs);
  const [localDelay, setLocalDelay] = useState<number>(delay);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit(localRange, localRuns, localDelay);
  };

  return (
    <form className="flex items-center space-x-4 mt-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="range" className="sr-only">
          Range
        </label>
        <input
          type="number"
          value={localRange || ""}
          onChange={(e) => setLocalRange(Number(e.target.value))}
          id="range"
          name="range"
          placeholder="Range"
          className="px-3 py-2 border border-gray-300 rounded"
          min="2"
          max="1000"
          required
        />
      </div>
      <div>
        <label htmlFor="runs" className="sr-only">
          Runs
        </label>
        <input
          type="number"
          value={localRuns || ""}
          onChange={(e) => setLocalRuns(Number(e.target.value))}
          id="runs"
          name="runs"
          placeholder="Runs"
          className="px-3 py-2 border border-gray-300 rounded"
          min="1"
          max="1000000"
          required
        />
      </div>
      <div>
        <label htmlFor="delay" className="sr-only">
          Delay
        </label>
        <input
          type="number"
          value={localDelay || ""}
          onChange={(e) => setLocalDelay(Number(e.target.value))}
          id="delay"
          name="delay"
          placeholder="Delay"
          className="px-3 py-2 border border-gray-300 rounded"
          min="-1"
          max="1000"
        />
      </div>
      <div>
        {!running && (
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Run
          </button>
        )}
        {running && (
          <button
            onClick={handleStop}
            className="ml-2 px-4 py-2 bg-red-600 text-white rounded"
          >
            Stop
          </button>
        )}
      </div>
    </form>
  );
};
