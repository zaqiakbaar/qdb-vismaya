import styled from "styled-components";
import { colorPalette } from "../../../theme/_palette";

const AvatarContainer = styled.div<{ bottomOffset?: number}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${colorPalette.white};
  margin-bottom: ${(props) => props.bottomOffset ?? 20}px;
`;

const AvatarImage = styled.img<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  border: 2px solid white;
  object-fit: cover;
`;

export { AvatarContainer, AvatarImage }