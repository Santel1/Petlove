"use client";
import React, { useState } from "react";

import { signup } from "@/app/auth/auth";
import { SignupValidationSchema } from "@/app/auth/definitions";
import { FormikHelpers } from "formik";
import FormWrapper from "@/shared/components/FormWrapper/FormWrapper";
import AuthHeroImage from "@/shared/components/AuthHeroImage/AuthHeroImage";
import AuthInputField from "@/shared/components/AuthInputField/AuthInputField";
import Container from "@/shared/components/Container/Container";

export interface SignUpPageProps {}

const initialValues: SignUpPageProps = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpPage({}: SignUpPageProps) {
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
    <section>
      <Container>
        <div className="flex flex-col gap-[10px] md:gap-[16px]  xl:flex-row xl:gap-[10px] xl:h-[calc(100vh-120px)]">
          <AuthHeroImage
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
                <AuthInputField
                  name="name"
                  placeholder="Enter your name"
                  type="name"
                  touched={touched.name}
                  errors={errors.name}
                />
                <AuthInputField
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  touched={touched.email}
                  errors={errors.email}
                />
                <AuthInputField
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                  showPasswordToggle
                  isVisible={showPassword}
                  toggleVisibility={() => setShowPassword(!showPassword)}
                  touched={touched.password}
                  errors={errors.password}
                />
                <AuthInputField
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
      </Container>
    </section>
  );
}
