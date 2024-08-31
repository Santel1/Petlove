"use client";
import React, { useState } from "react";
import Header from "../components/header";
import Image from "next/image";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

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
    .max(64, "Password is too long")
    .required("Password is required"),
});

const initialValues: PageProps = {
  email: "",
  password: "",
};

export default function Page({}: PageProps) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="min-h-screen min-w-[320px] pt-[32px] pr-[20px] pl-[20px] pb-[20px] md:p-[32px] flex flex-col">
      <Header />
      <div className="bg-[#f6b83d] flex justify-center rounded-[34px] md:rounded-[60px] h-[280px] md:h-[302px]  mb-[10px] md:mb-[16px] md:flex-row-reverse flex-wrap md:items-center overflow-hidden relative bg-[url('/images/rectangle.png')] bg-no-repeat
    bg-[length:80%_auto] 
    md:bg-[length:80%_auto]
    bg-[position:center_30px]">
        <Image
          width={335}
          height={280}
          unoptimized
          className="translate-y-[-10%]"
          src="/images/login_img.png"
          alt="404 image"
        />
        <div className="hidden md:grid grid-flow-col gap-[8px] w-[294px] bg-white rounded-[20px] p-[16px] z-20">
          <div className="w-[60px] h-[60px] items-center flex justify-center rounded-full bg-[#FFF4DF]">
            <p className="text-[32px] overflow-hidden leading-none"> 🐶</p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <div className="flex items-center justify-between">
              <p className="font-[700] text-[16px] leading-tight text-[#f6b83d]">
                Rich
              </p>
              <p className=" font-[500] text-[12px] leading-[1.17] text-[#757575] tracking-tight">
                Birthday:&nbsp;
                <span className="text-[#262626]">21.09.2020</span>
              </p>
            </div>
            <p className="font-[500] text-[12px] leading-[1.17] tracking-tight text-gray-800">
              Rich would be the perfect addition to an active family that loves
              to play and go on walks. I bet he would love having a doggy
              playmate too!
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-[30px] md:rounded-[60px] py-[60px] px-[20px] bg-white flex flex-col items-center justify-center flex-1">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
          С
        >
          {({ touched, errors }) => (
            <Form>
              <div className="max-w-[295px] md:max-w-[424px]">
                <h1 className="text-[28px] md:text-[54px] text-[#262626] font-[700] leading-[1] tracking-tighter mb-[12px] md:mb-[16px]">
                  Log in
                </h1>
                <p className="text-[14px] md:text-[18px] text-[#262626] font-[500] leading-[1.22] tracking-tight mb-[24px]  md:mb-[32px]">
                  Welcome! Please enter your credentials to login to the
                  platform:
                </p>
                <div className="flex gap-[10px] md:gap-[16px] flex-col mb-[40px]">
                  <div>
                    <div className="relative">
                      {/* <label htmlFor="email">Email</label> */}
                      <Field
                        className={`w-[100%] border-[#757575] border-[1px] rounded-[30px] p-[12px] md:p-[16px] ${
                          touched.email
                            ? errors.email
                              ? "border-red-500"
                              : "border-green-500"
                            : "border-gray-400"
                        }`}
                        placeholder="Email"
                        type="email"
                        name="email"
                      />
                      {touched.email && (
                        <span className="absolute top-[50%] right-[15px] transform -translate-y-[50%]">
                          <Image
                            width={20}
                            height={20}
                            src={
                              errors.email
                                ? "/icons/cross-small.svg"
                                : "/icons/check.svg"
                            }
                            alt={
                              errors.password ? "invalid icon" : "valid icon"
                            }
                          />
                        </span>
                      )}
                    </div>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className={` ${
                        (errors.email || touched.email) && "text-red-500"
                      }`}
                    />
                  </div>
                  <div>
                    <div className="relative">
                      {/* <label htmlFor="password">Password</label> */}
                      <Field
                        className={`w-[100%] border-[#757575] border-[1px] rounded-[30px] p-[12px] md:p-[16px] ${
                          touched.password
                            ? errors.password
                              ? "border-red-500"
                              : "border-green-500"
                            : "border-gray-400"
                        }`}
                        placeholder="Password"
                        type={visible ? "text" : "password"}
                        name="password"
                      />
                      <button
                        type="button"
                        className="absolute top-[50%] right-[15px] -translate-y-[50%]"
                        onClick={() => setVisible(!visible)}
                      >
                        <Image
                          width={20}
                          height={20}
                          src={
                            visible ? "/icons/eye.svg" : "/icons/eye-off.svg"
                          }
                          alt="exit icon"
                        />
                      </button>
                      {touched.password && (
                        <span className="absolute top-[50%] right-[50px] transform -translate-y-[50%]">
                          <Image
                            width={20}
                            height={20}
                            src={
                              errors.password
                                ? "/icons/cross-small.svg"
                                : "/icons/check.svg"
                            }
                            alt={
                              errors.password ? "invalid icon" : "valid icon"
                            }
                          />
                        </span>
                      )}
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className={`${
                        (errors.password || touched.password) && "text-red-500"
                      }`}
                    />
                  </div>
                </div>
                <button
                  className="w-[100%] rounded-[30px] p-[12px] md:p-[16px] bg-[#f6b83d] text-[14px] md:text-[16px] font-[700] leading-tight tracking-tight text-white uppercase mb-[12px] md:mb-[16px]"
                  type="submit"
                >
                  log in
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <p className="text-[12px] text-[#757575] font-[500] tracking-tight leading-[1.17] text-center">
          Don&apos;t have an account?&nbsp;
          <Link href={"/signup"} className="text-[#f6b83d] underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
