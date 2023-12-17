export const newUserColumn = [
  { label: "S No", key: "_id", component: "number" },
  { label: "User Name", key: "name", component: "text" },
  { label: "E-mail", key: "email", component: "text" },
  { label: "Mobile Number", key: "mobileNumber", component: "text" },
];

// export const sampleData = [
//   {
//     _id: "1",
//     name: "sanjay",
//     email: "sanjay@gmail.com",
//     mobileNumber: "9992118210",
//     date: "20-12-2023",
//   },
//   {
//     _id: "2",
//     name: "sanjay",
//     email: "sanjay@gmail.com",
//     mobileNumber: "9992118210",
//     date: "20-12-2023",
//   },
//   {
//     _id: "3",
//     name: "sanjay",
//     email: "sanjay@gmail.com",
//     mobileNumber: "9992118210",
//     date: "20-12-2023",
//   },
//   {
//     _id: "4",
//     name: "sanjay",
//     email: "sanjay@gmail.com",
//     mobileNumber: "9992118210",
//     date: "20-12-2023",
//   },
//   {
//     _id: "5",
//     name: "sanjay",
//     email: "sanjay@gmail.com",
//     mobileNumber: "9992118210",
//     date: "20-12-2023",
//   },
//   {
//     _id: "6",
//     name: "sanjay",
//     email: "sanjay@gmail.com",
//     mobileNumber: "9992118210",
//     date: "20-12-2023",
//   },
//   {
//     _id: "7",
//     name: "sanjay",
//     email: "sanjay@gmail.com",
//     mobileNumber: "9992118210",
//     date: "20-12-2023",
//   },
// ];

export const sampleData = Array.from({ length: 100 }, (_, index) => ({
  _id: (index + 1).toString(),
  name: "sanjay",
  email: "sanjay@gmail.com",
  mobileNumber: "9992118210",
  date: "20-12-2023",
}));
