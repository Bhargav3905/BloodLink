import { z } from "zod";

const requestSchema = z.object({
  bloodGroup: z.string(),

  quantity: z.coerce.number().min(1),
});

export { requestSchema };
