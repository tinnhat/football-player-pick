import { Col, Row } from "antd";
import React from "react";
import Card from "../card";
import CardDefault from "../cardDefault";

const Computer = (props) => {
  return (
    <div className="player-column">
      <Row gutter={[16, 16]} className="row-custom">
        <Col span={6} className="col-custom">
          {/* <Card /> */}
          <CardDefault />
        </Col>
        <Col span={6} className="col-custom">
          {/* <Card /> */}
          <CardDefault />
        </Col>
      </Row>
      <Row gutter={[16, 16]} className="row-custom">
        <Col span={6} className="col-custom">
          {/* <Card /> */}
          <CardDefault />
        </Col>
        <Col span={6} className="col-custom">
          {/* <Card /> */}
          <CardDefault />
        </Col>
        <Col span={6} className="col-custom">
          {/* <Card /> */}
          <CardDefault />
        </Col>
        <Col span={6} className="col-custom">
          {/* <Card /> */}
          <CardDefault />
        </Col>
      </Row>
      <Row gutter={[16, 16]} className="row-custom">
        <Col span={6} className="col-custom">
          {/* <Card /> */}
          <CardDefault />
        </Col>
        <Col span={6} className="col-custom">
          {/* <Card /> */}
          <CardDefault />
        </Col>
        <Col span={6} className="col-custom">
          {/* <Card /> */}
          <CardDefault />
        </Col>
        <Col span={6} className="col-custom">
          {/* <Card /> */}
          <CardDefault />
        </Col>
      </Row>
      <Row gutter={[16, 16]} className="row-custom">
        <Col span={6} className="col-custom">
          {/* <Card /> */}
          <CardDefault />
        </Col>
      </Row>
    </div>
  );
};

Computer.propTypes = {};

export default Computer;
