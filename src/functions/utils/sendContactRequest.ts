import { ContactResponse } from '@/types/api/contactResponse.interface';
import { FormValues } from '@/types/contact/formValues.interface';

export const sendContactRequest = async ({ email, message }: FormValues) => {
  const response = await fetch(`/api/contact`, {
    method: `POST`,
    headers: {
      Accept: `application/json, text/plain, */*`,
      'Content-Type': `application/json`,
    },
    body: JSON.stringify({
      email,
      message,
    }),
  });
  const data: ContactResponse = await response.json();
  return data;
};
