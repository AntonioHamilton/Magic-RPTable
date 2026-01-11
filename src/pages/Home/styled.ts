import styled from "styled-components";
import { theme } from "@styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${theme.colors.background.primary};
`;

export const Header = styled.header`
  padding: ${theme.spacing[4]};
  background-color: ${theme.colors.background.secondary};
  border-bottom: 1px solid ${theme.colors.border.primary};
`;

export const Title = styled.h1`
  font-size: ${theme.fontSize["2xl"]};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin: 0;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

export const Sidebar = styled.div`
  width: 300px;
  padding: ${theme.spacing[4]};
  background-color: ${theme.colors.background.secondary};
  border-right: 1px solid ${theme.colors.border.primary};
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  z-index: 100;
`;

export const BoardWrapper = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
