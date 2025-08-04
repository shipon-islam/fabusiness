"use client";
import { contactYupSchema } from "@/yup/contactYupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "../Button";
import InputBox from "../InputBox";

export default function ContactUsSection() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactYupSchema),
  });
  const onSubmit = async (data) => {
    setLoading("true");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        reset();
        setLoading(false);
        toast.success("Email sent successfully");
      } else {
        setLoading(false);
        const errorText = await response.text();
        toast.error(`Failed to send email: ${errorText}`);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <section className="mt-12 lg:mt-20">
      <div className="container md:!px-28 lg:!px-8 grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1066.8228225624944!2d-73.80246497655232!3d40.69411771743195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c260d3ef711a9f%3A0x55b216a74f9e7334!2s14661%20107th%20Ave!5e1!3m2!1sen!2sbd!4v1748878271921!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md min-h-[300px] md:min-h-[350px]"
          ></iframe>
        </div>
        <div>
          <div>
            <h5 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-darkSlate">
              Contact Section
            </h5>
            <p className="mt-3 lg:mt-4 mb-8 lg:mb-10 font-medium sm:text-lg font-roboto text-darkSlate">
              The team at FA Business & Tax Solutions Inc. is here to help.
              Reach out today and experience financial services built on trust,
              clarity, and real results
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <InputBox
              label="Full Name"
              {...register("name")}
              error={errors?.name}
            />
            <InputBox
              label="Email address"
              {...register("email")}
              error={errors?.email}
            />
            <InputBox
              label="Mobile Number"
              {...register("phone")}
              error={errors?.phone}
            />
            <InputBox
              label="Message"
              {...register("message")}
              error={errors?.message}
            />
            <Button
              name={loading ? "Sending..." : "Submit"}
              className="px-10 inline w-fit text-white"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
