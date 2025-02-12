import { CardProps, TabsProps } from "antd";

export interface IContentWrapperProps {
    items: { key: string; label: string; }[];
    defaultActiveKey?: string;
    onChange?: (key: string) => void;
    cardProps?: React.FC<CardProps>;
    restTabProps?:React.FC<TabsProps>;
    children: React.ReactNode;
  }
  