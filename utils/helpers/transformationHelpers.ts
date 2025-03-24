export const capitalizeFirstLetter = (str?: string) => {
  if (!str) return "-";
  const value = str?.charAt(0)?.toUpperCase?.() + str?.slice?.(1);
  return value;
};
