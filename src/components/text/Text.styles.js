import styled from "styled-components";

const Text = styled.div`
  font-size: ${({ $styles }) => $styles?.fontSize};
  line-height: ${({ $styles }) => $styles?.lineHeight};
  padding: ${({ $styles }) => $styles?.padding};
  margin: ${({ $styles }) => $styles?.margin};
  user-select: none;
`;

export const TextHeader = styled(Text)`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 600;
  color: var(--header-primary);
`;

export const TextNormal = styled(Text)`
  font-size: 16px;
  line-height: 1.25;
  font-weight: 400;
  color: var(--font-primary);
`;

export const TextLabel = styled(Text)`
  display: block;
  font-size: 12px;
  line-height: 1.3333333333333333;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: var(--font-primary);
`;

export const TextSpan = styled(Text)`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`;
