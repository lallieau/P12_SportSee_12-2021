export const reverseActivityOrder = performance => {
    return [...performance].sort((a, b) => b.kind - a.kind);
  };
  