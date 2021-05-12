import React from 'react';

interface Props {
  destinationId: string;
}

const ButtonScroll: React.FC<Props> = ({ children, destinationId }) => {
  const handleButtonClick = () => {
    const destination = document.getElementById(destinationId);
    if (destination) {
      destination.scrollIntoView({ behavior: `smooth` });
    }
  };
  return (
    <button className="btn" type="button" onClick={handleButtonClick}>
      {children}
    </button>
  );
};

export default ButtonScroll;
