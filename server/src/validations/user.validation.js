import { z } from "zod";
import { GUJARAT_CITIES } from "../constants/index.js";

const updateProfileSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, "Full name must be at least 3 characters")
    .optional(),

  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Invalid phone number")
    .optional(),

  city: z.enum(GUJARAT_CITIES).optional(),
});

export { updateProfileSchema };
