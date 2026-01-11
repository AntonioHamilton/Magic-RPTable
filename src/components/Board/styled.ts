import styled from "styled-components";
import { theme } from "@styles/theme";

export const BoardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${theme.colors.background.secondary};
  padding: ${theme.spacing[8]};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
`;

export const GridWrapper = styled.div<{
  $width: number;
  $height: number;
  $cellSize: number;
}>`
  position: relative;
  width: ${({ $width, $cellSize }) => $width * $cellSize}px;
  height: ${({ $height, $cellSize }) => $height * $cellSize}px;
  background-color: ${theme.colors.background.tertiary};
  flex-shrink: 0;
`;

export const GridCell = styled.div<{
  $x: number;
  $y: number;
  $cellSize: number;
}>`
  position: absolute;
  left: ${({ $x, $cellSize }) => $x * $cellSize}px;
  top: ${({ $y, $cellSize }) => $y * $cellSize}px;
  width: ${({ $cellSize }) => $cellSize}px;
  height: ${({ $cellSize }) => $cellSize}px;
  border: 1px solid ${theme.colors.border.primary};
  box-sizing: border-box;
`;
