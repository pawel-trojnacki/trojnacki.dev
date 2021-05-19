import React from 'react';
import { useFormik } from 'formik';
import ButtonSubmit from '@/components/common/ButtonSubmit';
import Input from '@/components/common/Input';
import Feedback from '@/components/common/Feedback';
import Emoji from '@/components/common/Emoji';
import { sendContactRequest } from '@/functions/utils/sendContactRequest';
import { consent, initialValues, validationSchema } from '@/constants/formData';
import classes from './styles.module.css';

const ContactForm: React.FC = () => {
  const [apiSuccess, setApiSuccess] = React.useState<boolean>(false);
  const [apiError, setApiError] = React.useState<boolean>(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (formValues, { resetForm }) => {
      setApiError(false);
      setApiSuccess(false);
      const apiResponse = await sendContactRequest(formValues);
      if (apiResponse.success) {
        setApiSuccess(true);
        resetForm();
      } else {
        setApiError(true);
      }
    },
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    errors,
    values,
    isSubmitting,
  } = formik;

  return (
    <div className={classes.formWrapper}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Input
          name="email"
          label="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          type="email"
          disabled={isSubmitting}
          error={touched.email && errors.email ? errors.email : undefined}
        />
        <Input
          name="message"
          label="Message"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.message}
          textArea
          disabled={isSubmitting}
          error={touched.message && errors.message ? errors.message : undefined}
        />
        <p className={classes.consent}>{consent}</p>
        <div className="flex">
          <ButtonSubmit disabled={isSubmitting}>Send message</ButtonSubmit>
        </div>
      </form>
      {apiError && (
        <Feedback variant="error">
          <p>
            Something went wrong. <Emoji ariaLabel="sadness">🙄</Emoji> Please
            try again.
          </p>
        </Feedback>
      )}
      {apiSuccess && (
        <Feedback variant="success">
          <p>
            Email sent. Thanks for your message!{` `}
            <Emoji ariaLabel="smile">😁</Emoji>
          </p>
        </Feedback>
      )}
    </div>
  );
};

export default ContactForm;
