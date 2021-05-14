import React from 'react';
import classes from './styles.module.css';

interface FieldProps {
  name: string;
  label: string;
}

interface InputProps {
  name: string;
  label: string;
  value: string;
  onChange: (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  textArea?: boolean;
  type?: 'text' | 'email';
}

const Field: React.FC<FieldProps> = ({ children, name, label }) => (
  <div className={classes.container}>
    <label htmlFor={name} className={classes.label}>
      {label}
    </label>
    {children}
  </div>
);

const Input: React.FC<InputProps> = ({
  name,
  label,
  value,
  onChange,
  textArea = false,
  type = `text`,
}) => {
  if (textArea) {
    return (
      <Field name={name} label={label}>
        <textarea
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className={classes.input}
          autoComplete="off"
          rows={4}
        />
      </Field>
    );
  }
  return (
    <Field name={name} label={label}>
      <input
        name={name}
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        className={classes.input}
        autoComplete="off"
      />
    </Field>
  );
};

export default Input;
