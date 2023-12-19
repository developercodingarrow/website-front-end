export const userDetails = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Name",
    lable: "Name",
    validation: {
      required: "Name is required.",
    },
  },
];

export const userDetailApi = {
  id: 1,
  name: "sandep",
};

export const CreditaionDetails = [
  {
    id: 1,
    name: "email",
    type: "text",
    placeholder: "E-mail",
    lable: "Email",
    readOnlyMode: true,
    validation: {
      required: "Email is required.",
    },
  },
  {
    id: 2,
    name: "passwords",
    type: "text",
    placeholder: "password",
    lable: "Password",
    readOnlyMode: true,
    validation: {
      required: "Email is required.",
    },
  },
];

export const CreditaionDetailsApi = {
  id: 1,
  email: "sandeep@gmail.com",
  passwords: "12345678",
};

export const BusinessDetails = [
  {
    id: 1,
    name: "companyName",
    type: "text",
    placeholder: "Company Name",
    label: "Company Name", // Changed 'lable' to 'label'
    validation: {
      required: "COMPANY NAME is required.",
    },
  },
  {
    id: 2,
    name: "GST_No", // Changed 'Name' to 'name'
    type: "text",
    placeholder: "GST No",
    label: "GST No", // Changed 'lable' to 'label'
    validation: {
      required: "GST No is required.",
    },
  },

  {
    id: 2,
    name: "companytype", // Changed 'Name' to 'name'
    type: "select",
    placeholder: "Company Type",
    label: "GST No", // Changed 'lable' to 'label'
    options: ["proprietor", "private company"],
    validation: {
      required: "GST No is required.",
    },
  },
];

export const BusinessDetailsApi = {
  id: 1,
  companyName: "XYZ enter price",
  GST_No: "04AABCU9603R1ZV",
};
