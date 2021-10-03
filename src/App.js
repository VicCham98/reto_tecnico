import React from "react";
import "./App.css";
import { Layout } from "antd";
import AppHeader from "./components/Header";
import Main from "./views";

const { Content, Header } = Layout;

function App() {
  return (
    <Layout className="mainLayout app-content">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <div className="main-content">
          <Main />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
