"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import HeroAuth from "../../components/hero-auth";
import FormWrapper from "@/app/components/form-wrapper";
import InputField from "@/app/components/input-fields";

export interface PageProps {
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(24, "Password is too long")
    .required("Password is required"),
});

const initialValues: PageProps = {
  email: "",
  password: "",
};

export default function Page({}: PageProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <div className="flex flex-col gap-[10px] md:gap-[16px] min-w-[320px] px-[20px] md:px-[32px] pb-[20px] lg:flex-row md:pb-[32px] lg:gap-[10px] lg:h-[calc(100vh-89px)]">
      <HeroAuth
        imageUrl="/images/login_img.png"
        imageAlt="Login image"
        name="Rich"
        birthday="21.09.2020"
        emoji="🐶"
        description="Rich would be the perfect addition to an active family that loves
              to play and go on walks. I bet he would love having a doggy
              playmate too!"
      />
      <FormWrapper
        title=" Log in"
        description=" Welcome! Please enter your credentials to login to the
                  platform:"
        buttonText=" Login"
        footerText="Don't have an account?&nbsp;"
        footerLink="/signup"
        footerLinkText="Register"
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors }) => (
          <>
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
          </>
        )}
      </FormWrapper>
    </div>
  );
}
