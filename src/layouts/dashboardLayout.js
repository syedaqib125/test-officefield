import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Route,
  Switch,
  Redirect,
  useLocation,
  Link,
  useHistory,
} from "react-router-dom";
import { Layout, Menu } from "antd";

import Header from "../components/Header/Header";
import adminRoutes from "../routes/adminRoutes";
import LOGO from "../assets/images/dashboard-logo.png";
import SubMenu from "antd/lib/menu/SubMenu";
import { DatabaseFilled, SettingOutlined } from "@ant-design/icons";

const { Header: Content, Sider } = Layout;

const DashboardLayout = () => {
  const history = useHistory();
  let { pathname } = useLocation();
  const { isUser } = useSelector((state) => state.authReducer);

  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (isUser == null) {
      history.push("/auth/sign-in");
    }
  }, [isUser, history]);

  const getRoutes = (routes) => {
    return routes.map((route, key) => {
      if (route.layout === "/user") {
        return (
          <Route
            path={route.layout + route.path}
            component={route.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className="siderBar"
      >
        {!collapsed && (
          <div className="logo">
            <img
              alt="example"
              src={LOGO}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}

        <Menu
          theme="dark"
          defaultSelectedKeys={[pathname]}
          mode="inline"
          style={{ backgroundColor: "#29A095", fontWeight: "bold" }}
        >
          <SubMenu key="sub2" icon={<DatabaseFilled />} title="Dashboard">
            <Menu.Item style={{ borderRadius: "3px" }}>
              <Link to="/user/dashboard">My Dashboard</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub1" icon={<SettingOutlined />} title="Order">
            <Menu.Item>
              <Link to="/user/Order">Orders List</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content className="contentSider">
          <Header />
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Switch>
              {getRoutes(adminRoutes)}
              <Redirect from="*" to="/user/dashboard" />
            </Switch>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
