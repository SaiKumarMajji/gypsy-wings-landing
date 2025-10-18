"use client";
import { regExp } from "@/utils/regex";
import React, { useState } from "react";
import { Text, TextVariant } from "../text";
import { getErrorMessage } from "@/constants/getMessages";
import { cn } from "@/lib/utils";

interface IUIFloatingTextArea {
  name: string;
  required?: boolean;
  placeholder?: string;
  floatingLabel?: string;
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => any;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => any;
  touched?: boolean | undefined;
  error?: string | string[] | undefined;
  className?: string;
  isAutocompletOpen?: boolean;
  isPlaceholder?: string;
  disabled?: boolean;
  numberOnly?: boolean;
  alphabetOnly?: boolean;
  isCopy?: boolean;
  textHeightClass?: string;
}

export const FloatingTextArea: React.FC<IUIFloatingTextArea> = ({
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
  isPlaceholder,
  floatingLabel,
  disabled,
  numberOnly,
  alphabetOnly,
  isCopy = false,
  textHeightClass,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [copyMessage, setCopyMessage] = useState<string | null>(null);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (
      numberOnly &&
      !regExp.onlyNumbers.test(e.key) &&
      e.key !== "Backspace"
    ) {
      e.preventDefault();
    } else if (
      alphabetOnly &&
      !regExp.onlyAlphabet.test(e.key) &&
      e.key !== "Backspace"
    ) {
      e.preventDefault();
    }
  };

  const displayValue = numberOnly
    ? value
    : isFocused || value === "" || value === undefined
    ? value
    : `${value} ${isPlaceholder ? isPlaceholder : ""}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(String(value)).then(() => {
      setCopyMessage("copied!");
      setTimeout(() => {
        setCopyMessage(null);
      }, 2000);
    });
  };

  return (
    <div className={`relative ${className}`}>
      <textarea
        id={name}
        className={cn(
          `${textHeightClass} peer font-lora px-3 py-2 w-full border-2 placeholder:text-sm  bg-white border-primaryText-300 rounded-md text-primaryText-900 focus:outline-none focus:border-blue-500 focus:ring-0 transition-all duration-300 ${
            error && touched ? "border-error" : ""
          }`
        )}
        name={name}
        placeholder={!isFocused ? placeholder : ""}
        value={numberOnly ? displayValue : value}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        disabled={disabled}
        onKeyDown={numberOnly || alphabetOnly ? handleKeyDown : undefined}
      />
      {floatingLabel && (
        <label
          htmlFor={name}
          className={`absolute top-2 text-sm left-3 text-primaryText-500 transition-all duration-300 transform bg-white px-1
            -translate-y-4 scale-75 origin-top-left peer-focus:-translate-y-4 peer-focus:scale-75 font-lora`}
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
          className="absolute right-4 bottom-0 transform -translate-y-1/2 border shadow-md py-1 px-3 bg-background rounded"
          onClick={handleCopy}
        >
          {copyMessage || "copy"}
        </button>
      )}
    </div>
  );
};
