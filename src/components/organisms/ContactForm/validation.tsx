import React from 'react';
import Emoji from '@/components/common/Emoji';
import { FormValues } from './formData';

export const validation = ({
  email,
  message,
}: FormValues): React.ReactElement | null => {
  if (!email) {
    return (
      <p>
        <Emoji ariaLabel="envelope">📧</Emoji> Your email address is required
      </p>
    );
  }
  if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i.test(email)) {
    return (
      <p>
        <Emoji ariaLabel="envelope">📧</Emoji> Please provide correct email
        address
      </p>
    );
  }
  if (!message) {
    return (
      <p>
        <Emoji ariaLabel="writing hand">✍</Emoji> Message is required
      </p>
    );
  }
  return null;
};
