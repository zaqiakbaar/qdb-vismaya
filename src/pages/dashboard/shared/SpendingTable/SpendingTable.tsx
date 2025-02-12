import { Card, Col, Table } from "antd";
import { StyledRow } from "./spendingTable.styled";

//TODO - temporary mock
const mockTransactions = [
  {
    key: "1",
    date: "2025-02-10",
    description: "Grocery Shopping",
    amount: "-150,000 IDR",
  },
  {
    key: "2",
    date: "2025-02-09",
    description: "Salary",
    amount: "+30,000,000 IDR",
  },
  {
    key: "3",
    date: "2025-02-08",
    description: "Wifi Billing",
    amount: "-500,000 IDR",
  },
];

const tableColumns = [
  { title: "Date", dataIndex: "date", key: "date" },
  { title: "Description", dataIndex: "description", key: "description" },
  { title: "Amount", dataIndex: "amount", key: "amount" },
];

function SpendingTable() {
  return (
    <StyledRow gutter={16}>
      <Col span={12}>
        <Card title="Recent Transactions">
          <Table
            columns={tableColumns}
            dataSource={mockTransactions}
            pagination={false}
          />
        </Card>
      </Col>
    </StyledRow>
  );
}

export default SpendingTable;
