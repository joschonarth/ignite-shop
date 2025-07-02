import { z } from 'zod'

const envSchema = z.object({
  STRIPE_PUBLIC_KEY: z.string().min(1, 'A STRIPE_PUBLIC_KEY é obrigatória'),
  STRIPE_SECRET_KEY: z.string().min(1, 'A STRIPE_SECRET_KEY é obrigatória'),
})

export const env = envSchema.parse(process.env)
