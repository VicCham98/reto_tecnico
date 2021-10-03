import React from 'react'
import "./App.css";
import { Layout } from "antd";
import Header from './components/Header';
import Main from './views';

const { Content } = Layout;

function App() {
  return (
    <Layout className="app-content">
      <Header />
      <Content>
        <div>
          <Main /> 
        </div>
      </Content>
    </Layout>
  );
}

export default App;
