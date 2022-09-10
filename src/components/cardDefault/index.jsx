import React, { useState } from "react";
import ModalAddCard from "./modalAddCard";

function CardDefault(props) {
  const { position } = props;
  const [objChoose, setObjChoose] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleAddCard = () => {
    setIsModalVisible(true);
  };

  return (
    <div className="card">
      <div className="bkg-card-2">
        {objChoose === null ? (
          <div className="main-card main-card-default">
            <p className="icon-plus" onClick={handleAddCard}>
              +
            </p>

            {isModalVisible ? (
              <ModalAddCard
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                objChoose={objChoose}
                setObjChoose={setObjChoose}
                position={position}
              />
            ) : (
              <></>
            )}
          </div>
        ) : (
          <div className="main-card" style={{ cursor: "default" }}>
            <div className="nation">
              <img src={objChoose?.nationality} alt="" className="nation-img" />
              <p className="height">{objChoose?.height}</p>
              <p className="weight">{objChoose?.weight}</p>
            </div>
            <img src={objChoose?.photo} alt="" className="card-avatar" />
            <div className="tag-team">
              <img src={objChoose?.logo} alt="" className="logo-team" />
              <p
                className={
                  objChoose?.name.length < 18 ? "card-name" : "card-name-length"
                }
              >
                {objChoose?.name}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

CardDefault.propTypes = {};

export default CardDefault;
