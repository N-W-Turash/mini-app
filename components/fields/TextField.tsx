import { ChangeEvent, ComponentProps, FocusEvent, ReactNode } from "react";
import { useField } from "formik";
import { Form, Input } from "antd";
import { twMerge } from "tailwind-merge";
import ValidationFeedback from "@/components/errors/ValidationFeedback";
import FieldLabel from "@/components/common/FieldLabel";

const { Item: FormItem } = Form;

type Status = "large" | "middle" | "small";

type InputType = "textarea" | "password" | undefined;

interface TextfieldProps extends ComponentProps<any> {
  bordered?: boolean;
  className?: string;
  disabled?: boolean;
  inputType?: InputType;
  label?: ReactNode;
  labelClassName?: string;
  name: string;
  maxLength?: number;
  onFieldBlur?: () => void;
  placeholder?: string;
  postFieldValueChange?: (name: string, value: string) => void;
  required?: boolean;
  rows?: number;
  size?: Status;
  showValidationErrorMessage?: boolean;
}

const TextField = ({
  required = false,
  bordered = true,
  className = "",
  disabled = false,
  inputType,
  label = "",
  labelClassName = "",
  name = "",
  maxLength,
  onFieldBlur,
  placeholder = "",
  postFieldValueChange = () => {},
  rows = 3,
  size,
  showValidationErrorMessage = true,
  ...rest
}: TextfieldProps) => {
  const [field, meta, helpers] = useField(name);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    helpers.setValue(event.target.value);

    if (postFieldValueChange) postFieldValueChange(name, event.target.value);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    field.onBlur(event);
    if (onFieldBlur) onFieldBlur();
  };

  const borderClassName = bordered ? "" : "!border-none";
  const labelClasses = label ? "!mb-2" : labelClassName || "!mb-3";
  const classes = twMerge(
    `ant-input-custom font-medium h-[36px] !text-semi-sm ${inputType === "password" ? "ant-password-input" : ""} ${className} ${borderClassName}`,
  );

  const showValidationErrorMsg = showValidationErrorMessage && meta.error && meta.touched;

  return (
    <FormItem
      {...(label && {
        label: <FieldLabel label={label} required={required} />,
      })}
      className={labelClasses}
      validateStatus={showValidationErrorMsg ? "error" : ""}
      htmlFor={name}
    >
      {inputType === "password" ? (
        <Input.Password
          id={name}
          name={name}
          autoComplete="new-password"
          placeholder={placeholder}
          value={field.value}
          className={classes}
          size={size}
          {...(showValidationErrorMsg && { status: "error" })}
          disabled={disabled}
          onChange={handleChange}
          onBlur={handleBlur}
          {...rest}
        />
      ) : inputType === "textarea" ? (
        <Input.TextArea
          id={name}
          name={name}
          placeholder={placeholder}
          value={field.value}
          className={classes}
          disabled={disabled}
          size={size}
          {...(maxLength && { maxLength })}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={rows}
          {...rest}
        />
      ) : (
        <Input
          id={name}
          name={name}
          placeholder={placeholder}
          value={field.value}
          className={classes}
          disabled={disabled}
          size={size}
          onChange={handleChange}
          onBlur={handleBlur}
          {...rest}
        />
      )}

      {showValidationErrorMessage && (
        <ValidationFeedback error={meta.error} touched={meta.touched} />
      )}
    </FormItem>
  );
};

export default TextField;
