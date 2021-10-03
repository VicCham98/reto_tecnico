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
        <Button icon={<PlusOutlined />} type="primary" />
        <Button icon={<UploadOutlined />} />
        <Button icon={<DownloadOutlined />} />
      </>
    ),
  };

  return (
    <div style={{ padding: 35 }}>
      <Title level={3}>Organización</Title>
      <Tabs defaultActiveKey="1" tabBarExtraContent={OperationsSlot}>
        <TabPane tab="Divisiones" key="1">
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
