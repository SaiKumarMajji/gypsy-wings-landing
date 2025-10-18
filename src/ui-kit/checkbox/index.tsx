"use client";

import React from "react";
import { FormControlLabel } from "@mui/material";
import { palette } from "@/theme";
import { Text, TextVariant } from "../text";
import { getErrorMessage } from "@/constants/getMessages";

interface UICheckboxProps {
  name: string;
  title?: string;
  value: boolean;
  onChange: (name: string, checked: boolean, extraValue?: any) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  touched?: boolean;
  error?: string;
  className?: string;
  disabled?: boolean;
  extraValue?: any;
  required?: boolean;
  label?: React.ReactNode | string;
  checkboxColor?: string;
  checkedBgColor?: string;
  size?: number;
  tickSizeRatio?: number;
  customBorderRadius?: string;
}

export const UICheckbox: React.FC<UICheckboxProps> = ({
  name,
  title,
  value,
  onChange,
  onBlur,
  touched,
  error,
  className,
  disabled,
  extraValue,
  required,
  label,
  checkboxColor = palette.gray,
  checkedBgColor = "hsl(var(--primary))",
  size = 20,
  tickSizeRatio = 0.6,
  customBorderRadius = "3px",
}) => {
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) onBlur(e);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(name, event.target.checked, extraValue);
  };

  return (
    <div className={`relative ${className}`}>
      {title && (
        <Text variant="D20" className="mb-2">
          {title} {required && <span className="text-error">*</span>}
        </Text>
      )}
      <FormControlLabel
        control={
          <div
            style={{
              position: "relative",
              width: `${size}px`,
              height: `${size}px`,
              marginRight: "10px",
            }}
          >
            <input
              type="checkbox"
              checked={value}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={disabled}
              name={name}
              style={{
                appearance: "none",
                width: "100%",
                height: "100%",
                border: value
                  ? "none"
                  : `2px solid ${
                      touched && error ? palette.scarletRed : checkboxColor
                    }`,
                borderRadius: `${customBorderRadius}`,
                outline: "none",
                cursor: "pointer",
                backgroundColor: value ? checkedBgColor : "transparent",
              }}
            />
            {value && (
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: palette.white,
                  fontSize: `${size * tickSizeRatio}px`,
                  pointerEvents: "none",
                }}
              >
                ✓
              </span>
            )}
          </div>
        }
        label={
          <span
            style={{
              fontSize: "16px",
              color: palette.black,
            }}
          >
            {label}
          </span>
        }
        style={{
          marginLeft: "0",
        }}
      />
      {touched && error && (
        <Text variant={TextVariant.error} className="mt-1 text-error">
          {getErrorMessage(error)}
        </Text>
      )}
    </div>
  );
};
