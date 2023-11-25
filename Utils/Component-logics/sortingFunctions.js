// sortingFunctions.js
export const sortByDate = (data, order) => {
  const sortedData = data.slice().sort((a, b) => {
    if (order === "old") {
      return new Date(a.date) - new Date(b.date);
    } else if (order === "new") {
      return new Date(b.date) - new Date(a.date);
    }
    // If the order is not specified, return the original data
    return 0;
  });

  return sortedData;
};
