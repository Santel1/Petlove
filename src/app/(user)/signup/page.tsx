"use client";
import React, { useState } from "react";
import HeroAuth from "../../../components/hero-auth";
import * as Yup from "yup";
import InputField from "@/components/input-fields";
import FormWrapper from "@/components/form-wrapper";

export interface PageProps {}

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required").min(3),
  email: Yup.string()
    .email("Enter a valid Email")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(24, "Password is too long"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Password confirmation is required")
    .min(8),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Page({}: PageProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values: any) => {
    console.log(values);
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
        footerLink="/login"
        footerLinkText="Log In"
        initialValues={initialValues}
        validationSchema={validationSchema}
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
