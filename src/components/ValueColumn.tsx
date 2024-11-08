import { calculateHeightPercentage, getColorForHeight } from "../math/math";

export const ValueColumn: React.FC<{
  range: number;
  count: number;
  runCount: number;
}> = ({ count, runCount, range }) => {
  const heightPercentage = calculateHeightPercentage(count, runCount, range);
  const color = getColorForHeight(heightPercentage);

  const widthPercentage = 100 / range;

  return (
    <div
      className="flex flex-col-reverse items-center h-full"
      style={{ width: `${widthPercentage}%` }}
    >
      <div
        className="bg-blue-500 w-full min-w-[1px]"
        style={{ height: `${heightPercentage}%`, backgroundColor: color }}
      ></div>
    </div>
  );
};
