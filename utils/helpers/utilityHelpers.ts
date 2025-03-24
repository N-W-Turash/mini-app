import { FAILED_OPS_ERROR_MESSAGE } from "@/constants/constants";

export const delay = async (promise: any, ms = 550) => {
  await new Promise((res) => setTimeout(res, ms));
  return promise;
};

export const getValidationMessage = (
  fieldTitle: string,
  type = "required",
  values?: any,
) => {
  switch (type) {
    case "required":
      return `${fieldTitle} is a required field.`;

    case "invalid":
      return `${fieldTitle} is invalid.`;

    case "min":
      return `Minimum length for ${fieldTitle} is ${values?.min}.`;

    case "max":
      return `Maximum allowed length for ${fieldTitle} is ${values?.max}.`;

    case "passwordFormat":
      return `${fieldTitle} must contain at least one uppercase letter, one lowercase letter, one number and one special character.`;

    case "match":
      return `${fieldTitle} must match.`;

    case "nonEmpty":
      return `${fieldTitle} cannot be empty.`;

    case "noSpacesOnly":
      return `${fieldTitle} cannot contain spaces only.`;

    case "noStartsWithSpace":
      return `${fieldTitle} cannot start with a space.`;

    case "noEndsWithSpace":
      return `${fieldTitle} cannot end with a space.`;

    case "noStartOrEndWithSpace":
      return `${fieldTitle} cannot start or end with a space.`;

    case "lettersAndSpacesOnly":
      return "Only letters & spaces are allowed.";

    case "lettersAndNumbersOnly":
      return "Only letters & numbers are allowed.";

    case "repetition":
      return `Repetition of a single digit isn't allowed.`;

    case "spacesAndOrSpecialCharsOnly":
      return `${fieldTitle} cannot contain spaces and/or special characters only.`;

    default:
      return "Invalid entry.";
  }
};

export const startsWithSpace = (value: string) => {
  if (value?.startsWith(" ")) return true;
  return false;
};

export const endsWithSpace = (value: string) => {
  if (value?.endsWith(" ")) return true;
  return false;
};

export const startsOrEndsWithSpace = (value: string) => {
  if (value?.startsWith(" ") || value?.endsWith(" ")) return true;
  return false;
};

export const generateSuccessMessage = (
  value: string,
  type: string,
  pluralize = false,
) => {
  switch (type) {
    case "create":
      return `${value} ${pluralize ? "have" : "has"} been added.`;

    case "update":
      return `${value} has been updated.`;

    case "delete":
      return `${value} has been deleted.`;

    case "send":
      return `${value} has been sent.`;

    case "resend":
      return `${value} has been resent.`;

    case "decline":
      return `${value} has been declined.`;

    case "mark":
      return `${value} has been marked as complete.`;

    case "cancel":
      return `${value} has been cancelled.`;

    case "release":
      return `${value} has been released.`;

    case "remove":
      return `${value} has been removed.`;

    case "set":
      return `${value} has been set.`;

    case "activate":
      return `${value} has been activated.`;

    case "turn-off":
      return `${value} has been turned off.`;

    case "turn-on":
      return `${value} has been turned on.`;

    case "place":
      return `${value} has been placed successfully.`;

    case "save":
      return `${value} has been saved.`;

    case "reset":
      return `${value} has been reset.`;

    default:
      return "-";
  }
};

export const generateErrorMessage = (message: string | any) => {
  return typeof message === "string" ? message : FAILED_OPS_ERROR_MESSAGE;
};

export const formatUSD = (value?: number) => {
  const formattedString = value?.toLocaleString?.("en-US", {
    style: "currency",
    currency: "USD",
  });

  const currencyString = formattedString || "-";
  return currencyString;
};

export const getFullName = (firstName?: string, lastName?: string) => {
  return firstName && lastName ? `${firstName} ${lastName}` : "-";
};

export const isValidString = (value?: string) => {
  return typeof value === "string" && value?.length > 0;
};

export const isRepeated = (value?: string) => {
  if (value !== undefined) return /^(.)\1+$/.test(value);
  return true;
};
