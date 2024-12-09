import { z } from "zod";


export const contactSchema = z.object({
  name: z.string().min(1, "Nama harus diisi"),
  phone: z
    .string()
    .min(1, "Nomor handphone harus diisi")
    .regex(/^[0-9+-]+$/, "Nomor handphone tidak valid"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Format email tidak tepat"),
  message: z.string().min(1, "Pesan harus diisi")
  .max(512, "Maks. 512 karakter"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;