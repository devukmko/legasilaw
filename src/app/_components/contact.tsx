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

// Zod Schema for validation
const contactSchema = z.object({
  name: z.string().min(1, "Nama harus diisi"),
  phone: z
    .string()
    .min(1, "Nomor handphone harus diisi")
    .regex(/^[0-9+-]+$/, "Nomor handphone tidak valid"),
  email: z
    .string()
    .email("Format email tidak tepat")
    .optional(),
  message: z
    .string()
    .min(1, "Pesan harus diisi")
    .max(512, "Maks. 512 karakter"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const SocialGroup = () => {
  return (
    <div className="gap-2 flex-col flex">
      <div className="flex flex-row gap-2">
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
        <Typography variant="body2" className="text-white text-sm">
          Legasi Law Firm
        </Typography>
      </div>
      {/* <div className="flex flex-row gap-2">
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_43_195)">
            <path
              d="M12 2.66094C15.2063 2.66094 15.5859 2.675 16.8469 2.73125C18.0188 2.78281 18.6516 2.97969 19.0734 3.14375C19.6313 3.35938 20.0344 3.62188 20.4516 4.03906C20.8734 4.46094 21.1313 4.85938 21.3469 5.41719C21.5109 5.83906 21.7078 6.47656 21.7594 7.64375C21.8156 8.90937 21.8297 9.28906 21.8297 12.4906C21.8297 15.6969 21.8156 16.0766 21.7594 17.3375C21.7078 18.5094 21.5109 19.1422 21.3469 19.5641C21.1313 20.1219 20.8687 20.525 20.4516 20.9422C20.0297 21.3641 19.6313 21.6219 19.0734 21.8375C18.6516 22.0016 18.0141 22.1984 16.8469 22.25C15.5813 22.3062 15.2016 22.3203 12 22.3203C8.79375 22.3203 8.41406 22.3062 7.15313 22.25C5.98125 22.1984 5.34844 22.0016 4.92656 21.8375C4.36875 21.6219 3.96563 21.3594 3.54844 20.9422C3.12656 20.5203 2.86875 20.1219 2.65313 19.5641C2.48906 19.1422 2.29219 18.5047 2.24063 17.3375C2.18438 16.0719 2.17031 15.6922 2.17031 12.4906C2.17031 9.28438 2.18438 8.90469 2.24063 7.64375C2.29219 6.47187 2.48906 5.83906 2.65313 5.41719C2.86875 4.85938 3.13125 4.45625 3.54844 4.03906C3.97031 3.61719 4.36875 3.35938 4.92656 3.14375C5.34844 2.97969 5.98594 2.78281 7.15313 2.73125C8.41406 2.675 8.79375 2.66094 12 2.66094ZM12 0.5C8.74219 0.5 8.33438 0.514062 7.05469 0.570312C5.77969 0.626563 4.90313 0.832812 4.14375 1.12812C3.35156 1.4375 2.68125 1.84531 2.01563 2.51562C1.34531 3.18125 0.9375 3.85156 0.628125 4.63906C0.332812 5.40313 0.126563 6.275 0.0703125 7.55C0.0140625 8.83437 0 9.24219 0 12.5C0 15.7578 0.0140625 16.1656 0.0703125 17.4453C0.126563 18.7203 0.332812 19.5969 0.628125 20.3563C0.9375 21.1484 1.34531 21.8188 2.01563 22.4844C2.68125 23.15 3.35156 23.5625 4.13906 23.8672C4.90313 24.1625 5.775 24.3687 7.05 24.425C8.32969 24.4812 8.7375 24.4953 11.9953 24.4953C15.2531 24.4953 15.6609 24.4812 16.9406 24.425C18.2156 24.3687 19.0922 24.1625 19.8516 23.8672C20.6391 23.5625 21.3094 23.15 21.975 22.4844C22.6406 21.8188 23.0531 21.1484 23.3578 20.3609C23.6531 19.5969 23.8594 18.725 23.9156 17.45C23.9719 16.1703 23.9859 15.7625 23.9859 12.5047C23.9859 9.24688 23.9719 8.83906 23.9156 7.55938C23.8594 6.28438 23.6531 5.40781 23.3578 4.64844C23.0625 3.85156 22.6547 3.18125 21.9844 2.51562C21.3188 1.85 20.6484 1.4375 19.8609 1.13281C19.0969 0.8375 18.225 0.63125 16.95 0.575C15.6656 0.514063 15.2578 0.5 12 0.5Z"
              fill="white"
            />
            <path
              d="M12 6.33594C8.59688 6.33594 5.83594 9.09688 5.83594 12.5C5.83594 15.9031 8.59688 18.6641 12 18.6641C15.4031 18.6641 18.1641 15.9031 18.1641 12.5C18.1641 9.09688 15.4031 6.33594 12 6.33594ZM12 16.4984C9.79219 16.4984 8.00156 14.7078 8.00156 12.5C8.00156 10.2922 9.79219 8.50156 12 8.50156C14.2078 8.50156 15.9984 10.2922 15.9984 12.5C15.9984 14.7078 14.2078 16.4984 12 16.4984Z"
              fill="white"
            />
            <path
              d="M19.8469 6.0922C19.8469 6.88908 19.2 7.53127 18.4078 7.53127C17.6109 7.53127 16.9688 6.88439 16.9688 6.0922C16.9688 5.29533 17.6156 4.65314 18.4078 4.65314C19.2 4.65314 19.8469 5.30001 19.8469 6.0922Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_43_195">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <Typography variant="body2" className="text-white  text-sm">
          Instagram
        </Typography>
      </div> */}
      <div className="flex flex-row gap-2">
        <svg
          width="20"
          height="17"
          viewBox="0 0 20 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 16.5C1.45 16.5 0.979167 16.3042 0.5875 15.9125C0.195833 15.5208 0 15.05 0 14.5V2.5C0 1.95 0.195833 1.47917 0.5875 1.0875C0.979167 0.695833 1.45 0.5 2 0.5H18C18.55 0.5 19.0208 0.695833 19.4125 1.0875C19.8042 1.47917 20 1.95 20 2.5V14.5C20 15.05 19.8042 15.5208 19.4125 15.9125C19.0208 16.3042 18.55 16.5 18 16.5H2ZM10 9.325C10.0833 9.325 10.1708 9.3125 10.2625 9.2875C10.3542 9.2625 10.4417 9.225 10.525 9.175L17.6 4.75C17.7333 4.66667 17.8333 4.5625 17.9 4.4375C17.9667 4.3125 18 4.175 18 4.025C18 3.69167 17.8583 3.44167 17.575 3.275C17.2917 3.10833 17 3.11667 16.7 3.3L10 7.5L3.3 3.3C3 3.11667 2.70833 3.1125 2.425 3.2875C2.14167 3.4625 2 3.70833 2 4.025C2 4.19167 2.03333 4.3375 2.1 4.4625C2.16667 4.5875 2.26667 4.68333 2.4 4.75L9.475 9.175C9.55833 9.225 9.64583 9.2625 9.7375 9.2875C9.82917 9.3125 9.91667 9.325 10 9.325Z"
            fill="white"
          />
        </svg>
        <Typography variant="body2" className="text-white text-sm">
          info@legasilawfirm.com
        </Typography>
      </div>
      <div className="flex flex-row gap-2">
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 18.5C1.45 18.5 0.979167 18.3042 0.5875 17.9125C0.195833 17.5208 0 17.05 0 16.5V6.5C0 5.95 0.195833 5.47917 0.5875 5.0875C0.979167 4.69583 1.45 4.5 2 4.5H4V2.5C4 1.95 4.19583 1.47917 4.5875 1.0875C4.97917 0.695833 5.45 0.5 6 0.5H12C12.55 0.5 13.0208 0.695833 13.4125 1.0875C13.8042 1.47917 14 1.95 14 2.5V8.5H16C16.55 8.5 17.0208 8.69583 17.4125 9.0875C17.8042 9.47917 18 9.95 18 10.5V16.5C18 17.05 17.8042 17.5208 17.4125 17.9125C17.0208 18.3042 16.55 18.5 16 18.5H10V14.5H8V18.5H2ZM2 16.5H4V14.5H2V16.5ZM2 12.5H4V10.5H2V12.5ZM2 8.5H4V6.5H2V8.5ZM6 12.5H8V10.5H6V12.5ZM6 8.5H8V6.5H6V8.5ZM6 4.5H8V2.5H6V4.5ZM10 12.5H12V10.5H10V12.5ZM10 8.5H12V6.5H10V8.5ZM10 4.5H12V2.5H10V4.5ZM14 16.5H16V14.5H14V16.5ZM14 12.5H16V10.5H14V12.5Z"
            fill="white"
          />
        </svg>

        <Typography variant="body2" className="text-white text-sm">
          Tower Avilium Lt. 09, Jakarta, Indonesia
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
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    return toast
      .promise(
        createFeedback({
          email: data.email,
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
                  <p className="text-red-500 text-sm p-1">{errors.name.message}</p>
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
                      placeholder="Cth. 0812-3456-7890"
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm p-1">{errors.phone.message}</p>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold mb-2">Email (Opsional)</label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="email"
                      className="w-full px-4 py-2 border rounded-md outline outline-1 placeholder-gray-300"
                      placeholder="Cth. samantha@email.com"
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm p-1">{errors.email.message}</p>
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

              <button type="submit" className="btn btn-primary w-full">
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
