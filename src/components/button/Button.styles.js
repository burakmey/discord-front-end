import styled from "styled-components";

const Button = styled.button`
  display: block;
  background: none;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  margin: ${({ $styles }) => $styles?.margin};
  padding: ${({ $styles }) => $styles?.padding};
`;

export const ButtonLarge = styled(Button)`
  width: 100%;
  height: 44px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  background-color: var(--brand-experiment);
  color: white;
`;

export const ButtonLink = styled(Button)`
  display: inline-block;
  color: var(--text-link);
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;
