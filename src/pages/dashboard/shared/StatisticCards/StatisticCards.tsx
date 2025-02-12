import { Col, Statistic } from "antd";
import { IStatisticCard } from "./statisticCards.type";
import { StyledButton, StyledCard } from "./statisticCards.styled";

const StatisticCard = ({ title, value, buttonLabel }:IStatisticCard) => (
    <Col span={8}>
      <StyledCard>
        <Statistic title={title} value={value} precision={2} />
        <StyledButton type="primary">{buttonLabel}</StyledButton>
      </StyledCard>
    </Col>
);

export default StatisticCard