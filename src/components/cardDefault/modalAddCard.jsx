import React from "react";
import PropTypes from "prop-types";
import { Col, Input, Modal, Row, Spin } from "antd";
import Card from "../card";
import getDataFromApi from "../../api/configApi";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import SelectLeagues from "../select/selectLeagues";
import openNotificationWithIcon from "../notification";
import { useDispatch } from "react-redux";
import { addPlayerPick } from "../../saga/actions/playerActions";
const { Search } = Input;

function ModalAddCard(props) {
  const {
    isModalVisible,
    setIsModalVisible,
    objChoose,
    setObjChoose,
    position,
  } = props;
  const { control, watch } = useForm();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [arrPlayer, setArrPlayer] = useState([]);
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  useEffect(() => {
    getDataFromApi("status")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onSearch = (value) => {
    if (!watch().league_id) {
      openNotificationWithIcon("error", "Choose a league");
      return;
    }
    if (value.length < 4) {
      openNotificationWithIcon("error", "At least 4 characters required");
      return;
    }
    setLoading(true);
    getDataFromApi(`players?league=${watch().league_id}&search=${value}`)
      .then((res) => {
        if (res.data.response.length > 0) {
          setArrPlayer(res.data.response);
        } else {
          openNotificationWithIcon(
            "warning",
            `No player with name '${value}' was found`
          );
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        openNotificationWithIcon("error", err.response.message);
        setLoading(false);
      });
  };
  const dataFromChild = (data) => {
    setObjChoose(data);
    dispatch(addPlayerPick(data));
  };
  return (
    <Modal
      title="Choose a player card"
      visible={isModalVisible}
      // onOk={handleOk}
      width={"60vw"}
      onCancel={handleCancel}
      footer={null}
    >
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <SelectLeagues control={control} name="league_id" label={"League"} />
        </Col>
        <Col span={16}>
          <Search
            placeholder="Enter football player name"
            onSearch={onSearch}
            enterButton
          />
        </Col>
      </Row>

      <div
        style={{
          height: "400px",
          paddingTop: 40,
          marginTop: 20,

          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <Row gutter={[32, 48]}>
          {loading ? (
            <div className="center-loading">
              <Spin loading={loading} size="large" />
            </div>
          ) : (
            <>
              {arrPlayer.map((item) => {
                console.log(item);
                return (
                  <Col span={6} className="col-custom">
                    <Card
                      key={item.player.id}
                      data={item.player}
                      teamPlayed={item.statistics}
                      dataFromChild={dataFromChild}
                      setIsModalVisible={setIsModalVisible}
                      position={position}
                    />
                  </Col>
                );
              })}
            </>
          )}
        </Row>
      </div>
    </Modal>
  );
}

ModalAddCard.propTypes = {};

export default ModalAddCard;
