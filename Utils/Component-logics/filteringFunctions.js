export const filterByUsername = (data, searchTerm) => {
  const filteredData = data.filter((item) =>
    item.username.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filteredData;
};
