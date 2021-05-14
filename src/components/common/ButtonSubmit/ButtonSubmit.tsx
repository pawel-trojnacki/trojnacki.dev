import React from 'react';

interface Props {
  loading: boolean;
}

const ButtonSubmit: React.FC<Props> = ({ children, loading }) => (
  <button type="submit" className="btn" disabled={loading}>
    {children}
  </button>
);

export default ButtonSubmit;
