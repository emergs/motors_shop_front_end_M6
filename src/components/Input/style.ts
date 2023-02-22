import styled from "styled-components";

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  color: var(--grey-1);

  input {
    padding: 0 16px;
    font-size: 16px;
    outline: none;
    border: 1.5px solid var(--grey-7);
    border-radius: 4px;
    color: var(--grey-1);
    background-color: var(--grey-9);

    ::placeholder {
      color: var(--grey-3);
      font-size: 16px;
    }

    :focus {
      border: 1.5px solid var(--color-brand-2);
    }
  }

  span {
    font-size: 14px;
    color: red;
  }
`;

export const StyledFormExample = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #dcdcdc;
`;
