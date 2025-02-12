import styled from "styled-components";
import { TypographyProps } from "./typography.type";
import { Typography } from "antd";
import { colorPalette } from "../../../theme/_palette";

const { Title, Text, Link, Paragraph } = Typography;

const StyledTitle = styled(Title)<TypographyProps>`
  color: ${({ color }) => color || "inherit"};
  font-size: ${({ size }) => (size ? `${size}px` : "14px")};
  font-weight: 700;
  text-align: ${({ textAlign }) => textAlign || "left"};
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
`;

const StyledText = styled(Text)<TypographyProps>`
  color: ${({ color }) => color || "inherit"};
  font-size: ${({ size }) => (size ? `${size}px` : "14px")};
  text-align: ${({ textAlign }) => textAlign || "left"};
  display: ${({ display }) => display || "block"};
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  font-weight: ${({ fontWeight }) => fontWeight || 0};
`;

const StyledParagraph = styled(Paragraph)<TypographyProps>`
  color: ${({ color }) => color || "inherit"};
  font-size: ${({ size }) => (size ? `${size}px` : "14px")};
  text-align: ${({ textAlign }) => textAlign || "left"};
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
`;

const StyledLink = styled(Link)<TypographyProps>`
  color: ${({ color }) => color || colorPalette.primary};
  font-size: ${({ size }) => (size ? `${size}px` : "14px")};
  text-align: ${({ textAlign }) => textAlign || "left"};
  &:hover {
    text-decoration: underline;
  }
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
`;

export { StyledLink, StyledParagraph, StyledText, StyledTitle }