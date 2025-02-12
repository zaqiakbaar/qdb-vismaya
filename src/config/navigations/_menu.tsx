import { BellOutlined, CalendarOutlined, InfoCircleOutlined, SendOutlined, StarOutlined, StockOutlined } from "@ant-design/icons";

export const menuItems = [
    {
      key: "dashboard",
      label: "Dashboard",
      children: [
          {route:'/overview',key:'overviews', label:"Overview", icon: <StockOutlined/> },
          {route:'/',key:'calendars', label:"Calendar", icon: <CalendarOutlined />},
          {route:'/',key:'schedule-actions', label:"Schedule Actions", icon: <SendOutlined />},   
          {route:'/',key:'live-alert', label:"Live Alert", icon: <BellOutlined />},   
      ],
      expandable:false
    },
    {
      key: "blogs",
      label: "Blogs",
      children: [
        { key: "all-blogs", label: "All Blogs", route:'/blogs', icon: <StarOutlined/> },
        { key: "latest", label: "Latest", route:'/blogs', icon: <InfoCircleOutlined/> },
        { key: "archived", label: "Archived", route:'/blogs', icon: <CalendarOutlined /> },
      ],
      expandable:false
    },
    {
      key:'documentations',
      label:'Documentation',
      expandable:true
    },
    {
      key:'reports',
      label:'Reports',
      expandable:true
    },
    {
      key:'need-help',
      label:'Need Help?',
      expandable:true
    },
];

export const TAB_NAVIGATION = [
  {
    key: '1',
    label:'All Posts',
  },
  {
    key: '2',
    label:'Latest Posts',
  },
  {
    key: '3',
    label:'Archived',
  },
];

export const DEFAULT_SELECTED_KEYS_NAVIGATION = ['dashboard'];

export const DEFAULT_ACTIVE_KEYS = "1";