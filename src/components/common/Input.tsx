import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

function Input({ placeholder, ...props }: InputProps) {
  return <StyledInput {...props} placeholder={placeholder} />;
}

const StyledInput = styled.input`
  width: 100%;
  background: ${({ theme: { color } }) => color.gray[50]};
  padding: 12px 16px;
  border-radius: 5px;

  &::placeholder {
    color: ${({ theme: { color } }) => color.gray[300]};
  }

  &:focus::placeholder {
    color: transparent;
  }

  &:not(:placeholder-shown) {
    color: ${({ theme: { color } }) => color.gray[800]};
  }
`;

export default Input;
