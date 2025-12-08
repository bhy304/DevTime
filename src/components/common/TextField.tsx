import styled from 'styled-components';
import Input from './Input';

interface TextFieldProps {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  helperText?: string;
  button?: React.ReactNode;
}

const TextField = ({ id, type, label, placeholder, button, helperText }: TextFieldProps) => {
  return (
    <TextFieldStyle>
      <label htmlFor={id}>{label}</label>
      {button ? (
        <div>
          <Input id={id} type={type} placeholder={placeholder} />
          {button}
        </div>
      ) : (
        <Input id={id} type={type} placeholder={placeholder} />
      )}
      {helperText && <span className='helper-text'>{helperText}</span>}
    </TextFieldStyle>
  );
};

const TextFieldStyle = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;

  label {
    ${({ theme: { typography } }) => typography.bodysmall};
    font-weight: ${({ theme: { fontweight } }) => fontweight.medium};
    color: ${({ theme: { color } }) => color.gray[600]};
  }

  label + div {
    display: flex;
    gap: 12px;
  }

  input {
    flex: 1;
    min-width: 0;
  }

  button {
    flex-shrink: 0;
    white-space: nowrap;
  }

  .helper-text {
    ${({ theme: { typography } }) => typography.caption};
    color: ${({ theme: { color } }) => color.gray[400]};
  }
`;

export default TextField;
