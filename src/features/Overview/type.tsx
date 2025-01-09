/**
 * FormFields are used to build the individual form components
 */
export type FormFields = {
  name: string;
  label: string;
  value: string;
  required: boolean;
  placeholder: string;
  validators: Validator[];
  errorMsg: string;
};

/**
 * Validator type is used to validate the given form component
 * based on certain conditions. Returns error = true if met.
 */
export type Validator = {
  validate: (value: string) => boolean;
  message: string;
};

/**
 * VinFormFields type is used to build out the form component for
 * vin form fields
 */
export type VinFormFields = {
  vin: FormFields;
  year: FormFields;
};

/**
 * The json data response type that contains the result of the search made by the user
 */
export type SampleJSONData = {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: Array<Result>;
};

/**
 * The result of each of the information for the VIN and year provided by the user.
 */
export type Result = {
  Value?: string | null;
  ValueId?: string | null;
  Variable?: string | null;
  VariableId?: number | null;
};
