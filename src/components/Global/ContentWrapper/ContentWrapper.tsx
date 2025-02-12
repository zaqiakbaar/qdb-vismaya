import React from 'react';
import { Tabs } from 'antd';
import { DEFAULT_ACTIVE_KEYS } from '../../../config/navigations/_menu';
import { IContentWrapperProps } from './contentwrapper.type';
import { Card } from '../Card';

const ContentWrapper: React.FC<IContentWrapperProps> = ({ items, defaultActiveKey = DEFAULT_ACTIVE_KEYS, onChange, children,restTabProps, cardProps }) => {
  return (
    <Card {...cardProps}>
      <Tabs defaultActiveKey={defaultActiveKey} items={items} onChange={onChange} {...restTabProps} />
       {children}
    </Card>
  );
};

export default ContentWrapper;
