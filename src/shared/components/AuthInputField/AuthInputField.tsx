import React from "react";
import { Field, ErrorMessage } from "formik";
import clsx from "clsx";
import Icon from "../Icon/Icon";

interface AuthInputFieldProps {
  name: string;
  placeholder: string;
  type: string;
  showPasswordToggle?: boolean;
  isVisible?: boolean;
  toggleVisibility?: () => void;
  touched?: boolean;
  errors?: string;
}

const AuthInputField: React.FC<AuthInputFieldProps> = ({
  name,
  placeholder,
  type,
  showPasswordToggle = false,
  isVisible,
  toggleVisibility,
  touched,
  errors,
}) => {
  return (
    <div>
      <div className="relative">
        <Field
          className={clsx(
            "w-full border-[#757575] border-[1px] rounded-[30px] p-[12px] md:p-[16px] outline-none",
            {
              "border-red-500": touched && errors,
              "border-green-500": touched && !errors,
              "border-gray-400": !touched,
            }
          )}
          placeholder={placeholder}
          name={name}
          type={type === "password" && isVisible ? "text" : type}
        />
        {touched && (
          <span
            className={clsx(
              "absolute top-[50%] right-[15px] transform -translate-y-[50%]",
              { "right-[50px]": showPasswordToggle }
            )}
          >
            <Icon
              iconName={errors ? "icon-cross-small" : "icon-check"}
              width={20}
              height={20}
              className={clsx(
                "fill-none",
                errors ? " stroke-red-600" : "stroke-green-600"
              )}
            />
          </span>
        )}
        {showPasswordToggle && (
          <button
            type="button"
            className="absolute top-[50%] right-[15px] -translate-y-[50%]"
            onClick={toggleVisibility}
          >
            <Icon
              iconName={isVisible ? "icon-eye" : "icon-eye-off"}
              width={20}
              height={20}
              className="fill-none stroke-[#f6b83d]"
            />
          </button>
        )}
      </div>
      <ErrorMessage name={name} component="div" className="text-red-500" />
    </div>
  );
};

export default AuthInputField;
