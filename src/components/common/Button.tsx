import { styled, css, type DefaultTheme } from 'styled-components';
import type { Priority } from '@/types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  priority?: Priority;
}

const Button = ({ priority = 'primary', children, ...props }: ButtonProps) => {
  return (
    <ButtonStyle $priority={priority} {...props}>
      {children}
    </ButtonStyle>
  );
};

const getBackgroundColor = ({ color }: DefaultTheme, priority: Priority) => {
  switch (priority) {
    case 'secondary':
      return 'rgba(76, 121, 255, 0.1)';
    case 'tertiary':
      return color.gray[50];
    default:
      return color.primary.default;
  }
};

const getTextColor = ({ color }: DefaultTheme, priority: Priority) => {
  return priority === 'primary' ? '#fff' : color.primary.default;
};

const getDisabledStyles = ({ color }: DefaultTheme, priority: Priority) => css`
  background-color: ${priority === 'primary' ? color.state.disabled : color.gray[200]};
  color: ${priority === 'primary' ? color.gray[300] : color.gray[400]};
  cursor: not-allowed;
`;

const ButtonStyle = styled.button<{ $priority: Priority }>`
  ${({ theme: { typography } }) => typography.subtitle};
  padding: 12px 16px;
  border-radius: 5px;
  border: 1.5px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: ${({ theme: { fontweight } }) => fontweight.medium};

  background-color: ${({ theme, $priority }) => getBackgroundColor(theme, $priority)};
  color: ${({ theme, $priority }) => getTextColor(theme, $priority)};

  &:hover:not(:disabled) {
    filter: brightness(0.9);
  }

  &:active:not(:disabled) {
    filter: brightness(0.85);
  }

  &:disabled {
    ${({ theme, $priority }) => getDisabledStyles(theme, $priority)}
  }

  &:focus-visible {
    border-color: ${({ theme: { color } }) => color.secondary.fuchsia};
    outline: none;
  }
`;

export default Button;
