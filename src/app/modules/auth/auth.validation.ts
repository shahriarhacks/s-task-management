import { z } from "zod";

export const loginZodSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: "Email is required",
      })
      .email(),
    role: z.string({
      required_error: "Role is required",
    }),
  }),
});
