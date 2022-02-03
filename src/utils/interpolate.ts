type InterPolate = ({}: {
  interpolateValue: number;
  inputRange: number[];
}) => number;

const [y0, y1] = [1, 1.5];
export const interpolate: InterPolate = ({ interpolateValue, inputRange }) => {
  const [x0, x1] = inputRange;
  return (
    (y0 * (x1 - interpolateValue) + y1 * (interpolateValue - x0)) / x1 - x0
  );
};
