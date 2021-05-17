import * as Yup from 'yup';
import { FormValues } from '@/types/contact/formValues.interface';

export const initialValues: FormValues = {
  email: ``,
  message: ``,
};

export const validationSchema = Yup.object({
  email: Yup.string()
    .email(`Invalid email address 📧`)
    .required(`Email is required 📧`),
  message: Yup.string().required(`Message is required ✍`),
});

export const consent = `By sending a message, you consent to the processing of your personal data. Your data will be processed in order to answer your message.`;
