// dateRangeFilter.js

export const filterByDateRange = (data, startDate, endDate) => {
  console.log(data);

  const start = new Date(startDate);
  const end = new Date(endDate);
  console.log(start, end);
  const filteredData = data.filter((item) => {
    const itemDate = new Date(item.date);
    console.log(itemDate);
    return itemDate >= start && itemDate <= end;
  });
  return filteredData;
};
