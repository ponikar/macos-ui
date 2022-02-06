const avoidProgation = (e: MouseEvent) => e.stopPropagation();

export const stopPropagation = {
  onMouseMove: avoidProgation,
  onMouseDown: avoidProgation,
  onMouseUp: avoidProgation,
};
