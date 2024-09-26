import React from "react";
import { Field, ErrorMessage } from "formik";
import Image from "next/image";
import clsx from "clsx";

interface InputFieldProps {
  name: string;
  placeholder: string;
  type: string;
  showPasswordToggle?: boolean;
  isVisible?: boolean;
  toggleVisibility?: () => void;
  touched?: boolean;
  errors?: string;
}

const InputField: React.FC<InputFieldProps> = ({
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
            "w-full border-[#757575] border-[1px] rounded-[30px] p-[12px] md:p-[16px]",
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
            <Image
              width={20}
              height={20}
              src={errors ? "/icons/cross-small.svg" : "/icons/check.svg"}
              alt={errors ? "invalid icon" : "valid icon"}
            />
          </span>
        )}
        {showPasswordToggle && (
          <button
            type="button"
            className="absolute top-[50%] right-[15px] -translate-y-[50%]"
            onClick={toggleVisibility}
          >
            <Image
              width={20}
              height={20}
              src={isVisible ? "/icons/eye.svg" : "/icons/eye-off.svg"}
              alt={isVisible ? "Hide password" : "Show password"}
            />
          </button>
        )}
      </div>
      <ErrorMessage name={name} component="div" className="text-red-500" />
    </div>
  );
};

export default InputField;
