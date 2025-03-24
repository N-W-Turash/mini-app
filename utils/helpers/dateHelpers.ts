import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export const formatDateAsISO8601 = (date: any) => {
  if (!dayjs(date).isValid()) return "-";

  const formattedDate = dayjs(date).format("YYYY-MM-DD");
  return formattedDate;
};

export const formatDate = (date: any, format = "MMM D, YYYY h:mm A") => {
  if (!dayjs(date).isValid()) return "-";

  const formattedDate = dayjs(date).format(format);
  return formattedDate;
};

export const isEligibleByAge = (date?: string, minAge = 18) => {
  const now = dayjs(Date.now());
  const dateOfBirth = dayjs(date);
  const difference = now.diff(dateOfBirth, "year", true);
  return difference >= minAge ? true : false;
};

export const isValidHour = (time: any, format = "h:mm A") => {
  if (!dayjs(time, format).isValid()) return false;
  return true;
};

export const isValidHourRange = (range: any) => {
  const { from, to } = range || {};
  return isValidHour(from) && isValidHour(to);
};
