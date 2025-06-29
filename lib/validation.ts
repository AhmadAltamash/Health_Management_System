import { z } from "zod";

export const UserFormValidation = z.object({
  name: z.string()
  .min(2, "Name must be at least 2 characters.")
  .max(50, "Name must be less than 50 character"),
  email: z.string().email("Invalid email address"),
  phone: z.string().refine((phone) => /^\+\d{1,14}$/.test(phone), 'Invalid phone number')
}) 