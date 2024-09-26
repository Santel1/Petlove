import { Form, Formik } from "formik";
import React from "react";

interface FormWrapperProps {
  title: string;
  description: string;
  buttonText: string;
  footerText: string;
  footerLink: string;
  footerLinkText: string;
  initialValues: {};
  validationSchema: {};
  onSubmit: (values: any) => void;
  children: (props: { touched: any; errors: any }) => React.ReactNode;
}

const FormWrapper: React.FC<FormWrapperProps> = ({
  title,
  description,
  buttonText,
  footerText,
  footerLink,
  footerLinkText,
  onSubmit,
  children,
  initialValues,
  validationSchema,
}) => {
  return (
    <div className="rounded-[30px] md:rounded-[60px] py-[60px] px-[20px] bg-white flex flex-col items-center justify-center xl:flex-1">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ touched, errors }) => (
          <Form className="w-full max-w-[295px] md:max-w-[424px]">
            <h1 className="text-[28px] md:text-[54px] text-[#262626] font-[700] leading-[1] tracking-tighter mb-[12px] md:mb-[16px]">
              {title}
            </h1>
            <p className="text-[14px] md:text-[18px] text-[#262626] font-[500] leading-[1.22] tracking-tight mb-[24px]  md:mb-[32px]">
              {description}
            </p>
            <div className="flex gap-[10px] md:gap-[16px] flex-col mb-[40px]">
              {children({ touched, errors })}
            </div>
            <button
              className="w-full rounded-[30px] p-[12px] md:p-[16px] bg-[#f6b83d] text-[14px] md:text-[16px] font-[700] leading-tight tracking-tight text-white uppercase mb-[12px] md:mb-[16px]"
              type="submit"
            >
              {buttonText}
            </button>

            <p className="text-[12px] text-[#757575] font-[500] tracking-tight leading-[1.17] text-center">
              {footerText}&nbsp;
              <a href={footerLink} className="text-[#f6b83d] underline">
                {footerLinkText}
              </a>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormWrapper;
