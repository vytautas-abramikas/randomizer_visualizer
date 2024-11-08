export const calculateHeightPercentage = (
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

export const generateRainbowColors = (steps: number): string[] => {
  const colors = [];

  for (let i = 0; i < steps; i++) {
    // Hue calculation to cover the spectrum from dark red to violet
    const hue = 270 * (i / (steps - 1)); // 0 to 270 degrees on the hue wheel
    colors.push(`hsl(${hue}, 100%, 50%)`);
  }

  return colors;
};

//edit the number to set a different number of steps for color shades
const colors = generateRainbowColors(100);

export const getColorForHeight = (heightPercentage: number) => {
  const index = Math.floor((heightPercentage / 100) * (colors.length - 1));
  return colors[index];
};
