import { VinFormFields } from "./type";

export const DEFAULT_VIN_FORM_FIELDS: VinFormFields = {
  vin: {
    name: "vin",
    label: "VIN number",
    value: "",
    required: true,
    placeholder: "Enter your vehicle VIN number",
    validators: [
      {
        validate: (value) => value.trim().length <= 0,
        message: "Value is required",
      },
      {
        validate: (value) => value.trim().length <= 16,
        message: "Value must be more than 16 characters",
      },
      {
        validate: (value) => value.trim().length >= 18,
        message: "Value should not exceed 17 characters",
      },
    ],
    errorMsg: "",
  },
  year: {
    name: "year",
    label: "Year of manufacturer",
    value: "",
    required: true,
    placeholder: "Enter the manufacturer date of your vehicle",
    validators: [
      {
        validate: (value) => value.trim().length <= 0,
        message: "Value is required",
      },
      {
        validate: (value) => !/^\d{4}$/.test(value),
        message: "Value should be of exactly 4 digits in format of YYYY",
      },
    ],
    errorMsg: "",
  },
};
