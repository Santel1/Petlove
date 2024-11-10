"use client";
import React, { useState } from "react";
import HeroAuth from "../../../components/hero-auth";
import InputField from "@/components/input-fields";
import FormWrapper from "@/components/form-wrapper";
import { signup } from "@/auth/auth";
import { SignupValidationSchema } from "@/auth/definitions";
import { FormikHelpers } from "formik";

export interface PageProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: PageProps = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Page({}: PageProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (
    values: any,
    { setErrors, resetForm }: FormikHelpers<any>
  ) => {
    try {
      const data = await signup(values.name, values.email, values.password);
      console.log("Авторизирован пользователь:", data);
      resetForm();
    } catch (error: any) {
      let errorMessage;
      try {
        const parsedError = JSON.parse(error.message);
        errorMessage = parsedError?.message || "Unknown error";
      } catch (parseError) {
        errorMessage = error.message;
      }

      console.log(errorMessage);

      if (errorMessage) {
        setErrors({
          email: " ",
          password: errorMessage,
        });
      }
    }
  };

  return (
    <div className="flex flex-col gap-[10px] md:gap-[16px]  xl:flex-row xl:gap-[10px] xl:h-[calc(100vh-89px)]">
      <HeroAuth
        imageUrl="/images/register_img.png"
        imageAlt="Register image"
        name="Jack"
        birthday="18.10.2010"
        emoji="🐈"
        description=" Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys."
      />

      <FormWrapper
        title="Registration"
        description="Thank you for your interest in our platform."
        buttonText="Register"
        footerText="Don't have an account?"
        footerLink="/signin"
        footerLinkText="Log In"
        initialValues={initialValues}
        validationSchema={SignupValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors }) => (
          <>
            <InputField
              name="name"
              placeholder="Enter your name"
              type="name"
              touched={touched.name}
              errors={errors.name}
            />
            <InputField
              name="email"
              placeholder="Enter your email"
              type="email"
              touched={touched.email}
              errors={errors.email}
            />
            <InputField
              name="password"
              placeholder="Enter your password"
              type="password"
              showPasswordToggle
              isVisible={showPassword}
              toggleVisibility={() => setShowPassword(!showPassword)}
              touched={touched.password}
              errors={errors.password}
            />
            <InputField
              name="confirmPassword"
              placeholder="Confirm your password"
              type="password"
              showPasswordToggle
              isVisible={showPassword}
              toggleVisibility={() => setShowPassword(!showPassword)}
              touched={touched.confirmPassword}
              errors={errors.confirmPassword}
            />
          </>
        )}
      </FormWrapper>
    </div>
  );
}
