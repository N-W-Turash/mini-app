import * as Yup from "yup";
import {
  getValidationMessage,
  startsOrEndsWithSpace,
  isRepeated,
} from "@/utils/helpers/utilityHelpers";
import regexOptions from "@/utils/options/regex";

const {
  patterns: { phone, space, lettersAndSpaces },
} = regexOptions || {};

export interface AddUserFormValues
  extends Yup.InferType<typeof validationSchema | any> {
  email: string;
  fullName: string;
  phone: string;
}

export const initialValues: AddUserFormValues = {
  email: "",
  fullName: "",
  phone: "",
};

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email(getValidationMessage("Email", "invalid"))
    .required(getValidationMessage("Email")),

  fullName: Yup.string()
    .required(getValidationMessage("Full name"))
    .min(2, getValidationMessage("full name", "min", { min: 2 }))
    .max(40, getValidationMessage("full name", "max", { max: 40 }))
    .matches(lettersAndSpaces, getValidationMessage("Full name", "lettersAndSpacesOnly"))
    .matches(space, getValidationMessage("Full name", "noSpacesOnly"))
    .test(
      "startsOrEndsWithSpace",
      getValidationMessage("Full name", "noStartOrEndWithSpace"),
      (value) => !startsOrEndsWithSpace(value),
    ),

  phone: Yup.string()
    .required(getValidationMessage("Phone number"))
    .min(10, getValidationMessage("phone number", "invalid"))
    .max(10, getValidationMessage("phone number", "invalid"))
    .matches(phone, getValidationMessage("Phone number", "invalid"))
    .test(
      "repetition",
      getValidationMessage("Phone number", "repetition"),
      (value) => !isRepeated(value),
    ),
});
