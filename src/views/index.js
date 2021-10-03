import React from "react";
import { Tabs, Button } from "antd";
import { PlusOutlined, UploadOutlined, DownloadOutlined } from "@ant-design/icons";
import Table from '../components/Table';
import { Typography } from 'antd';

const { Title } = Typography;
const { TabPane } = Tabs;

const Index = () => {
  const OperationsSlot = {
    right: (
      <>
        <Button icon={<PlusOutlined />} type="primary" style={{ marginLeft: 5, marginRight: 5 }} />
        <Button icon={<UploadOutlined />} style={{ marginLeft: 5, marginRight: 5 }} />
        <Button icon={<DownloadOutlined />} style={{ marginLeft: 5, marginRight: 5 }} />
      </>
    ),
  };

  return (
    <div style={{ paddingLeft: 35, paddingRight: 35, paddingTop: 25, height: '100%' }}>
      <Title level={3}>Organización</Title>
      <Tabs defaultActiveKey="1" tabBarExtraContent={OperationsSlot}>
        <TabPane tab="Divisiones" key="1" style={{ paddingLeft: 25, paddingRight: 25 }}>
          <Table />
        </TabPane>
        <TabPane tab="Colaboradores" disabled key="2">
          Colaboradores
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Index;
