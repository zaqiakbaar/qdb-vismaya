import { CardProps } from "antd";
import { StyledCard } from "./card.styled"
import React from "react";

function Card({ cardProps, children }: { cardProps?: CardProps; children?: React.ReactNode }) {
  return (
    <StyledCard {...cardProps}>
      {children}
    </StyledCard>
  );
}

export default Card;
