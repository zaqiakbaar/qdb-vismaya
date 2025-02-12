import { BellOutlined, LeftCircleOutlined, MailOutlined, StarOutlined } from "@ant-design/icons";
import styled from "styled-components";

const StyledBackButtons = styled(LeftCircleOutlined)`
    font-size: 24px;
`

const StyledStarIcons = styled(StarOutlined)`
    font-size: 24px;
    color:white;
`

const StyledMailIcon = styled(MailOutlined)`
  font-size: 18px;
  vertical-align: middle;
  color: lightgray;
`;

const StyledBellIcon = styled(BellOutlined)`
 font-size: 18px;
 vertical-align: middle;
 color: lightgray;
`

export { StyledBackButtons, StyledStarIcons, StyledMailIcon, StyledBellIcon }