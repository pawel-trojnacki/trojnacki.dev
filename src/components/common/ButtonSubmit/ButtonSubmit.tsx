import React from 'react';

interface Props {
  disabled: boolean;
}

const ButtonSubmit: React.FC<Props> = ({ children, disabled }) => (
  <button type="submit" className="btn" disabled={disabled}>
    {children}
  </button>
);

export default ButtonSubmit;
