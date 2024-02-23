import styled from "styled-components/";

export const Container = styled.div`
  display: ${({ $styles }) => $styles?.display};
  position: ${({ $styles }) => $styles?.position};
  width: ${({ $styles }) => $styles?.width};
  min-width: ${({ $styles }) => $styles?.minWidth};
  height: ${({ $styles }) => $styles?.height};
  min-height: ${({ $styles }) => $styles?.minHeight};
  border-radius: ${({ $styles }) => $styles?.borderRadius};
  text-align: ${({ $styles }) => $styles?.textAling};
  background: ${({ $styles }) => $styles?.background};
  background-color: ${({ $styles }) => $styles?.backgroundColor};
  margin: ${({ $styles }) => $styles?.margin};
  padding: ${({ $styles }) => $styles?.padding};
  overflow: ${({ $styles }) => $styles?.overflow};
`;

export const ContainerFlex = styled(Container)`
  display: flex;
  flex-grow: ${({ $styles }) => $styles?.flexGrow};
  align-items: ${({ $styles }) => ($styles?.alignItems === undefined ? "center" : $styles?.alignItems)};
  justify-content: ${({ $styles }) => ($styles?.justifyContent === undefined ? "center" : $styles?.justifyContent)};
  gap: ${({ $styles }) => $styles?.gap};
`;

export const FlexRow = styled(ContainerFlex)`
  flex-direction: row;
`;

export const FlexCol = styled(ContainerFlex)`
  flex-direction: column;
`;

export const Wrapper = styled(ContainerFlex)`
  width: 100%;
  height: 100%;
  position: absolute;
  text-align: center;
`;

export const FullScreen = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;
