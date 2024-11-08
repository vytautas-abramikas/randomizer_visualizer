const calculateHeightPercentage = (
  count: number,
  runCount: number,
  range: number
) => {
  const expectedFrequency = runCount / range;
  const frequencyRatio = count / expectedFrequency;

  // Adjust these parameters to fine-tune the curve
  const steepness = 5;
  const midpoint = 1;

  // Logistic function to calculate height percentage
  const heightPercentage =
    100 / (1 + Math.exp(-steepness * (frequencyRatio - midpoint)));

  return heightPercentage;
};

const generateRainbowColors = (steps: number) => {
  const colors = [];

  for (let i = 0; i < steps; i++) {
    // Hue calculation to cover the spectrum from dark red to violet
    const hue = 270 * (i / (steps - 1)); // 0 to 270 degrees on the hue wheel
    colors.push(`hsl(${hue}, 100%, 50%)`);
  }

  return colors;
};

const colors = generateRainbowColors(100);

const getColorForHeight = (heightPercentage: number) => {
  const index = Math.floor((heightPercentage / 100) * (colors.length - 1));
  return colors[index];
};

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
