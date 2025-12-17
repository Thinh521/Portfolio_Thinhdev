"use client";

import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ContactFormValues } from "@/types/contact";

interface FormFieldProps {
  label: string;
  name: keyof ContactFormValues;
  register: UseFormRegister<ContactFormValues>;
  errors: FieldErrors<ContactFormValues>;
  type?: "text" | "email" | "tel" | "textarea";
  pattern?: {
    value: RegExp;
    message: string;
  };
}

export default function FormField({
  label,
  name,
  register,
  errors,
  type = "text",
  pattern,
}: FormFieldProps) {
  const error = errors[name];

  const baseStyle =
    "w-full bg-gray-100 dark:bg-neutral-800 border rounded-lg py-2 px-3 text-base outline-none transition-colors focus:ring-1";

  const normalStyle =
    "border-gray-200 dark:border-neutral-700/50 focus:ring-neutral-300 dark:focus:ring-neutral-700";

  const errorStyle =
    "border-red-500 focus:ring-red-400 dark:border-red-400 dark:focus:ring-red-500";

  const fieldClass = `${baseStyle} ${error ? errorStyle : normalStyle}`;

  const registerOptions = {
    required: `${label} là bắt buộc`,
    pattern,
  };

  return (
    <div className="mb-4 w-full">
      <label className="block mb-2 text-sm font-medium">{label}</label>

      {type === "textarea" ? (
        <textarea
          rows={3}
          {...register(name, registerOptions)}
          className={`${fieldClass} resize-none`}
        />
      ) : (
        <input
          type={type}
          {...register(name, registerOptions)}
          className={fieldClass}
        />
      )}

      {error && (
        <p className="mt-1 text-sm text-red-500">{error.message as string}</p>
      )}
    </div>
  );
}
