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

export const otpVerifation = [
  {
    id: 1,
    name: "otp",
    type: "text",
    placeholder: "OTP",
    lable: "OTP",
    validation: {
      required: "OTP is required.",
    },
  },
];

export const forgotePasswordInputs = [
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
];

export const SignUpInputs = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "User Name",
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
    name: "mobileNumber",
    type: "text",
    placeholder: "Enter Your Mobile Number",
    lable: "mobile Number",
    validation: {
      required: "mobile Number is required.",
    },
  },
  {
    id: 4,
    name: "password",
    type: "text",
    placeholder: "password",
    lable: "password",
    validation: {
      required: "Password is required.",
    },
  },
  // {
  //   id: 5,
  //   name: "passwordConfirm",
  //   type: "text",
  //   placeholder: "Confirm password",
  //   lable: "Confirm password",
  //   validation: {
  //     required: "Confirm Password is required.",
  //     validate: (value) =>
  //       value === watch("password") || "Passwords do not match.",
  //   },
  // },
];
