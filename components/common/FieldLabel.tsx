import { ReactNode } from "react";

interface FieldLabelProps {
  label: ReactNode;
  required: boolean;
}

const FieldLabel = ({ label = "", required = false }: FieldLabelProps) => {
  return (
    <>
      {label && (
        <span>
          {label} {required && <span className="!text-error">*</span>}
        </span>
      )}
    </>
  );
};

export default FieldLabel;
