import { Badge, Flex, Input, Layout } from "antd";
import styled from "styled-components";

const { Header, Content} = Layout

export const StyledLayout = styled(Layout)`
  overflow: hidden;
`;

export const StyledInnerLayout = styled(Layout)`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const StyledHeader = styled(Header)`
  background-color: white;
  display: flex;
  padding: 12px;
`;

export const StyledContent = styled(Content)`
  min-height: 120px;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

export const StyledBadge = styled(Badge)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const StyledRightSection = styled(Flex)`
  margin-left: auto;
  align-items: center;
  gap: 20px;
`;

export const StyledSearchInput = styled(Input)`
  width: auto;
`;