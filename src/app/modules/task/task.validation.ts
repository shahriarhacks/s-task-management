import { z } from "zod";

export const createTaskZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is Required",
    }),
    description: z.string({
      required_error: "Description is Required",
    }),
    status: z.boolean({
      required_error: "Status must be Needed",
    }),
    email: z.string({
      required_error: "Email is required",
    }),
  }),
});

export const updateTaskZodSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: "Title is Required",
      })
      .optional(),
    description: z
      .string({
        required_error: "Description is Required",
      })
      .optional(),
    status: z
      .boolean({
        required_error: "Status must be Needed",
      })
      .optional(),
  }),
});
