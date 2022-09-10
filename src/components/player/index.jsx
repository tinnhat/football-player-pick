import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";

import CardDefault from "../cardDefault";
import "./style.scss";
const Player = (props) => {
  return (
    <div className="player-column">
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <CardDefault position={"GK"} />
        </Col>
      </Row>
      <Row gutter={[16, 16]} className="row-custom">
        <Col span={6} className="col-custom">
          <CardDefault position={"LB"} />
        </Col>{" "}
        <Col span={6} className="col-custom">
          <CardDefault position={"LCB"} />
        </Col>
        <Col span={6} className="col-custom">
          <CardDefault position={"RCB"} />
        </Col>
        <Col span={6} className="col-custom">
          <CardDefault position={"RB"} />
        </Col>
      </Row>
      <Row gutter={[16, 16]} className="row-custom">
        <Col span={6} className="col-custom">
          <CardDefault position={"LM"} />
        </Col>
        <Col span={6} className="col-custom">
          <CardDefault position={"LCM"} />
        </Col>
        <Col span={6} className="col-custom">
          <CardDefault position={"RCM"} />
        </Col>
        <Col span={6} className="col-custom">
          <CardDefault position={"RM"} />
        </Col>
      </Row>
      <Row gutter={[16, 16]} className="row-custom">
        <Col span={6} className="col-custom">
          <CardDefault position={"LS"} />
        </Col>
        <Col span={6} className="col-custom">
          <CardDefault position={"RS"} />
        </Col>
      </Row>
    </div>
  );
};

Player.propTypes = {};

export default Player;
