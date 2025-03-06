import { z, ZodType } from 'zod';

export const ContactSchema: ZodType = z.object({
  firstName: z
    .string({ required_error: 'First name is required.' })
    .min(2, { message: 'Must contain 2 characters minimum.' })
    .max(50)
    .regex(/[a-z]/i, { message: 'Only letters allowed.' }),
  lastName: z
    .string()
    .min(2, { message: 'Must contain 2 characters minimum.' })
    .max(50)
    .regex(/[a-z]/i, { message: 'Only letters allowed.' }),
  email: z.string().email({ message: 'Invalid e-mail address.' }),
  phone: z
    .string()
    .max(100)
    .regex(
      /^\+?[1-9]\d{0,2}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/i,
      { message: 'Invalid phone number.' }
    ),
  contactImage: z
    .string()
    .max(50)
    .regex(/https?:\/\/[^\s/$.?#].[^\s]*\.(jpg|jpeg|png)/i, {
      message: 'Url ending .jpg .jpeg or .png required.',
    }),
});
