import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Button, Input } from "antd";
import io from "socket.io-client";
import { useEffect } from "react";
import { useState } from "react";
import "./style.scss";
import { SendOutlined } from "@ant-design/icons";
const socket = io.connect("https://chat-app-fpp.herokuapp.com/");

const ChatBox = (props) => {
  const { name } = props;
  const ref = useRef();

  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState([]);

  useEffect(() => {
    socket.on("message from server", (data) => {
      setMessageReceived([...messageReceived, data]);
    });
  }, [messageReceived]);
  const allUser = Array.from(new Set(messageReceived.map(({ name }) => name)));
  const handleSendMessage = () => {
    if (message) {
      socket.emit("message", { name, message });
      setMessage("");
    }
  };
  const handleChangeInput = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div className="chat-box-container">
      <div className="box">
        <div className="header-box">
          <p>
            <span style={{ paddingLeft: "10px", color: "#fff" }}>In Room</span>
            {allUser.map((val) => (
              <span className="header-box-name">{val},</span>
            ))}
          </p>
        </div>
        {messageReceived.map((val, idx) => {
          console.log(val);
          if (val.name === name) {
            return (
              <p className="text-right" key={idx}>
                <span style={{ fontWeight: "500", paddingRight: "4px" }}>
                  {val.name}:
                </span>
                {""}
                {val.message}
              </p>
            );
          } else {
            return (
              <p className="text-left" key={idx}>
                <span style={{ fontWeight: "500", paddingRight: "4px" }}>
                  {val.name}:
                </span>
                {""}
                {val.message}
              </p>
            );
          }
        })}
        <div className="chat-flex">
          <Input
            placeholder="Message"
            value={message}
            onChange={handleChangeInput}
          />
          <Button type="primary" onClick={handleSendMessage}>
            <SendOutlined />
          </Button>
        </div>
      </div>
    </div>
  );
};

ChatBox.propTypes = {};

export default ChatBox;
