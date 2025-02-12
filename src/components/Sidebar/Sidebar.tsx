import { Flex, Menu } from "antd";
import { DEFAULT_SELECTED_KEYS_NAVIGATION, menuItems } from "../../config/navigations/_menu";
import React from "react";
import { UserInfo } from "../UserInfo/UserInfo";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { SidebarContainer, StyledHeading, StyledMenu, StyledMenuItems } from "./sideBar.styled";
import { useGetUserDetails } from "../../hooks/users/useGetUserData";

const { SubMenu } = Menu;

const Sidebar: React.FC = () => {
  const { userDetails: userInfo } = useGetUserDetails();
  const navigate = useNavigate();


  return (
    <SidebarContainer>
      <MenuOutlined className="menu-toggle" />
      {userInfo?.id && <UserInfo userDetails={userInfo} />}
      <StyledMenu mode="inline" defaultSelectedKeys={DEFAULT_SELECTED_KEYS_NAVIGATION} >
        {menuItems.map((item, index) => {
          return (
            <React.Fragment key={`menu-${index}`}>
              {item?.expandable ? (
                <SubMenu key={item.key} title={item.label} />
              ) : (<StyledHeading key={item.key}>{item.label}</StyledHeading>)}
              {(item.children || []).map((subItem) => (
                <StyledMenuItems key={subItem.key} onClick={() => navigate(subItem?.route)}>
                  <Flex align="center" gap={8}>
                    {subItem?.icon}
                    {subItem.label}
                  </Flex>
                </StyledMenuItems>
              )
              )}
            </React.Fragment>
          )
        }
        )}
      </StyledMenu>
    </SidebarContainer>
  );
};

export default Sidebar;

