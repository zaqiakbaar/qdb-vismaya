import { Row } from 'antd';
import { DashboardContainer } from './shared/dashboard.styled';
import StatisticCard from './shared/StatisticCards/StatisticCards';
import SpendingTable from './shared/SpendingTable/SpendingTable';

// TODO - temporary mock
const mockStatisticValues = [
  {title: "Total Spend", value:2808970, ctaText:"History" },
  {title: "Total Balance (IDR)", value:8000000, ctaText:"Details" },
  {title: "Savings", value:3000000, ctaText:"Details" },
]

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Row gutter={16}>
        {mockStatisticValues.map(({title, value, ctaText}) => (
          <StatisticCard title={title} value={value} buttonLabel={ctaText}/>
        ))}
      </Row>
      <SpendingTable/>
    </DashboardContainer>
  );
};

export default Dashboard;
