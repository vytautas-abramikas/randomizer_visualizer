export const ValueColumn: React.FC<{
  range: number;
  count: number;
  runCount: number;
}> = ({ count, runCount, range }) => {
  const heightPercentage = runCount > 0 ? (count / runCount) * 100 : 0;

  const widthPercentage = 100 / range;

  return (
    <div
      className="flex flex-col-reverse items-center h-full"
      style={{ width: `${widthPercentage}%` }}
    >
      <div
        className="bg-blue-500 w-full min-w-[1px]"
        style={{ height: `${heightPercentage}%` }}
      ></div>
    </div>
  );
};
