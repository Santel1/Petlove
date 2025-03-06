"use client";
import React, { useState } from "react";

import { signin } from "@/app/auth/auth";
import { SigninValidationSchema } from "@/app/auth/definitions";
import { FormikHelpers } from "formik";
import FormWrapper from "@/shared/components/FormWrapper/FormWrapper";
import AuthHeroImage from "@/shared/components/AuthHeroImage/AuthHeroImage";
import AuthInputField from "@/shared/components/AuthInputField/AuthInputField";
import Container from "@/shared/components/Container/Container";

export interface SignInPageProps {}

const initialValues: SignInPageProps = {
  email: "",
  password: "",
};

export default function SignInPage({}: SignInPageProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (
    values: any,
    { setErrors, resetForm }: FormikHelpers<any>
  ) => {
    try {
      const data = await signin(values.email, values.password);
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
        <div className="flex flex-col gap-[10px] md:gap-[16px] xl:flex-row xl:gap-[10px] xl:h-[calc(100vh-120px)]">
          <AuthHeroImage
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
            title="Log in"
            description="Welcome! Please enter your credentials to login to the
                  platform:"
            buttonText=" Login"
            footerText="Don't have an account?&nbsp;"
            footerLink="/signup"
            footerLinkText="Register"
            initialValues={initialValues}
            validationSchema={SigninValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ touched, errors }) => (
              <>
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
              </>
            )}
          </FormWrapper>
        </div>
      </Container>
    </section>
  );
}
