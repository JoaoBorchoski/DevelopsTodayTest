import { z } from "zod"

export const loginSchema = z.object({
  login: z.string().min(1, "Username is required"),
  password: z
    .string()
    .min(1, "Password must be at least 1 characters long")
    .transform((password) => btoa(password)),
})

export type LoginFormData = z.infer<typeof loginSchema>
