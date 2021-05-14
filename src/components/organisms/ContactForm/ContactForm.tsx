import React from 'react';
import ButtonSubmit from '@/components/common/ButtonSubmit';
import Input from '@/components/common/Input';
import classes from './styles.module.css';

interface FormValues {
  email: string;
  message: string;
}

const initialValues = {
  email: ``,
  message: ``,
};

const consent = `By sending a message, you consent to the processing of your personal data. Your data will be processed in order to answer your message.`;

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = React.useState<FormValues>(initialValues);

  const handleInputChange: React.FormEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setFormValues({
      ...formValues,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleFormSubmit} className={classes.form}>
      <Input
        name="email"
        label="Email"
        onChange={(e) => handleInputChange(e)}
        value={formValues.email}
        type="email"
      />
      <Input
        name="message"
        label="Message"
        onChange={(e) => handleInputChange(e)}
        value={formValues.message}
        textArea
      />
      <p className={classes.consent}>{consent}</p>
      <div className="flex">
        <ButtonSubmit loading={false}>Send message</ButtonSubmit>
      </div>
    </form>
  );
};

export default ContactForm;
