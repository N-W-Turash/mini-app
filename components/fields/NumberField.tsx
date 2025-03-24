import { ComponentProps, ReactNode } from "react";
import { useField } from "formik";
import { NumericFormat } from "react-number-format";
import { Form, Input } from "antd";
import { twMerge } from "tailwind-merge";
import ValidationFeedback from "@/components/errors/ValidationFeedback";
import FieldLabel from "@/components/common/FieldLabel";

interface NumberFieldProps extends ComponentProps<any> {
  allowNegative?: boolean;
  className?: string;
  disabled?: boolean;
  formattedValue?: boolean;
  label?: ReactNode;
  name: string;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
}

const { Item: FormItem } = Form;

const NumberField = ({
  required = false,
  allowNegative = false,
  className = "",
  disabled = false,
  formattedValue = false,
  label,
  name,
  placeholder,
  prefix = "",
  suffix = "",
  ...rest
}: NumberFieldProps) => {
  const [field, meta, helpers] = useField(name);

  const handleValueChange = (values: any) => {
    const value = formattedValue ? values?.formattedValue : values?.value;
    helpers.setValue(value ?? "");
  };

  const classes = twMerge(
    "ant-input-custom h-[36px] font-medium !text-semi-sm",
    className,
  );

  const labelClassName = label ? "!mb-2" : "!mb-3";

  return (
    <FormItem
      {...(label && {
        label: <FieldLabel label={label} required={required} />,
      })}
      className={labelClassName}
      validateStatus={meta.error && meta.touched ? "error" : ""}
      htmlFor={name}
    >
      <NumericFormat
        id={name}
        name={name}
        value={field.value}
        placeholder={placeholder}
        className={classes}
        allowNegative={allowNegative}
        disabled={disabled}
        customInput={Input}
        prefix={prefix}
        suffix={suffix}
        onValueChange={handleValueChange}
        onBlur={field.onBlur}
        {...rest}
      />

      <ValidationFeedback error={meta.error} touched={meta.touched} />
    </FormItem>
  );
};

export default NumberField;
