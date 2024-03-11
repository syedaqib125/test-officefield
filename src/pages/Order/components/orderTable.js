import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Col, Input, Row, Table } from "antd";
import { PageHeader } from "@ant-design/pro-layout";
import { CalendarTwoTone, SearchOutlined } from "@ant-design/icons";

import orderTableColumns from "../../../data/orderTableColumns.json";
import { getOrdersAction } from "../../../store/actions/ordersActions";

const OrderTable = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.ordersReducer);

  const [dataSource, setDataSource] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);

  const memoizedDispatch = useCallback(() => {
    dispatch(getOrdersAction());
  }, [dispatch]);

  useEffect(() => {
    memoizedDispatch();
  }, [memoizedDispatch]);

  const handleSearch = (e) => {
    e.preventDefault();

    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = data.filter((order) => {
      return (
        order.orderID.includes(value) ||
        order.customerName.toLowerCase().includes(value)
      );
    });

    setFilteredOrders(filtered);
  };

  useEffect(() => {
    setFilteredOrders(data);
  }, [data]);

  useEffect(() => {
    const tableData = filteredOrders.map((item, index) => {
      return {
        key: item.orderID + index,
        orderID: item.orderID,
        orderStatus: (
          <Badge
            color={
              item.orderStatus === "FULFILLED"
                ? "green"
                : item.orderStatus === "VERIFIED"
                ? "yellow"
                : "red"
            }
            text={item.orderStatus}
          />
        ),
        customerName: (
          <>
            <h3>{item.companyName}</h3>
            <small>{item.customerName}</small>
          </>
        ),
        purDate: (
          <>
            <CalendarTwoTone />
            <p>{item.purDate}</p>
          </>
        ),
        fulfillDate: (
          <>
            <CalendarTwoTone twoToneColor="#52c41a" />
            <p>{item.fulfillDate}</p>
          </>
        ),
        invoiceStatus: item.invoiceStatus,
        amount: (
          <strong>
            {item.currency} {item.amount}
          </strong>
        ),
      };
    });
    setDataSource(tableData);
  }, [filteredOrders]);

  return (
    <>
      <Row>
        <Col lg={24} md={24} sm={24} xs={24}>
          <PageHeader
            ghost
            className="searching-bar"
            title={
              <Input
                size="large"
                placeholder="Search"
                prefix={<SearchOutlined />}
                style={{ border: "none", backgroundColor: "#EBEBEB" }}
                value={searchTerm}
                onChange={handleSearch}
              />
            }
          />
        </Col>
      </Row>
      <Row>
        <Col lg={24} md={24} sm={24} xs={24}>
          <Table
            columns={orderTableColumns}
            dataSource={dataSource}
            pagination={false}
            scroll={{
              x: 1500,
            }}
          />
        </Col>
      </Row>
    </>
  );
};
export default OrderTable;
