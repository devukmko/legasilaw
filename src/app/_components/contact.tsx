"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Container from "@/components/core/container";
import Image from "next/image";
import Typography from "@/components/core/typography";
import toast from "react-hot-toast";
import { createFeedback } from "@/libs/feedback";
import Link from "next/link";

// Zod Schema for validation
const contactSchema = z.object({
  name: z.string().min(1, "Nama harus diisi"),
  phone: z
    .string()
    .min(1, "Nomor handphone harus diisi")
    .regex(/^[0-9+-]+$/, "Nomor handphone tidak valid"),
  email: z.string().email("Format email tidak tepat").or(z.literal("")).optional().nullable(),
  message: z
    .string()
    .min(1, "Pesan harus diisi")
    .max(512, "Maks. 512 karakter"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const SocialGroup = () => {
  return (
    <div className="gap-2 flex-col flex">
      <Link href="https://web.facebook.com/profile.php?id=615702074832630" target="_blank" className="flex flex-row gap-2  items-center">
        <div>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_43_192)">
              <path
                d="M24 12.5C24 5.87264 18.6274 0.5 12 0.5C5.37264 0.5 0 5.87264 0 12.5C0 18.1275 3.87456 22.8498 9.10128 24.1467V16.1672H6.62688V12.5H9.10128V10.9198C9.10128 6.83552 10.9498 4.9424 14.9597 4.9424C15.72 4.9424 17.0318 5.09168 17.5685 5.24048V8.56448C17.2853 8.53472 16.7933 8.51984 16.1822 8.51984C14.2147 8.51984 13.4544 9.26528 13.4544 11.203V12.5H17.3741L16.7006 16.1672H13.4544V24.4122C19.3963 23.6946 24.0005 18.6354 24.0005 12.5H24Z"
                fill="white"
              />
              <path
                d="M16.7002 16.1672L17.3736 12.5H13.4539V11.203C13.4539 9.26528 14.2142 8.51984 16.1818 8.51984C16.7928 8.51984 17.2848 8.53472 17.568 8.56448V5.24048C17.0314 5.0912 15.7195 4.9424 14.9592 4.9424C10.9493 4.9424 9.1008 6.83552 9.1008 10.9198V12.5H6.6264V16.1672H9.1008V24.1467C10.0291 24.3771 11.0002 24.5 11.9995 24.5C12.4915 24.5 12.9768 24.4698 13.4534 24.4122V16.1672H16.6997H16.7002Z"
                fill="#212121"
              />
            </g>
            <defs>
              <clipPath id="clip0_43_192">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <Typography variant="body2" className="text-white text-sm flex-1">
          Legasi Law Firm
        </Typography>
      </Link>
      <div className="flex flex-row gap-2 items-center">
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_184_110"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="25"
          >
            <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_184_110)">
            <path
              d="M4 20.5C3.45 20.5 2.97917 20.3042 2.5875 19.9125C2.19583 19.5208 2 19.05 2 18.5V6.5C2 5.95 2.19583 5.47917 2.5875 5.0875C2.97917 4.69583 3.45 4.5 4 4.5H20C20.55 4.5 21.0208 4.69583 21.4125 5.0875C21.8042 5.47917 22 5.95 22 6.5V18.5C22 19.05 21.8042 19.5208 21.4125 19.9125C21.0208 20.3042 20.55 20.5 20 20.5H4ZM12 13.325C12.0833 13.325 12.1708 13.3125 12.2625 13.2875C12.3542 13.2625 12.4417 13.225 12.525 13.175L19.6 8.75C19.7333 8.66667 19.8333 8.5625 19.9 8.4375C19.9667 8.3125 20 8.175 20 8.025C20 7.69167 19.8583 7.44167 19.575 7.275C19.2917 7.10833 19 7.11667 18.7 7.3L12 11.5L5.3 7.3C5 7.11667 4.70833 7.1125 4.425 7.2875C4.14167 7.4625 4 7.70833 4 8.025C4 8.19167 4.03333 8.3375 4.1 8.4625C4.16667 8.5875 4.26667 8.68333 4.4 8.75L11.475 13.175C11.5583 13.225 11.6458 13.2625 11.7375 13.2875C11.8292 13.3125 11.9167 13.325 12 13.325Z"
              fill="white"
            />
          </g>
        </svg>

        <Typography variant="body2" className="text-white text-sm">
          info@legasilaw.com
        </Typography>
      </div>
      <div className="flex flex-row gap-2  items-center">
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_184_115"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="25"
          >
            <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_184_115)">
            <path
              d="M5 21.5C4.45 21.5 3.97917 21.3042 3.5875 20.9125C3.19583 20.5208 3 20.05 3 19.5V9.5C3 8.95 3.19583 8.47917 3.5875 8.0875C3.97917 7.69583 4.45 7.5 5 7.5H7V5.5C7 4.95 7.19583 4.47917 7.5875 4.0875C7.97917 3.69583 8.45 3.5 9 3.5H15C15.55 3.5 16.0208 3.69583 16.4125 4.0875C16.8042 4.47917 17 4.95 17 5.5V11.5H19C19.55 11.5 20.0208 11.6958 20.4125 12.0875C20.8042 12.4792 21 12.95 21 13.5V19.5C21 20.05 20.8042 20.5208 20.4125 20.9125C20.0208 21.3042 19.55 21.5 19 21.5H13V17.5H11V21.5H5ZM5 19.5H7V17.5H5V19.5ZM5 15.5H7V13.5H5V15.5ZM5 11.5H7V9.5H5V11.5ZM9 15.5H11V13.5H9V15.5ZM9 11.5H11V9.5H9V11.5ZM9 7.5H11V5.5H9V7.5ZM13 15.5H15V13.5H13V15.5ZM13 11.5H15V9.5H13V11.5ZM13 7.5H15V5.5H13V7.5ZM17 19.5H19V17.5H17V19.5ZM17 15.5H19V13.5H17V15.5Z"
              fill="white"
            />
          </g>
        </svg>

        <Typography variant="body2" className="text-white text-sm">
          Tower Mahakam Lt. GF, Jababeka Cikarang, Bekasi.
        </Typography>
      </div>
    </div>
  );
};

const Contact = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
      email: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    return toast
      .promise(
        createFeedback({
          email: data.email || '',
          fullname: data.name,
          message: data.message,
          phoneNumber: data.phone,
        }),
        {
          success: "Pesan berhasil dikirim",
          error: "Terjadi kesalahan :(",
          loading: "Loading...",
        },
        {
          success: {
            duration: 4000,
            position: "top-center",
            style: {
              background: "#4caf50",
              color: "#fff",
              borderRadius: "8px",
              padding: "16px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            },
            icon: "✅",
          },
        }
      )
      .then(() => {
        reset();
      });
  };

  return (
    <section className="pb-10 bg-neutral" id="contact">
      <Container gutter>
        <Typography
          variant="h1"
          className="text-white text-center block md:hidden"
          style={{ fontSize: "1.5rem" }}
        >
          Hubungi Kami
        </Typography>
        <div className="relative z-10 py-10">
          <div className="container mx-auto px-3 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white p-3 md:p-12 rounded-lg shadow-md"
            >
              <div className="mb-6">
                <label className="block text-sm font-bold mb-2">Nama</label>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="w-full px-4 py-2 border rounded-md outline outline-1 placeholder-gray-300"
                      placeholder="Cth. Samantha"
                    />
                  )}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm p-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold mb-2">
                  Nomor Handphone
                </label>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="w-full px-4 py-2 border rounded-md outline outline-1 placeholder-gray-300"
                      placeholder="Cth. 081234567890"
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm p-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <div className="flex flex-row gap-2">
                  <label className="block text-sm font-bold mb-2">Email</label>
                  <label className="block text-sm font-bold mb-2 text-gray-300">
                    (Optional)
                  </label>
                </div>
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange, value, ...rest } }) => (
                    <input
                      // onChange={(e) => {
                      //   onChange(e.target.value);
                      // }}
                      type="email"
                      onChange={(e) => {
                        onChange( e.target.value)
                      }}
                      {...rest}
                      value={value || ''}
                      className="w-full px-4 py-2 border rounded-md outline outline-1 placeholder-gray-300"
                      placeholder="Cth. samantha@email.com"
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm p-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold mb-2">Pesan</label>
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      className="w-full px-4 py-2 border rounded-md outline-1 outline placeholder-gray-300"
                      rows={3}
                      placeholder="Tulis pesan di sini..."
                    ></textarea>
                  )}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button type="submit" className="btn btn-primary w-full text-white shadow-md">
                Kirim Pesan
              </button>
            </form>

            {/* Contact Info */}
            <div className="flex flex-col flex-1 items-start lg:items-center justify-center w-full md:w-2/3 m-auto">
              <div className="flex flex-col gap-4 w-full">
                <Typography variant="h1" className="text-white hidden md:block">
                  Hubungi Kami
                </Typography>
                {/* Additional Contact Info */}
                <div className="gap-10 flex-col-reverse md:flex-col flex w-full">
                  <SocialGroup />
                  <div className="mt-8 w-full hidden md:flex">
                    <Image
                      src="/images/logo.png"
                      alt="logo"
                      fill={false}
                      width={200}
                      height={74}
                    />
                  </div>
                  <div className="mt-8 justify-center items-center w-full flex md:hidden">
                    <Image
                      src="/images/logo.png"
                      alt="logo"
                      fill={false}
                      width={150}
                      height={74}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
