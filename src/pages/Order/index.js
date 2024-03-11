import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Input, Row, Table, Tag } from "antd";
import { PageHeader } from "@ant-design/pro-layout";
import { FilterOutlined, SearchOutlined } from "@ant-design/icons";

import orderTableColumns from "../../data/orderTableColumns.json";
import { getOrdersAction } from "../../store/actions/ordersActions";

const Order = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.ordersReducer);

  const [dataSource, setDataSource] = useState([]);

  const memoizedDispatch = useCallback(() => {
    dispatch(getOrdersAction());
  }, [dispatch]);

  useEffect(() => {
    memoizedDispatch();
  }, [memoizedDispatch]);

  useEffect(() => {
    if (data.length) {
      const tableData = data.map((item) => {
        return {
          key: item.orderID,
          orderID: item.orderID,
          orderStatus: item.orderStatus,
          customerName: item.customerName,
          purDate: item.purDate,
          fulfillDate: item.fulfillDate,
          invoiceStatus: item.invoiceStatus,
          amount: item.amount,
        
        };
      });
      setDataSource(tableData);
    }
  }, [data]);

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
              />
            }
            extra={[<Button size="middle" icon={<FilterOutlined />} />]}
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
export default Order;
