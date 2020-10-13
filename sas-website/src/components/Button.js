import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];

const COLOR = ['primary', 'blue', 'red', 'green'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {
  //Checks the props passed to the Button
  //If the buttonStyle passed in is included in the STYLES defined above
  //We add that to our button className below. Otherwise, we pass the default
  //value of STYLES[0]
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  //Same checks as above and same defaulting if nothing new
  //is passed in as props
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}>
      {children}
    </button>
  );
};
