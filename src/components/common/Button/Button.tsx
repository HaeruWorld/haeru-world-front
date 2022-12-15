import { ButtonType } from '@/components/common/Button/types';
import { ButtonWrapStyle } from './style';

const Button = ({
  className,
  text,
  radius = 8,
  color = '#000',
  backgroundColor,
  disabled = false,
  onClick,
  isBorder = false,
}: ButtonType) => {
  return (
    <ButtonWrapStyle
      className={className}
      color={color}
      backgroundColor={backgroundColor}
      radius={radius}
      disabled={disabled}
      onClick={onClick}
      isBorder={isBorder}
    >
      {text}
    </ButtonWrapStyle>
  );
};

export default Button;
