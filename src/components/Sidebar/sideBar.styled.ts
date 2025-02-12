import styled from "styled-components";
import { Layout, Menu } from 'antd';

export const SidebarContainer = styled(Layout.Sider)`
  height: 100vh;
  width: 250px;
  background: #fbfcfe !important;
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.2);

  .ant-menu {
    flex:1;;
  }

  .menu-toggle {
    font-size: 20px;
    color: white;
    cursor: pointer;
    margin-bottom: 12px;
    justify-content: flex-end;
    display: flex;
    padding: 16px;
    background-color: dodgerblue
  }

  .ant-menu-item,
  .ant-menu-submenu-title {
    font-weight: 500;
    border-radius: 6px;
  }
  .ant-menu-item {
    color: lightgray;
    margin: 0;
  }
  .ant-menu-item-active {
    color: dodgerblue;
    margin: 0;
    width: 100%;
  }
  .ant-menu-item-selected{
    color: dodgerblue;
    width: 100%;
    border-radius: 0;
  }
`;

export const StyledHeading = styled.h3`
  padding-left: 15px;
`;

export const StyledMenu = styled(Menu)`
  padding: "10px 0";
`;

export const StyledMenuItems = styled(Menu.Item)`
  padding-left: 15px;
`
