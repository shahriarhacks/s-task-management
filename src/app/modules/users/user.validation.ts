import { z } from "zod";
export const createUserZodSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: "Email is required",
      })
      .email(),
    name: z.string({
      required_error: "Name is required",
    }),
    role: z.string({
      required_error: "Role is required",
    }),
  }),
});
