import React from 'react';
import Loader from '../Loader';
import classes from './styles.module.css';

interface Props {
  disabled: boolean;
}

const ButtonSubmit: React.FC<Props> = ({ children, disabled }) => (
  <button type="submit" className={`btn ${classes.btn}`} disabled={disabled}>
    {disabled ? <Loader /> : children}
  </button>
);

export default ButtonSubmit;
