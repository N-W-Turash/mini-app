import { isValidString } from "@/utils/helpers/utilityHelpers";
import { capitalizeFirstLetter } from "@/utils/helpers/transformationHelpers";

interface ValidationFeedbackProps {
  touched: boolean;
  error: string | undefined;
  center?: boolean | undefined;
}

const ValidationFeedback = ({
  touched,
  error,
  center = false,
}: ValidationFeedbackProps) => {
  const errorMessage = isValidString(error)
    ? capitalizeFirstLetter(`${error}`)
    : "Invalid entry.";

  return (
    <>
      {touched && !!error && (
        <div className={`mt-1 w-full leading-tight ${center ? "text-center" : ""}`}>
          <span className="text-xs font-semibold text-error">{errorMessage}</span>
        </div>
      )}
    </>
  );
};

export default ValidationFeedback;
