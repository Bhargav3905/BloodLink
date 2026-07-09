import { z } from "zod";

const donationSchema = z.object({
  bloodGroup: z.string(),

  quantity: z.coerce.number().min(1),
});

export { donationSchema };
