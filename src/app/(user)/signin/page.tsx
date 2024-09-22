// {
//   ("use client");
//   import React, { useState } from "react";
//   import Image from "next/image";
//   import { ErrorMessage, Field, Form, Formik } from "formik";
//   import * as Yup from "yup";
//   import Link from "next/link";
//   import HeroAuth from "../../components/hero-auth";

//   export interface PageProps {
//     email: string;
//     password: string;
//   }

//   const validationSchema = Yup.object({
//     email: Yup.string()
//       .required("Email is required")
//       .email("Invalid email address"),
//     password: Yup.string()
//       .min(8, "Password must be at least 8 characters")
//       .max(64, "Password is too long")
//       .required("Password is required"),
//   });

//   const initialValues: PageProps = {
//     email: "",
//     password: "",
//   };

//   export default function Page({}: PageProps) {
//     const [visible, setVisible] = useState(false);
//     return (
//       <div className="min-h-screen min-w-[320px] px-[20px] md:px-[32px] pb-[20px] md:pb-[32px]  flex flex-col">
//         <HeroAuth
//           imageUrl="/images/login_img.png"
//           imageAlt="Login image"
//           name="Rich"
//           birthday="21.09.2020"
//           emoji="🐶"
//           description="Rich would be the perfect addition to an active family that loves
//               to play and go on walks. I bet he would love having a doggy
//               playmate too!"
//         />
//         <div className="rounded-[30px] md:rounded-[60px] py-[60px] px-[20px] bg-red-400 flex flex-col items-center justify-center flex-1">
//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={(values) => {
//               console.log(values);
//             }}
//           >
//             {({ touched, errors }) => (
//               <Form>
//                 <div className="max-w-[295px] md:max-w-[424px]">
//                   <h1 className="text-[28px] md:text-[54px] text-[#262626] font-[700] leading-[1] tracking-tighter mb-[12px] md:mb-[16px]">
//                     Log in
//                   </h1>
//                   <p className="text-[14px] md:text-[18px] text-[#262626] font-[500] leading-[1.22] tracking-tight mb-[24px]  md:mb-[32px]">
//                     Welcome! Please enter your credentials to login to the
//                     platform:
//                   </p>
//                   <div className="flex gap-[10px] md:gap-[16px] flex-col mb-[40px]">
//                     <div>
//                       <div className="relative">
//                         <Field
//                           className={`w-[100%] border-[#757575] border-[1px] rounded-[30px] p-[12px] md:p-[16px] ${
//                             touched.email
//                               ? errors.email
//                                 ? "border-red-500"
//                                 : "border-green-500"
//                               : "border-gray-400"
//                           }`}
//                           placeholder="Email"
//                           type="email"
//                           name="email"
//                         />
//                         {touched.email && (
//                           <span className="absolute top-[50%] right-[15px] transform -translate-y-[50%]">
//                             <Image
//                               width={20}
//                               height={20}
//                               src={
//                                 errors.email
//                                   ? "/icons/cross-small.svg"
//                                   : "/icons/check.svg"
//                               }
//                               alt={
//                                 errors.password ? "invalid icon" : "valid icon"
//                               }
//                             />
//                           </span>
//                         )}
//                       </div>
//                       <ErrorMessage
//                         name="email"
//                         component="div"
//                         className={` ${
//                           (errors.email || touched.email) && "text-red-500"
//                         }`}
//                       />
//                     </div>
//                     <div>
//                       <div className="relative">
//                         <Field
//                           className={`w-[100%] border-[#757575] border-[1px] rounded-[30px] p-[12px] md:p-[16px] ${
//                             touched.password
//                               ? errors.password
//                                 ? "border-red-500"
//                                 : "border-green-500"
//                               : "border-gray-400"
//                           }`}
//                           placeholder="Password"
//                           type={visible ? "text" : "password"}
//                           name="password"
//                         />
//                         <button
//                           type="button"
//                           className="absolute top-[50%] right-[15px] -translate-y-[50%]"
//                           onClick={() => setVisible(!visible)}
//                         >
//                           <Image
//                             width={20}
//                             height={20}
//                             src={
//                               visible ? "/icons/eye.svg" : "/icons/eye-off.svg"
//                             }
//                             alt="exit icon"
//                           />
//                         </button>
//                         {touched.password && (
//                           <span className="absolute top-[50%] right-[50px] transform -translate-y-[50%]">
//                             <Image
//                               width={20}
//                               height={20}
//                               src={
//                                 errors.password
//                                   ? "/icons/cross-small.svg"
//                                   : "/icons/check.svg"
//                               }
//                               alt={
//                                 errors.password ? "invalid icon" : "valid icon"
//                               }
//                             />
//                           </span>
//                         )}
//                       </div>
//                       <ErrorMessage
//                         name="password"
//                         component="div"
//                         className={`${
//                           (errors.password || touched.password) &&
//                           "text-red-500"
//                         }`}
//                       />
//                     </div>
//                   </div>
//                   <button
//                     className="w-[100%] rounded-[30px] p-[12px] md:p-[16px] bg-[#f6b83d] text-[14px] md:text-[16px] font-[700] leading-tight tracking-tight text-white uppercase mb-[12px] md:mb-[16px]"
//                     type="submit"
//                   >
//                     log in
//                   </button>
//                   <p className="text-[12px] text-[#757575] font-[500] tracking-tight leading-[1.17] text-center">
//                     Don&apos;t have an account?&nbsp;
//                     <Link href={"/signup"} className="text-[#f6b83d] underline">
//                       Register
//                     </Link>
//                   </p>
//                 </div>
//               </Form>
//             )}
//           </Formik>
//         </div>
//       </div>
//     );
//   }
// }
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
