import React from 'react';
import { motion, Variants } from 'framer-motion';
import classes from './styles.module.css';

interface FieldProps {
  name: string;
  label: string;
  error: undefined | string;
}

interface InputProps extends FieldProps {
  value: string;
  disabled: boolean;
  onChange: (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur: any;
  textArea?: boolean;
  type?: 'text' | 'email';
}

const variants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.15, ease: `linear` },
  },
};

const Field: React.FC<FieldProps> = ({ children, name, label, error }) => (
  <div className={classes.container}>
    <label
      htmlFor={name}
      className={
        error ? `${classes.label} ${classes.labelError}` : classes.label
      }
    >
      {label}
    </label>
    {children}
    {error && (
      <motion.p
        variants={variants}
        initial="hidden"
        animate="visible"
        className={classes.error}
      >
        {error}
      </motion.p>
    )}
  </div>
);

const Input: React.FC<InputProps> = ({
  name,
  label,
  value,
  disabled,
  error,
  onChange,
  onBlur,
  textArea = false,
  type = `text`,
}) => {
  if (textArea) {
    return (
      <Field name={name} label={label} error={error}>
        <textarea
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={
            error ? `${classes.input} ${classes.inputError}` : classes.input
          }
          disabled={disabled}
          autoComplete="off"
          rows={4}
        />
      </Field>
    );
  }
  return (
    <Field name={name} label={label} error={error}>
      <input
        name={name}
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        className={
          error ? `${classes.input} ${classes.inputError}` : classes.input
        }
        autoComplete="off"
      />
    </Field>
  );
};

export default Input;
