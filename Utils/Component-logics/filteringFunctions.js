export const filterByUsername = (data, searchTerm, field) => {
  const filteredData = data.filter((item) =>
    item[field].toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filteredData;
};
