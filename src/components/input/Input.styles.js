import styled from "styled-components";

const Input = styled.input`
  font-size: 16px;
  width: 100%;
  margin: ${({ $styles }) => $styles?.margin};
  padding: ${({ $styles }) => $styles?.padding};
  &:focus {
    outline: none;
  }
`;

export const InputForm = styled(Input).attrs({ autoComplete: "off", autoCorrect: "off", spellCheck: "false" })`
  border-radius: 3px;
  border: none;
  padding: 10px;
  height: 40px;
  background-color: var(--input-background);
  color: var(--input-text);
`;
