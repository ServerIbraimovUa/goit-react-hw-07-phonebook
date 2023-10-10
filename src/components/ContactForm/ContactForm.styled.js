import styled from 'styled-components';
import { Form } from 'formik';

export const FormEl = styled(Form)`
  width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    padding: 10px;
  }
  label {
    margin-top: 24px;
    margin-bottom: 4px;
  }
  button {
    cursor: pointer;
    padding: 10px;
    border-radius: 6px;
    background-color: #97e93f;
    border: none;
    margin-top: 30px;
    &:hover {
      scale: 1.01;
    }
  }
`;
