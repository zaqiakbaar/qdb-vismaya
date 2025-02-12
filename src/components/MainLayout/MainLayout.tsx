import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Avatar } from "../Global/Avatar";
import { SearchOutlined } from "@ant-design/icons";
import { AVATAR_IMG_PLACEHOLDER } from "../../config/constants/_constants";
import {
  StyledBadge,
  StyledContent,
  StyledHeader,
  StyledInnerLayout,
  StyledLayout,
  StyledRightSection,
  StyledSearchInput,
} from "./mainLayout.styled";
import { StyledBellIcon, StyledMailIcon } from "../Shared/icons.styled";
import { colorPalette } from "../../theme/_palette";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <StyledLayout>
      <Sidebar />
      <StyledInnerLayout>
        <StyledHeader>
           <StyledSearchInput
            size="middle"
            placeholder="Type here to search..."
            prefix={<SearchOutlined />}
          />
          <StyledRightSection>
          <StyledBadge dot>
              <StyledBellIcon />
            </StyledBadge>
            <StyledBadge count={5} color={colorPalette.primary}>
              <StyledMailIcon />
            </StyledBadge>
            <Avatar bottomOffset={0} size={40} src={AVATAR_IMG_PLACEHOLDER} />
          </StyledRightSection>
        </StyledHeader>
        <StyledContent>{children}</StyledContent>
      </StyledInnerLayout>
    </StyledLayout>
  );
};

export default MainLayout;
