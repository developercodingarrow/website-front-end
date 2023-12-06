export const loginInputs = [
  {
    id: 1,
    name: "email",
    type: "text",
    placeholder: "email",
    lable: "email",
    validation: {
      required: "Email is required.",
    },
  },
  {
    id: 2,
    name: "password",
    type: "text",
    placeholder: "password",
    lable: "password",
    validation: {
      required: "Password is required.",
    },
  },
];

export const SignUpInputs = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Enter Your Name",
    lable: "Name",
    validation: {
      required: "Name is required.",
    },
  },
  {
    id: 2,
    name: "email",
    type: "text",
    placeholder: "email",
    lable: "email",
    validation: {
      required: "Email is required.",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address.",
      },
    },
  },
  {
    id: 3,
    name: "password",
    type: "text",
    placeholder: "password",
    lable: "password",
    validation: {
      required: "Password is required.",
    },
  },
  {
    id: 4,
    name: "Confirmpassword",
    type: "text",
    placeholder: "Confirm password",
    lable: "Confirm password",
    validation: {
      required: "Confirm Password is required.",
      validate: (value) =>
        value === watch("password") || "Passwords do not match.",
    },
  },
];
