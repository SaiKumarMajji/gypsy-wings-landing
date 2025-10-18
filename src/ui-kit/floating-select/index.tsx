import { cn } from "@/lib/utils";
import React from "react";
import { Text, TextVariant } from "../text";
import { Option } from "@/interface/common-interface";
import { getErrorMessage } from "@/constants/getMessages";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

interface IUIFloatingSelect {
  data: Option[];
  name: string;
  required?: boolean;
  onBlur?: (e: React.FocusEvent<HTMLButtonElement>) => void;
  touched?: boolean | undefined;
  error?: string | undefined;
  className?: string;
  selectValue?: string;
  setFieldValue: (field: string, value: number | string) => void;
  value: string | number;
  placeholder?: string;
  floatingLabel?: string;
  isEditMode?: boolean;
  textClass?: string;
  inputClass?: string;
  disabled?: boolean;
  floatingLabelClass?: string;
}

export const FloatingSelect: React.FC<IUIFloatingSelect> = ({
  data,
  name,
  required,
  onBlur,
  touched,
  error,
  className,
  placeholder,
  setFieldValue,
  floatingLabel,
  value,
  textClass,
  inputClass,
  disabled,
  floatingLabelClass,
}) => {
  // Set display label only if a valid option is selected
  const selectedOption = data?.find(
    (option) => String(option.value) === String(value)
  );
  const displayLabel = selectedOption ? selectedOption.label : "";

  const selectValueChange = (val: any) => {
    setFieldValue(name, val);
  };

  return (
    <div className={cn("relative", className)}>
      {floatingLabel && (
        <label
          htmlFor={name}
          className={`absolute top-2 text-sm left-3 text-primaryText-500 transition-all duration-300 transform bg-white px-1
            -translate-y-4 scale-75 origin-top-left peer-focus:-translate-y-4 peer-focus:scale-75 font-lora ${floatingLabelClass} ${
            disabled ? "z-10" : ""
          }`}
        >
          {floatingLabel} {required && <span className="text-error">*</span>}
        </label>
      )}
      <Select onValueChange={selectValueChange} value={String(value ?? "")}>
        <SelectTrigger
          id={name}
          className={cn(
            "peer px-3 py-2 w-full border-2 border-primaryText-300 rounded-md text-primaryText-900 focus:outline-none focus:border-blue-500 focus:ring-0 transition-all duration-300",
            textClass,
            `${error && touched ? "border-error" : ""}`
          )}
          onBlur={onBlur}
          disabled={disabled}
        >
          <input
            type="text"
            placeholder={placeholder}
            value={displayLabel}
            readOnly
            className={`text-primaryText-900 text-[15px] font-lora flex h-full w-[95%] bg-background ${
              inputClass ? inputClass : ""
            }`}
          />
        </SelectTrigger>
        <SelectContent className="max-h-56 overflow-y-auto">
          {data?.map((option, index) => (
            <SelectItem
              key={index}
              value={String(option.value)}
              className="font-lora"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {touched && error && (
        <Text variant={TextVariant.error} className="mt-1 text-error">
          {getErrorMessage(error as string)}
        </Text>
      )}
    </div>
  );
};
