import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";

import logo from "../../assets/img/logo.png";
import getDataFromApi from "../../api/configApi";
import axios from "axios";

function Card(props) {
  const { position, setIsModalVisible } = props;
  const { name, nationality, photo, height, weight } = props.data;
  const [arrPlayed, setArrPlayed] = useState(props.teamPlayed);
  const dataPlayerPick = (data) => {
    props.dataFromChild(data);
  };

  const handleClickAddCard = () => {
    const dataSend = {
      name: name,
      photo: photo,
      nationality: `https://countryflagsapi.com/png/${nationality}`,
      height: height,
      weight: weight,
      logo: arrPlayed.length > 0 ? arrPlayed[0].team.logo : "",
      postion: position,
    };
    dataPlayerPick(dataSend);
    setIsModalVisible(false);
  };

  return (
    <div className="card" onClick={handleClickAddCard}>
      <div className="bkg-card-2">
        <div className="main-card">
          <div className="nation">
            <img
              src={`https://countryflagsapi.com/png/${nationality}`}
              alt=""
              className="nation-img"
            />
            <p className="height">{height}</p>
            <p className="weight">{weight}</p>
          </div>
          <img src={photo} alt="" className="card-avatar" />
          <div className="tag-team">
            <img
              src={arrPlayed.length > 0 ? arrPlayed[0].team.logo : ""}
              alt=""
              className="logo-team"
            />
            <p className={name.length < 20 ? "card-name" : "card-name-length"}>
              {name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {};

export default Card;
