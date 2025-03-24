"use client";

import { ComponentProps, ReactNode } from "react";
import { useField } from "formik";
import { PatternFormat } from "react-number-format";
import { Form, Input } from "antd";
import { twMerge } from "tailwind-merge";
import ValidationFeedback from "@/components/errors/ValidationFeedback";
import FieldLabel from "@/components/common/FieldLabel";

interface PhoneNumberFieldProps extends ComponentProps<any> {
  className?: string;
  disabled?: boolean;
  format?: string;
  formattedValue?: boolean;
  label?: ReactNode;
  labelClassName?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}

const { Item: FormItem } = Form;

const PhoneNumberField = ({
  className = "",
  disabled = false,
  format = "(###) ### ####",
  formattedValue = false,
  label = "",
  labelClassName = "",
  name = "",
  placeholder = "",
  required = false,
  ...rest
}: PhoneNumberFieldProps) => {
  const [field, meta, helpers] = useField(name);

  const handleValueChange = (values: any) => {
    const value = formattedValue ? values?.formattedValue : values?.value;
    helpers.setValue(value ?? "");
  };

  const classes = twMerge(
    "ant-input-custom h-[36px] font-medium !text-semi-sm",
    className,
  );

  const labelClasses = label ? "!mb-2" : labelClassName ? labelClassName : "!mb-3";

  return (
    <>
      <FormItem
        {...(label && {
          label: <FieldLabel label={label} required={required} />,
        })}
        className={labelClasses}
        validateStatus={meta.error && meta.touched ? "error" : ""}
        htmlFor={name}
      >
        <PatternFormat
          id={name}
          name={name}
          value={field.value}
          placeholder={placeholder}
          className={classes}
          disabled={disabled}
          customInput={Input}
          format={format}
          valueIsNumericString={true}
          onValueChange={handleValueChange}
          onBlur={field.onBlur}
          {...rest}
        />
        <ValidationFeedback error={meta.error} touched={meta.touched} />
      </FormItem>
    </>
  );
};

export default PhoneNumberField;
