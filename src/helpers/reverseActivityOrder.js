/**
 * Reverse the order of the data so it displays correctly in the radar chart
 * @param {object} performance
 * @returns {object}
 */
export const reverseActivityOrder = performance => {
  return [...performance].sort((a, b) => b.kind - a.kind);
};
