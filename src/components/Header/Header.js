import { useDispatch } from "react-redux";
import { Col, Row, Dropdown, Space, Avatar } from "antd";
import { DownOutlined, LogoutOutlined } from "@ant-design/icons";

import { SIGNIN_SUCCESS } from "../../constants/authConstants";

const Header = () => {
  const dispatch = useDispatch();

  const handleMenuClick = (e) => {
    localStorage.clear();
    dispatch({ type: SIGNIN_SUCCESS, payload: null });
  };

  const items = [
    {
      key: "1",
      label: <div onClick={handleMenuClick}>Logout</div>,
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <div>
      <div
        style={{
          backgroundColor: "white",
          zIndex: 2,
          position: "relative",
        }}
      >
        <Row gutter={[24, 0]}>
          <Col span={24} md={6}></Col>
          <Col span={24} md={18} className="header-control">
            <Dropdown
              menu={{
                items,
              }}
            >
              <div
                onClick={(e) => e.preventDefault()}
                style={{ marginTop: "-13px" }}
              >
                <Space>
                  <Avatar
                    size={{
                      xs: 10,
                      sm: 20,
                      md: 35,
                      lg: 40,
                      xl: 50,
                      xxl: 100,
                    }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlVJMNaALFbLSuHoRQvDlx7x6bKFUrlioEQQ&usqp=CAU"
                  />
                  <DownOutlined />
                </Space>
              </div>
            </Dropdown>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
