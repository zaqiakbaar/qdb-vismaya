import React from "react";
import { AvatarContainer, AvatarImage } from "./avatar.styled";

interface AvatarProps {
  src: string;
  size?: number;
  name?: string;
  bottomOffset?:number
}

const Avatar: React.FC<AvatarProps> = ({ src, size = 64, bottomOffset }) => {
  return (
    <AvatarContainer bottomOffset={bottomOffset}>
      <AvatarImage src={src} alt="User Avatar" size={size} />
    </AvatarContainer>
  );
};

export default React.memo(Avatar);
