import React, { useState } from "react";
import { Button, Anchor, Drawer, Menu, Dropdown } from "antd";
import {
  AlignRightOutlined,
  DownOutlined,
  BellFilled,
  QuestionCircleFilled,
  FolderFilled,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import LogoLight from "../assets/img/LogoLight.svg";
import LogoBlack from "../assets/img/LogoBlack.svg";
import AdminLogo from "../assets/img/adminLogo.svg";

const { Link } = Anchor;

const menu = (
  <Menu>
    <Menu.Item icon={<UserOutlined />}>Perfil</Menu.Item>
    <Menu.Item icon={<LogoutOutlined />} danger>
      Cerrar sesión
    </Menu.Item>
  </Menu>
);

const HeaderComponent = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="header">
          <div className="d-flex">
            <div className="topnav">
              <div style={{ paddingRight: 20 }}>
                <img src={LogoLight} alt="Mandu logo" />
              </div>
              <a href="#news">Dashboard</a>
              <a className="active" href="#contact">
                Organización
              </a>
              <a href="#about">
                Modelos &nbsp;
                <DownOutlined style={{ fontSize: 14 }} />
              </a>
              <a href="#about">
                Seguimiento &nbsp;
                <DownOutlined style={{ fontSize: 14 }} />
              </a>
            </div>
          </div>
          <div className="mobileHidden">
            <div className="topnav">
              <div href="#news" className="d-flex" style={{ color: "white" }}>
                <div style={{ marginRight: 10, marginLeft: 10 }}>
                  <FolderFilled />
                </div>
                <div style={{ marginRight: 10, marginLeft: 10 }}>
                  <QuestionCircleFilled />
                </div>
                <div
                  style={{
                    marginRight: 10,
                    marginLeft: 10,
                    position: "relative",
                  }}
                >
                  <BellFilled />
                  <div
                    style={{
                      position: "absolute",
                      top: 2,
                      right: -7,
                      color: "white",
                      backgroundColor: "#e58c8e",
                      borderRadius: 50,
                      fontSize: 8,
                      paddingLeft: 5,
                      paddingRight: 5,
                    }}
                  >
                    3
                  </div>
                </div>
              </div>
              <div className="admin">
                <Dropdown overlay={menu}>
                  <div
                    className="ant-dropdown-link"
                    style={{
                      paddingTop: 14,
                      paddingBottom: 14,
                      paddingLeft: 16,
                      paddingRight: 16,
                      color: "white",
                    }}
                  >
                    <img src={AdminLogo} alt="Administrador" />
                    &nbsp;&nbsp;&nbsp; Administrador &nbsp;&nbsp;&nbsp;
                    <DownOutlined />
                  </div>
                </Dropdown>
              </div>
              <div href="#about">
                <img src={LogoBlack} alt="Mandu logo black" />
              </div>
            </div>
          </div>
          <div className="mobileVisible">
            <Button type="primary" onClick={showDrawer}>
              <AlignRightOutlined />
            </Button>
            <Drawer
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
            >
              <Anchor targetOffset="65">
                <Link href="#hero" title="Home" />
                <Link href="#about" title="About" />
                <Link href="#feature" title="Features" />
                <Link href="#works" title="How it works" />
                <Link href="#faq" title="FAQ" />
                <Link href="#pricing" title="Pricing" />
                <Link href="#contact" title="Contact" />
              </Anchor>
            </Drawer>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
