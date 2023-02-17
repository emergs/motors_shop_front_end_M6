import styled from "styled-components";

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  text-align: left;
  color: black;

  input {
    color: black;
    padding: 0 16px 0 16px;
    background-color: #f8f9fa;
    border: 1.5px solid black;
    border-radius: 4px;
    outline: none;

    :focus {
      border: 1.5px solid #5126ea;
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
