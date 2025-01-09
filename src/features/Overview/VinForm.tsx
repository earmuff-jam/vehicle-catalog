import { Box, Stack } from "@mui/material";
import * as React from "react";
import { DEFAULT_VIN_FORM_FIELDS } from "./constant";
import TextFieldWithLabel from "./TextFieldWithLabel";
import { LoadingButton } from "@mui/lab";
import { SampleJSONData, VinFormFields } from "./type";
import { fetchData } from "../api/api";
import jsonData from "../api/testData.json";
import Information from "../Vehicle/Information";

const VinForm: React.FunctionComponent = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<SampleJSONData | null>(null);
  const [formFields, setFormFields] = React.useState(DEFAULT_VIN_FORM_FIELDS);

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = ev.target;
    const updatedFormFields: VinFormFields = { ...formFields };
    let errorMsg = "";
    for (const validator of updatedFormFields[id as keyof VinFormFields]
      .validators) {
      if (validator.validate(value)) {
        errorMsg = validator.message;
        break;
      }
    }
    updatedFormFields[id as keyof VinFormFields] = {
      ...updatedFormFields[id as keyof VinFormFields],
      value,
      errorMsg,
    };
    setFormFields(updatedFormFields);
  };

  const handleClick = () => {
    setLoading(true);
    setData(jsonData);
    setLoading(false);
    // const vinData = formFields.vin.value;
    // const year = formFields.year.value;
    // fetchData(`${vinData}?format=json&modelYear=${year}`).then((data) => {
    //   setData(data);
    //   setLoading(false);
    // });
  };

  const isDisabled = () => {
    const containsErr = Object.values(formFields).reduce((acc, el) => {
      if (el.errorMsg) {
        return true;
      }
      return acc;
    }, false);

    const requiredFormFields = Object.values(formFields).filter(
      (v) => v.required
    );
    const isRequiredFieldsEmpty = requiredFormFields.some(
      (el) => el.value.trim() === ""
    );

    return containsErr || isRequiredFieldsEmpty;
  };

  return (
    <>
      <Stack sx={{ alignItems: "center" }}>
        <TextFieldWithLabel
          label={formFields.vin.label}
          name={formFields.vin.name}
          value={formFields.vin.value}
          placeholder={formFields.vin.placeholder}
          required={formFields.vin.required}
          errorMsg={formFields.vin.errorMsg}
          onChange={handleChange}
        />
        <TextFieldWithLabel
          label={formFields.year.label}
          name={formFields.year.name}
          value={formFields.year.value}
          placeholder={formFields.year.placeholder}
          required={formFields.year.required}
          errorMsg={formFields.year.errorMsg}
          onChange={handleChange}
        />
        <LoadingButton
          size="small"
          onClick={handleClick}
          loading={loading}
          variant="outlined"
          disabled={isDisabled()}
        >
          Submit
        </LoadingButton>
      </Stack>
      <Box>
        <Information data={data} />
      </Box>
    </>
  );
};

export default VinForm;
