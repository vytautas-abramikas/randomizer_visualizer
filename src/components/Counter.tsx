export const Counter: React.FC<{ count: number; running: boolean }> = ({
  count,
  running,
}) => {
  return (
    <div
      className={`text-lg font-bold ${
        running ? "text-red-500" : "text-green-500"
      }`}
    >
      Run Count: {count}
    </div>
  );
};
