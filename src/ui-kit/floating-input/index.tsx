"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Tooltip } from "@mui/material";
import { Text, TextVariant } from "../text";
import { regExp } from "@/utils/regex";
import { getErrorMessage } from "@/constants/getMessages";
import { colors } from "@/constants/colors";

interface IUIFloatingInput {
  name?: string;
  required?: boolean;
  placeholder?: string;
  floatingLabel?: string;
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => any;
  touched?: boolean | undefined;
  error?: string | string[] | undefined;
  className?: string;
  isAutocompletOpen?: boolean;
  isPlaceholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  numberOnly?: boolean;
  alphabetOnly?: boolean;
  isEmail?: boolean;
  isUrl?: boolean;
  isCopy?: boolean;
  alphabetNumberOnly?: boolean;
  title?: string;
  featureId?: number;
  maxLength?: number;
  rows?: number;
  multiline?: boolean;
  numberWithDecimalOnly?: boolean;
  tooltipText?: string;
  noSpace?: boolean;
  floatingLabelClass?: string;
  commaSeparated?: boolean;
}

export const FloatingInput: React.FC<IUIFloatingInput> = ({
  name,
  required,
  placeholder,
  value,
  onChange,
  onBlur,
  touched,
  error,
  className,
  isAutocompletOpen,
  floatingLabel,
  disabled,
  readonly = false,
  numberOnly = false,
  alphabetOnly = false,
  isEmail = false,
  isUrl = false,
  isCopy = false,
  alphabetNumberOnly = false,
  title,
  featureId,
  maxLength,
  rows = 1,
  multiline = false,
  numberWithDecimalOnly,
  tooltipText,
  noSpace = false,
  floatingLabelClass,
  commaSeparated = false,
}) => {
  const dispatch = useDispatch();

  const [isFocused, setIsFocused] = useState(false);
  const [copyMessage, setCopyMessage] = useState<string | null>(null);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  const handleChange = (e: any) => {
    let newValue = e.target.value;
    const isEmpty = newValue === "";

    if (newValue.startsWith(" ")) {
      return;
    }

    if (noSpace && newValue.includes(" ")) {
      return;
    }

    if (maxLength && newValue.length > maxLength) {
      return;
    }

    if (commaSeparated) {
      newValue = newValue.replace(/,/g, "");
      e.target.value = newValue;
    }

    if (onChange) {
      if (numberOnly) {
        if (regExp.onlyNumbers.test(newValue) || isEmpty) {
          onChange(e);
        }
        return;
      } else if (alphabetOnly) {
        if (regExp.onlyAlphabet.test(newValue) || isEmpty) {
          onChange(e);
        }
        return;
      } else if (isEmail) {
        if (regExp.professionalEmail.test(newValue) || isEmpty) {
          onChange(e);
        }
        return;
      } else if (isUrl) {
        if (regExp.customUrl.test(newValue) || isEmpty) {
          onChange(e);
        }
        return;
      } else if (alphabetNumberOnly) {
        if (regExp.onlyAlphabetNumber.test(newValue) || isEmpty) {
          onChange(e);
        }
        return;
      } else if (numberWithDecimalOnly) {
        if (regExp.decimalNum.test(newValue) || isEmpty) {
          onChange(e);
        }
        return;
      } else {
        onChange(e);
      }
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(String(value)).then(() => {
      setCopyMessage("copied!");
      setTimeout(() => {
        setCopyMessage(null);
      }, 2000);
    });
  };

  let displayValue: string | number = value;

  if (numberOnly && typeof value === "string") {
    displayValue = value.replace(/[^0-9]/g, "");
  }

  if (commaSeparated && displayValue !== "") {
    const num = Number(displayValue.toString().replace(/,/g, ""));
    if (!isNaN(num)) {
      displayValue = num.toLocaleString("en-IN");
    }
  }

  return (
    <div className={`relative ${className}`}>
      {title && (
        <Text variant="D20" className="mb-2">
          {title}
        </Text>
      )}
      <Tooltip title={tooltipText ?? ""} arrow>
        <TextField
          id={name}
          className="w-full"
          name={name}
          placeholder={placeholder ?? ""}
          value={displayValue}
          onChange={(e: any) => {
            if (e.target.value !== " ") {
              handleChange(e);
            }
          }}
          error={error && touched ? true : false}
          onBlur={handleBlur}
          onFocus={handleFocus}
          disabled={disabled}
          multiline={multiline}
          rows={rows}
          InputProps={{
            style: {
              cursor: disabled ? "!no-drop" : "auto",
              height: rows === 1 ? "42px" : "auto",
              borderColor: error && touched ? colors.error : "inherit",
            },
            readOnly: readonly,
          }}
          sx={{
            "& input": {
              fontFamily: '"Lora", serif',
            },
            "& input::placeholder": {
              fontFamily: '"Lora", serif',
            },
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: error && touched ? colors.error : "inherit",
              },
              "&.Mui-focused fieldset": {
                borderColor: error && touched ? colors.error : "inherit",
              },
            },
          }}
        />
      </Tooltip>
      {floatingLabel && (
        <label
          htmlFor={name}
          className={`absolute top-2 text-sm left-3 text-primaryText-500 transition-all duration-300 transform bg-white px-1
            -translate-y-4 scale-75 origin-top-left peer-focus:-translate-y-4 peer-focus:scale-75 font-lora ${floatingLabelClass}`}
        >
          {floatingLabel} {required && <span className="text-error">*</span>}
        </label>
      )}

      {touched && error && !isAutocompletOpen && (
        <Text variant={TextVariant.error} className="mt-1 text-error">
          {getErrorMessage(error as string)}
        </Text>
      )}

      {isCopy && (
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 border shadow-md py-1 px-3 bg-background rounded"
          onClick={handleCopy}
        >
          {copyMessage || "copy"}
        </button>
      )}
    </div>
  );
};
