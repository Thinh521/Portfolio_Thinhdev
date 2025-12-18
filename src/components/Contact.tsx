"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import Section from "./ui/Section";
import Heading from "./ui/Heading";
import FormField from "./FormField";

import { ContactFormValues } from "@/types/contact";
import Button from "./ui/Button/Button";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    mode: "onChange",
  });

  const onSubmit = async (data: ContactFormValues) => {
    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/xkgjknda", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Submit failed");

      toast.success("Cảm ơn bạn! Tin nhắn đã được gửi.");
      reset();
    } catch {
      toast.error("Có lỗi xảy ra, vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact">
      <Heading title="Contact" subtitle="Feel free to reach out" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 max-w-xl mx-auto"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            label="Họ và tên"
            name="name"
            register={register}
            errors={errors}
          />

          <FormField
            label="Số điện thoại"
            name="phone"
            type="tel"
            register={register}
            errors={errors}
            pattern={{
              value: /^[0-9]{9,11}$/,
              message: "Số điện thoại không hợp lệ",
            }}
          />
        </div>

        <FormField
          label="Email của bạn"
          name="email"
          type="email"
          register={register}
          errors={errors}
          pattern={{
            value: /^\S+@\S+$/i,
            message: "Email không hợp lệ",
          }}
        />

        <FormField
          label="Nội dung"
          name="message"
          type="textarea"
          register={register}
          errors={errors}
        />

        <Button
          type="submit"
          disabled={loading}
          className="mt-2 disabled:opacity-50"
        >
          {loading ? "Đang gửi..." : "Gửi tin nhắn"}
        </Button>
      </form>
    </Section>
  );
}
