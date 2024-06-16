import PropTypes from 'prop-types';

const Button = ({bgColor, textColor, text, customStyle}) => {
  return (
    <>
      <button className={`bg-[${bgColor}] w-[200px] font-medium rounded-md my-6 mx-auto py-3 text-${textColor} ${customStyle}`}>{text}</button>
    </>
  );
};

Button.propTypes = {
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    customStyle: PropTypes.string.isRequired
  };

export default Button;
