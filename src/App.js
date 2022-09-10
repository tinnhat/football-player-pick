import { Col, Row } from "antd";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import ChatBox from "./components/box-chat";
import Login from "./components/box-chat/login";
import Computer from "./components/computer";
import Player from "./components/player";
function App() {
  const [showChat, setShowChat] = useState(false);
  const [name, setName] = useState("");
  const getName = (name) => {
    setName(name);
    setShowChat(true);
  };
  return (
    <>
      {showChat && (
        <div className="wrapper bkg">
          <div className="container">
            <div className="app">
              <Row>
                <Col span={20}>
                  <div className="bkg-stadium">
                    <Row>
                      <Col span={24}>
                        <Player />
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24}>{/* <Computer /> */}</Col>
                    </Row>
                  </div>
                </Col>
                <Col span={4}>
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div className="user-info">
                      <p
                        style={{
                          fontSize: "18px",
                          textTransform: "uppercase",
                          fontWeight: "500",
                        }}
                      >
                        <span>User:</span> {name}
                      </p>
                    </div>
                    {showChat && <ChatBox name={name} />}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      )}
      {!showChat && (
        <div className="login-page">
          <Login callback={getName} />
        </div>
      )}
    </>
  );
}

export default App;
