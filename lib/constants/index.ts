export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "My-Shop";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION || "A modern ecommerce store";

export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;

export const signInDefultValues = {
  email: "",
  password: "",
};

export const signUpDefultValues = {
  name: '',
  email: "",
  password: "",
  confirmPassword: ''
};
