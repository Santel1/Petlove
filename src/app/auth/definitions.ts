import * as Yup from "yup";

export const SignupValidationSchema = Yup.object({
  name: Yup.string().required("Name is required").min(3),
  email: Yup.string()
    .email("Enter a valid Email")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(24, "Password is too long"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Password confirmation is required")
    .min(8),
});

export const SigninValidationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(24, "Password is too long")
    .required("Password is required"),
});
