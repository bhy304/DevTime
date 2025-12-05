import { useId } from 'react';
import styled from 'styled-components';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
}

const Checkbox = ({ id, name, label, ...props }: CheckboxProps) => {
  const generatedId = useId();
  const checkboxId = id || generatedId;
  return (
    <CheckboxStyle>
      <label htmlFor={checkboxId}>{label}</label>
      <input {...props} type='checkbox' id={checkboxId} name={name || checkboxId} />
    </CheckboxStyle>
  );
};

const CheckboxStyle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  user-select: none;
  margin: 0;

  label {
    ${({ theme: { typography } }) => typography.bodysmall};
    color: ${({ theme: { color } }) => color.gray[700]};
    cursor: pointer;
  }

  input[type='checkbox'] {
    width: 16px;
    height: 16px;
    border-radius: 5px;
    border: 1px solid ${({ theme: { color } }) => color.primary.default};
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    box-sizing: border-box;

    &:checked {
      background-color: rgba(76, 121, 255, 0.1);
      background-image: url('src/assets/check.svg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 16px 16px;
      accent-color: ${({ theme: { color } }) => color.primary.default};
    }
  }
`;

export default Checkbox;
